import React, { Component } from 'react'
import Slide from './Slide'
import '../styles/slideIcon.css'
import { componentsWithContextMenu } from './contextMenu/supportedComponents'

class SlideIcon extends Component {

  state = {
    hovered: false,
  }

  handleSlideGrab = () => {
    const { slide, index, grabSlide } = this.props
    grabSlide(slide, index)
  }

  onDragEnter = () => {
    const { index, moveGrabbedSlide, grabbedSlide } = this.props
    grabbedSlide.position !== index && moveGrabbedSlide(index)
  }

  handleDrop = () => {
    const { dropSlide, grabbedSlide } = this.props
    dropSlide(grabbedSlide.slide, grabbedSlide.position)
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
    const { dragging } = this.state
    const { changeActiveSlide, slide, index, isActive } = this.props
    return (
      <div
        className={`slide-icon-grid ${isActive ? 'active' : ''} ${dragging ? 'dragging' : ''}`}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={changeActiveSlide}
        onContextMenu={this.handleRightClick}
        onDragStart={this.handleSlideGrab}
        onDragEnter={this.onDragEnter}
        onDragEnd={this.handleDrop}
        draggable={true}
      >
        <div className='slide-info'>
          <span>{index + 1}</span>
        </div>
        <div className='slide-icon-wrapper'>
          <Slide slide={slide}/>
        </div>
      </div>
    )
  }

}

export default SlideIcon
