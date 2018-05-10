const React = require('react')
const { createJsonScriptElement } = require('react-ampify')

const Application = () => {
  const json = {
    'currentAnimal': 'dog',
    'dog': {
      'imageUrl': '/img/Border_Collie.jpg',
      'videoUrl': '/video/dog-video.mp4',
      'style': 'greenBackground',
      'iframeUrl': 'https://player.vimeo.com/video/183849543'
    },
    'cat': {
      'imageUrl': '/img/cat-looking-up-300x200.jpg',
      'videoUrl': '/video/cat-video.mp4',
      'style': 'redBackground',
      'iframeUrl': 'https://player.vimeo.com/video/185199565'
    }
  }
  return (
    <React.Fragment>
      <amp-state id='allAnimals'>
        {createJsonScriptElement(json)}
      </amp-state>
    </React.Fragment>
  )
}

module.exports = Application
