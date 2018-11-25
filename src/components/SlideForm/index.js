import React, { Component } from 'react'
import './style.css'

const modes = {
  EDIT: 'Edit',
  ADD: 'Add'
}

class Index extends Component {

  headerInput = React.createRef()
  textInput = React.createRef()

  componentDidMount () {
    const { slideToEdit } = this.props
    this.mode = modes.ADD
    if (slideToEdit) {
      this.headerInput.value = slideToEdit.slide.header
      this.textInput.value = slideToEdit.slide.text
      this.mode = modes.EDIT
    }
  }

  submit = (e) => {
    e.preventDefault()
    const { addSlide, updateSlide, slideToEdit, exit, position } = this.props
    const slide = {
      header: this.headerInput.value,
      text: this.textInput.value
    }
    this.mode === modes.ADD ?
      addSlide({ slide, position }) :
      updateSlide({
          ...slide,
          id: slideToEdit.slide.id,
        },
        position
      )

    this.clearInputs()
    exit()
  }

  clearInputs = () => {
    this.headerInput.value = ''
    this.textInput.value = ''
  }


  render () {
    let { exit } = this.props
    return (
      <form className='add-slide-form'>
        <div className='main'>
          <div className='form-input'>
            <input
              name='header'
              ref={node => this.headerInput = node}
              type="text"
              placeholder='Header'
            />
          </div>
          <div className="form-input text-area">
            <textarea
              id='text'
              name='text'
              ref={node => this.textInput = node}
              placeholder='Type content here...'
            />
          </div>
        </div>
        <footer className='section'>
          <button className='modal-button' type='submit' onClick={this.submit}>Submit</button>
          <button className='modal-button' onClick={exit}>Cancel</button>
        </footer>
      </form>
    )
  }
}

export default Index
