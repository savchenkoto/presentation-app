import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeActiveSlide } from '../actions/slides'
import { dropSlide, grabSlide, moveGrabbedSlideTo } from '../actions/grabbedSlide'
import { changeActiveModalTo } from '../actions/modals'
import SlideIcon from './SlideIcon'
import { changeActiveContextMenu } from '../actions/contextMenu'
import AddSlidePlaceholder from './AddSlidePlaceholder'
import { modals } from './modals/modals'

class SlidesList extends Component {

  componentDidMount () {
    const { changeActiveSlide, slides } = this.props
    slides && slides.length && changeActiveSlide(slides[0].id)
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
      activeSlideId,
      grabSlide,
      moveGrabbedSlideTo,
      dropSlide,
      grabbedSlide,
      changeActiveContextMenu,
      addSlide
    } = this.props

    return (
      <div className='slides-grid'>
        {slides.map((item, index) => (
          <SlideIcon
            key={item.id}
            index={index}
            slide={item}
            isActive={activeSlideId === item.id}
            changeActiveSlide={() => this.handleClick(item.id)}
            grabSlide={grabSlide}
            moveGrabbedSlideTo={moveGrabbedSlideTo}
            dropSlide={dropSlide}
            grabbedSlide={grabbedSlide}
            changeActiveContextMenu={changeActiveContextMenu}
          />
        ))}
        {slides.length ? <AddSlidePlaceholder addSlide={addSlide}/> : ''}
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
  changeActiveSlide: (slideId) => dispatch(changeActiveSlide(slideId)),
  grabSlide: (slide, position) => dispatch(grabSlide(slide, position)),
  moveGrabbedSlideTo: (position) => dispatch(moveGrabbedSlideTo(position)),
  dropSlide: (slide, to, initialPosition) => dispatch(dropSlide(dispatch, slide, to, initialPosition)),
  changeActiveContextMenu: ({ component, coords, props }) => dispatch(changeActiveContextMenu(component, coords, props)),
  addSlide: () => dispatch(changeActiveModalTo(modals.SLIDE_FORM))
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesList)
