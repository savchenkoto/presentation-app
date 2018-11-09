import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSlides, selectSlide, deleteSlide } from '../actions/slides'
import Slide from './slide/index'
import addControlIcons from './hoc/addControlIcons'


class SlidesList extends Component {

  componentDidMount () {
    const { fetchSlides, selectSlide, slides, activeSlideId } = this.props
    fetchSlides()
    slides.length && slides[0].id !== activeSlideId && selectSlide(slides[0].id)
  }

  handleClick = (id) => {
    const { selectSlide, activeSlideId } = this.props
    activeSlideId !== id && selectSlide(id)
  }

  render () {
    const { slides, deleteSlide } = this.props
    const SlideWithControlIcons = addControlIcons(Slide)
    return (
      <div className='slides-wrapper box'>
        {slides.map(item => (
          <div key={item.id} className='slide-wrapper'>
            <SlideWithControlIcons
              slide={item}
              selectSlide={this.handleClick}
              handleDelete={() => deleteSlide(item.id)}
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
  selectSlide: (slideId) => dispatch(selectSlide(slideId)),
  deleteSlide: (slideId) => dispatch(deleteSlide(slideId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesList)
