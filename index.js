const webpack = require('webpack')
const extensionList = require('./conf/ampExtensionList.json')
const HtmlComponentBuilder = require('./lib/HtmlComponentBuilder')
const AmpHtmlRendererBuilder = require('./lib/AmpHtmlRendererBuilder')
const constants = require('./conf/constants.json')
const {
  EXT_SCRIPT_SRC_PREFIX,
  HTML_COMPONENT_FILE_NAME,
  HTML_COMPONENT_CSS_FILE_NAME,
  HTML_RENDERER_FILE_NAME
} = constants

const findExtComponent = function (source) {
  const ampExtComponentPattern = /['|"](amp-.*?|form)['|"]/gm
  let matchedGroups
  let result = []

  while ((matchedGroups = ampExtComponentPattern.exec(source)) !== null) {
    result.push(matchedGroups[1])
  }

  return result
}

const generateScriptTag = function (comp) {
  const component = extensionList[comp]

  if (component) {
    const { name, version, dependencies } = component
    const customType = name === 'amp-mustache' ? 'custom-template' : 'custom-element'
    const script = `<script async ${customType}="${name}" src="${EXT_SCRIPT_SRC_PREFIX}${name}-${version}.js"></script>`

    // find all required dependencies recursively
    if (dependencies && dependencies.length > 0) {
      return [
        script,
        ...dependencies.reduce(
          (acc, dep) => [...acc, ...generateScriptTag(dep)],
          []
        )
      ]
    }

    return [script]
  }

  return []
}

const generateExtComponentScripts = function (chunk) {
  let components = []

  chunk.getModules().forEach((module) => {
    const componentFilePattern = /\.(js|jsx)$/
    const { userRequest, _source } = module

    if (componentFilePattern.test(userRequest)) {
      components = components.concat(findExtComponent(_source._value))
    }
  })

  const scripts = components
    .reduce((acc, name) => {
      return [
        ...acc,
        ...generateScriptTag(name)
      ]
    }, [])

  return Array.from(new Set(scripts)).join('')
}

const generateInlineCssContent = function (chunk, assets) {
  const cssFilePattern = /.*?\.css$/
  let inlineCssContent = ''

  // loop through each asset file name produced by the chunk
  chunk.files.forEach((fileName) => {
    if (cssFilePattern.test(fileName)) {
      inlineCssContent += assets[fileName].source()
    }
  })

  return inlineCssContent
}

const getAssetObj = (source) => {
  return ({
    source: () => source,
    size: () => source.length
  })
}

/*
* Extracts all the AMP page required inline styles and extension scripts from bundle and
* generates a React based renderer which will compose application, gathered styles and scripts
* into a AMP Html.
*/
class AmpReactRendererPlugin {
  constructor () {
    this.htmlComponentBuilder = new HtmlComponentBuilder()
    this.ampHtmlRendererBuilder = new AmpHtmlRendererBuilder()
  }

  setAssets (compilation) {
    const { assets } = compilation

    // loop through each chunk
    // module scanning for retrieving all required styles and amp extension component scripts
    compilation.chunks.forEach((chunk) => {
      const { name: entryName } = chunk
      const extComponentScripts = generateExtComponentScripts(chunk) || null
      const inlineCssContent = generateInlineCssContent(chunk, assets)

      const htmlSource = this.htmlComponentBuilder.build(extComponentScripts)
      compilation.assets[`${entryName}-${HTML_COMPONENT_FILE_NAME}`] = getAssetObj(htmlSource)

      const cssSource = inlineCssContent
      compilation.assets[`${entryName}-${HTML_COMPONENT_CSS_FILE_NAME}`] = getAssetObj(cssSource)

      const rendererSource = this.ampHtmlRendererBuilder.build()
      compilation.assets[HTML_RENDERER_FILE_NAME] = getAssetObj(rendererSource)
    })
  }

  apply (compiler) {
    if (compiler.options.mode === 'production') {
      throw new Error('This plugin can only be used in development mode')
    }

    // webpack v4/v5 compatibility:
    // https://github.com/webpack/webpack/issues/11425#issuecomment-690387207
    if (webpack.version.startsWith('4.')) {
      compiler.hooks.emit.tapAsync(
          this.constructor.name,
          (compilation, callback) => {
            this.setAssets(compilation)
            callback()
          }
      );
    } else {
      const { PROCESS_ASSETS_STAGE_ADDITIONS } = webpack.Compilation
      // Specifically hook into thisCompilation, as per
      // https://github.com/webpack/webpack/issues/11425#issuecomment-690547848
      compiler.hooks.thisCompilation.tap(
          this.constructor.name, (compilation) => {
            compilation.hooks.processAssets.tap({
              name: this.constructor.name,
              stage: PROCESS_ASSETS_STAGE_ADDITIONS,
            }, () => {
                this.setAssets(compilation)
            })
          },
      )
    }
  }
}

module.exports = AmpReactRendererPlugin
