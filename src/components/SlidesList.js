import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSlides, changeActiveSlide } from '../actions/slides'
import { dropSlide, grabSlide, moveGrabbedSlideTo } from '../actions/grabbedSlide'
import { changeActiveModalTo } from '../actions/modals'
import { modals } from './modals/modals'
import SlideIcon from './SlideIcon'
import { changeActiveContextMenu } from '../actions/contextMenu'


class SlidesList extends Component {

  componentDidMount () {
    const { fetchSlides } = this.props
    fetchSlides()
  }

  componentDidUpdate (prevProps) {
    const { slides, activeSlideId, changeActiveSlide } = this.props;
    if (!activeSlideId && slides.length) {
      const nextActiveSlideIndex = this.getNextActiveSlideIndex(prevProps.slides, prevProps.activeSlideId)
      changeActiveSlide(slides[nextActiveSlideIndex].id)
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
    const { changeActiveSlide, activeSlideId } = this.props
    activeSlideId !== id && changeActiveSlide(id)
  }

  render () {

    const {
      slides,
      changeActiveModal,
      activeSlideId,
      grabSlide,
      moveGrabbedSlide,
      dropSlide,
      grabbedSlide,
      changeActiveContextMenu,
    } = this.props

    return (
      <div className='slides-grid box'>
        {slides.map((item, index) => (
          <SlideIcon
            key={item.id}
            index={index}
            slide={item}
            isActive={activeSlideId === item.id}
            changeActiveSlide={() => this.handleClick(item.id)}
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
            changeActiveContextMenu={changeActiveContextMenu}
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
  changeActiveSlide: (slideId) => dispatch(changeActiveSlide(slideId)),
  changeActiveModal: ({ modal, props }) => dispatch(changeActiveModalTo(modal, props)),
  grabSlide: (slide, position) => dispatch(grabSlide(slide, position)),
  moveGrabbedSlide: (position) => dispatch(moveGrabbedSlideTo(position)),
  dropSlide: (slide, to) => dispatch(dropSlide.bind(null, dispatch)(slide, to)),
  changeActiveContextMenu: ({ component, coords, props }) => dispatch(changeActiveContextMenu(component, coords, props))
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesList)
