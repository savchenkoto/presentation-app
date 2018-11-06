import React from 'react'


const SlideMini = ({ slide }) => (
  <div className='slideIcon'>
    <h1>{slide.header}</h1>
    <p>{slide.text}</p>
  </div>
)

export default SlideMini
