const React = require('react')

const Application = () => {
  return (
    <React.Fragment>
      <amp-accordion>
        <section expanded=''>
          <h4>Section 1</h4>
          <p>Bunch of awesome content.</p>
        </section>
        <section>
          <h4>Section 2</h4>
          <div>Bunch of even more awesome content. This time in a
            <code>&lt;div&gt;</code>.</div>
        </section>
        <section>
          <h4>Section 3</h4>
          <figure>
            <amp-img src='/img/amp.jpg'
              width='1080'
              height='610'
              layout='responsive'
              alt='an image' />
            <figcaption>Images work as well.</figcaption>
          </figure>
        </section>
      </amp-accordion>
    </React.Fragment>
  )
}

module.exports = Application
