import React from 'react'
import { connect } from 'react-redux'
import Slide from './slide/index'

const SlidesCarousel = ({ slides }) => {
  return (
    <div className='box'>
      <Slide slide={slides[0]}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  slides: state.slides
})

export default connect(mapStateToProps)(SlidesCarousel)
