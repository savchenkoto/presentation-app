import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSlides, selectSlide } from '../actions/slides'
import { changeActiveModalTo } from '../actions/modals'
import Slide from './slide/index'
import addControlIcons from './hoc/addControlIcons'
import { modals } from './modals/Modals'


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
    const { slides, changeActiveModal } = this.props
    const SlideWithControlIcons = addControlIcons(Slide)
    return (
      <div className='slides-wrapper box'>
        {slides.map(item => (
          <div key={item.id} className='slide-wrapper'>
            <SlideWithControlIcons
              slide={item}
              selectSlide={this.handleClick}
              handleDelete={() => changeActiveModal(modals.DELETE_CONFIRMATION, {slide: item})}
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
  changeActiveModal: (modal, props) => dispatch(changeActiveModalTo(modal, props))
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesList)
