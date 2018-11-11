import React from 'react'
import './index.css'
const addControlIcons = (WrappedComponents) => {

  return class extends React.Component {

    state = {
      hovered: false
    }

    render () {
      const { hovered } = this.state
      const { handleDelete, handleEdit } = this.props
      return (
        <div className='slide-control'
             onMouseOver={() => hovered || this.setState({ hovered: true })}
             onMouseLeave={() => hovered && this.setState({ hovered: false })}
        >
          <div className={`controls ${hovered ? 'hovered' : ''}`}>
            <button className='control' onClick={handleDelete}>
              Delete
            </button>
            <button className='control' onClick={handleEdit}>
              Edit
            </button>
          </div>
          <WrappedComponents {...this.props}/>
        </div>
      )
    }
  }
}

export default addControlIcons
