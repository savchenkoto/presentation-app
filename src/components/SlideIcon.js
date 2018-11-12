import React, { Component } from 'react'
import Slide from './Slide'
import '../styles/slideIcon.css'
import { icons } from '../svg/icons'
import Icon from './Icon'

class SlideIcon extends Component {

  state = {
    hovered: false
  }

  render() {
    const { hovered } = this.state
    const { handleDelete, handleEdit, selectSlide, slide, index, isActive } = this.props
    return (
      <div
        className={`slide-icon-grid ${isActive ? 'active' : ''}`}
        onMouseOver={() => hovered || this.setState({ hovered: true })}
        onMouseLeave={() => hovered && this.setState({ hovered: false })}
        onClick={selectSlide}
      >
        <div className='slide-info'>
          <span>{index + 1}</span>
        </div>
        <div className={`controls-wrapper ${hovered ? 'hovered' : ''}`}>
          <div className={`controls ${hovered ? 'hovered' : ''}`}>
            <Icon
              className='control'
              icon={icons.TRASH}
              viewBox='0 0 1152 1024'
              onClick={handleDelete}
            />
            <Icon
              className='control'
              icon={icons.EDIT}
              viewBox='0 0 1152 1024'
              onClick={handleEdit}
            />
          </div>
          <Slide slide={slide}/>
        </div>
      </div>
    )
  }

}

export default SlideIcon
