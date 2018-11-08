import React from 'react'
import './index.css'
const addControlIcons = (WrappedComponents) => {

  return class extends React.Component {

    state = {
      hovered: false
    }

    render () {
      const { hovered } = this.state
      const { handleDelete } = this.props
      return (
        <div className='slideControl'
             onMouseOver={() => hovered || this.setState({ hovered: true })}
             onMouseLeave={() => hovered && this.setState({ hovered: false })}
        >
          <button className={`control deleteControl ${hovered ? 'hovered' : ''}`}
                  onClick={handleDelete}
          >
            x
          </button>
          <WrappedComponents {...this.props}/>
        </div>
      )
    }
  }
}

export default addControlIcons
