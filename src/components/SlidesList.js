import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSlides, selectSlide } from '../actions/slides'
import Slide from './slide/index'


class SlidesList extends Component {

  componentDidMount () {
    const { fetchSlides, selectSlide, slides } = this.props
    fetchSlides()
    slides.length && selectSlide(slides[0].id)
  }

  handleClick = (id) => {
    const { selectSlide, activeSlideId } = this.props
    activeSlideId !== id && selectSlide(id)
  }

  render () {
    const { slides } = this.props
    return (
      <div className='slidesWrapper box'>
        {slides.map(item => (
          <div
            key={item.id}
            className='slideWrapper'
          >
            <Slide
              slide={item}
              selectSlide={this.handleClick}
            />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  slides: state.slides,
  activeSlideId: state.activeSlideId
})

const mapDispatchToProps = (dispatch) => ({
  fetchSlides: () => dispatch(fetchSlides()),
  selectSlide: (slideId) => dispatch(selectSlide(slideId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesList)
