import React from 'react'
import SlideMini from './SlideMini'

const Slides = ({ images }) => (
  images.map(image => <SlideMini key={image.id} image={image}/>)
)

export default Slides
