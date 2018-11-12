import React, { Component } from 'react'
import Slide from './Slide'
import '../styles/slideIcon.css'

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
            <button className='control' onClick={handleDelete}>
              Delete
            </button>
            <button className='control' onClick={handleEdit}>
              Edit
            </button>
          </div>
          <Slide slide={slide}/>
        </div>
      </div>
    )
  }

}

export default SlideIcon
