import React from 'react'
import { connect } from 'react-redux'
import Slide from './Slide'

const SlidesCarousel = ({ slides, activeSlideId }) => {
  const activeSlide = activeSlideId ?
    slides.find(slide => slide.id === activeSlideId) :
    slides.length ? slides[0] : ''
  return (
    <div className='box carousel-grid'>
      <Slide slide={activeSlide}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  slides: state.slides,
  activeSlideId: state.activeSlideId
})

export default connect(mapStateToProps)(SlidesCarousel)
