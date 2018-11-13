import React, { Component } from 'react'
import Slide from './Slide'
import '../styles/slideIcon.css'
import { icons } from '../svg/icons'
import Icon from './Icon'

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

  render() {
    const { hovered, dragging } = this.state
    const { deleteSlide, editSlide, selectSlide, slide, index, isActive } = this.props
    return (
      <div
        onDragEnter={this.onDragEnter}
        className={`slide-icon-grid ${isActive ? 'active' : ''} ${dragging ? 'dragging' : ''}`}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={selectSlide}
        onDragStart={this.handleSlideGrab}
        onDragEnd={this.handleDrop}
        draggable={true}
      >
        <div className='slide-info'>
          <span>{index + 1}</span>
        </div>
        <div className='controls-wrapper'>
          <div className={`controls ${hovered ? 'hovered' : ''}`}>
            <Icon
              className='control'
              icon={icons.TRASH}
              viewBox='0 0 1152 1024'
              onClick={deleteSlide}
            />
            <Icon
              className='control'
              icon={icons.EDIT}
              viewBox='0 0 1152 1024'
              onClick={editSlide}
            />
          </div>
          <Slide slide={slide}/>
        </div>
      </div>
    )
  }

}

export default SlideIcon
