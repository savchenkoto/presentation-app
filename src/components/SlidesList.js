import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSlides, selectSlide } from '../actions/slides'
import { dropSlide, grabSlide, moveGrabbedSlideTo } from '../actions/grabbedSlide'
import { changeActiveModalTo } from '../actions/modals'
import { modals } from './modals/modals'
import SlideIcon from './SlideIcon'


class SlidesList extends Component {

  componentDidMount () {
    const { fetchSlides } = this.props
    fetchSlides()
  }

  componentDidUpdate (prevProps) {
    const { slides, activeSlideId, selectSlide } = this.props;
    if (!activeSlideId && slides.length) {
      const nextActiveSlideIndex = this.getNextActiveSlideIndex(prevProps.slides, prevProps.activeSlideId)
      selectSlide(slides[nextActiveSlideIndex].id)
    }
  }

  getNextActiveSlideIndex = (prevSlides, prevActiveSlideId) => {
    const { slides } = this.props
    const prevActiveSlideIndex = prevSlides.findIndex(item => item.id === prevActiveSlideId)
    return prevActiveSlideIndex > -1 ?
      prevActiveSlideIndex < slides.length ?
        prevActiveSlideIndex :
        prevActiveSlideIndex - 1 :
      0
  }

  handleClick = (id) => {
    const { selectSlide, activeSlideId } = this.props
    activeSlideId !== id && selectSlide(id)
  }

  render () {
    const { slides, changeActiveModal, activeSlideId, grabSlide, moveGrabbedSlide, dropSlide, grabbedSlide } = this.props
    return (
      <div className='slides-grid box'>
        {slides.map((item, index) => (
          <SlideIcon
            key={item.id}
            index={index}
            slide={item}
            isActive={activeSlideId === item.id}
            selectSlide={() => this.handleClick(item.id)}
            deleteSlide={() => changeActiveModal({
              modal: modals.DELETE_CONFIRMATION,
              props: {slide: item}
            })}
            editSlide={() => changeActiveModal({
              modal: modals.SLIDE_FORM,
              props: {slide: item}
            })}
            grabSlide={grabSlide}
            moveGrabbedSlide={moveGrabbedSlide}
            dropSlide={dropSlide}
            grabbedSlide={grabbedSlide}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  slides: state.slides,
  activeSlideId: state.activeSlideId,
  grabbedSlide: state.grabbedSlide
})

const mapDispatchToProps = (dispatch) => ({
  fetchSlides: () => dispatch(fetchSlides()),
  selectSlide: (slideId) => dispatch(selectSlide(slideId)),
  changeActiveModal: ({ modal, props }) => dispatch(changeActiveModalTo(modal, props)),
  grabSlide: (slide, position) => dispatch(grabSlide(slide, position)),
  moveGrabbedSlide: (position) => dispatch(moveGrabbedSlideTo(position)),
  dropSlide: (slide, to) => dispatch(dropSlide.bind(null, dispatch)(slide, to))
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesList)
