import React from 'react'
import SlideMini from './SlideMini'

const Slides = ({ slides }) => (
  slides.map(item => <SlideMini key={item.id} slide={item}/>)
)

export default Slides
