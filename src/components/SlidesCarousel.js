import React from 'react'
import { connect } from 'react-redux'
import Slide from './Slide'
import '../styles/slideCarousel.css'
import { changeActiveSlide } from '../actions/slides'
import Icon from './Icon'
import { icons } from '../svg/icons'

const SlidesCarousel = ({ slides, activeSlideId, changeActiveSlide }) => {

  const activeSlide = activeSlideId && slides.find(slide => slide.id === activeSlideId)
  const currentIndex = activeSlideId && slides.findIndex(item => item.id === activeSlideId)

  const nextSlide = (index) => {
    index < slides.length - 1 && changeActiveSlide(slides[index + 1].id)
  }

  const prevSlide = (index) => {
    index > 0 && changeActiveSlide(slides[index - 1].id)
  }

  return (
    <div className='carousel grid'>
      <div
        className='navigate left'
        onClick={() => prevSlide(currentIndex)}
      >
        <div className='icon-wrapper'>
          <Icon icon={icons.LEFT_ARROW} viewBox='0 0 640 1024'/>
        </div>
      </div>
      <div className='content'>
        <Slide slide={activeSlide}/>
      </div>
      <div
        className='navigate right'
        onClick={() => nextSlide(currentIndex)}
      >
        <div className='icon-wrapper'>
          <Icon icon={icons.RIGHT_ARROW} viewBox='0 0 640 1024'/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  slides: state.slides,
  activeSlideId: state.activeSlideId
})

const mapDispatchToProps = (dispatch) => ({
  changeActiveSlide: (slideId) => dispatch(changeActiveSlide(slideId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesCarousel)
