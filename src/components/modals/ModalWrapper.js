import React, { Component } from 'react'

class ModalWrapper extends Component {

  componentDidMount () {
    this.self.focus()

  }

  handleBackgroundClick = (e) => {
    const { onBackgroundClick } = this.props
    e.target === e.currentTarget && onBackgroundClick()
  }

  handleKeyPress = (e) => {
    const { onEscapeClick } = this.props
    e.key === 'Escape' && onEscapeClick()
  }

  render () {
    const { width, title, children } = this.props
    return (
      <div className='modal-background'
           onClick={this.handleBackgroundClick}
           tabIndex={0}
           onKeyDown={this.handleKeyPress}
           ref={node => this.self = node}
      >
        <div className='modal-window' style={{ width: width }}>
          <header className='section'>
            <span>{title}</span>
          </header>
          <div className='modal-body'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default ModalWrapper
