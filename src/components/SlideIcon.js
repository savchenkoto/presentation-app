import React, { Component } from 'react'
import Slide from './Slide'
import '../styles/slideIcon.css'
import { componentsWithContextMenu } from './contextMenu/supportedComponents'

class SlideIcon extends Component {

  handleSlideGrab = () => {
    const { slide, index, grabSlide } = this.props
    grabSlide(slide, index)
  }

  onDragEnter = () => {
    const { index, moveGrabbedSlideTo, grabbedSlide } = this.props
    grabbedSlide.position !== index && moveGrabbedSlideTo(index)
  }

  handleDrop = () => {
    const { dropSlide, grabbedSlide, index } = this.props
    dropSlide(grabbedSlide.slide, grabbedSlide.position, index)
  }

  handleRightClick = (e) => {
    e.preventDefault()
    const { slide, changeActiveContextMenu, changeActiveSlide } = this.props
    changeActiveSlide(slide)
    changeActiveContextMenu({
      component: componentsWithContextMenu.SLIDE_ICON,
      coords: { x: e.clientX, y: e.clientY },
      props: { slide: { ...slide } }
    })
  }

  render() {
    const { changeActiveSlide, slide, index, isActive } = this.props
    return (
      <div
        className={`slide-icon grid ${isActive ? 'active' : ''}`}
        onClick={changeActiveSlide}
        onContextMenu={this.handleRightClick}
        onDragStart={this.handleSlideGrab}
        onDragEnter={this.onDragEnter}
        onDragEnd={this.handleDrop}
        draggable={true}
      >
        <div className='info'>
          <span>{index + 1}</span>
        </div>
        <div className={`slide-icon-wrapper ${isActive ? 'active' : ''}`}>
          <Slide slide={slide} className='icon'/>
        </div>
      </div>
    )
  }

}

export default SlideIcon
