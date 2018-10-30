import React from 'react'


const SlideMini = ({ image }) => (
  <div className='slideIcon'>
    <img
      src={image.path}
      alt='Slide'
    />
  </div>
)

export default SlideMini
