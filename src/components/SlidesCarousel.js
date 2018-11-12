import React from 'react'
import { connect } from 'react-redux'
import Slide from './Slide'
import '../styles/slideCarousel.css'
import { selectSlide } from '../actions/slides'

const SlidesCarousel = ({ slides, activeSlideId, selectSlide }) => {

  const activeSlide = activeSlideId && slides.find(slide => slide.id === activeSlideId)
  const currentIndex = activeSlideId && slides.findIndex(item => item.id === activeSlideId)

  const nextSlide = (index) => {
    index < slides.length - 1 && selectSlide(slides[index + 1].id)
  }

  const prevSlide = (index) => {
    index > 0 && selectSlide(slides[index - 1].id)
  }

  return (
    <div className='box carousel-grid'>
      <div
        className='navigate left'
        onClick={() => prevSlide(currentIndex)}
      >
        <span>{`<`}</span>
      </div>
      <div className='content'>
        <Slide slide={activeSlide}/>
      </div>
      <div
        className='navigate right'
        onClick={() => nextSlide(currentIndex)}
      >
        <span>{`>`}</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  slides: state.slides,
  activeSlideId: state.activeSlideId
})

const mapDispatchToProps = (dispatch) => ({
  selectSlide: (slideId) => dispatch(selectSlide(slideId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesCarousel)
