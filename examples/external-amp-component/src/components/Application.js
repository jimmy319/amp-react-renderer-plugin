import React from 'react'
import SquareImage, { statics } from 'amp-react-square-img'
import 'amp-react-square-img/dist/css/SquareImage.css'

const Application = () => {
  return (
    <div>
      <h1>Create AMP app with shared external component</h1>
      <SquareImage
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYLR2n0w6L5fjXpeW5Z0UFWwK9aJQORTF4mPskr42LfkiAVh0'
        resizingStrategy={statics.CONTAIN_RESIZING}
      />
    </div>
  )
}

export default Application
