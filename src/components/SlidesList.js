import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSlides, selectSlide } from '../actions/slides'
import { changeActiveModalTo } from '../actions/modals'
import { modals } from './modals/Modals'
import SlideIcon from './SlideIcon'


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
    const { slides, changeActiveModal, activeSlideId } = this.props
    console.log('SlideList: ', slides)
    return (
      <div className='slides-grid box'>
        {slides.map((item, index) => (
          <SlideIcon
            key={item.id}
            index={index}
            slide={item}
            isActive={activeSlideId === item.id}
            selectSlide={() => this.handleClick(item.id)}
            handleDelete={() => changeActiveModal(modals.DELETE_CONFIRMATION, {slide: item})}
            handleEdit={() => changeActiveModal(modals.SLIDE_FORM, {slide: item})}
          />
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
