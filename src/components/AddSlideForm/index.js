import React from 'react'
import './style.css'


function Index ({ slidesCount, addSlide, exit  }) {

  // TODO: add validation
  let positionInput
  let headerInput
  let textInput

  const submit = (e) => {
    e.preventDefault()
    const slide = {
      header: headerInput.value,
      text: textInput.value
    }
    addSlide({ slide, position: positionInput.value })
    clearInputs()
    exit()
  }

  const clearInputs = () => {
    positionInput.value = ''
    headerInput.value = ''
    textInput.value = ''
  }

  return (
    <form className='add-slide-form'>
      <div className='grid'>
        <div className='form-input position-grid'>
          <p className='position-label'>#</p>
          <input
            name='position'
            ref={node => positionInput = node}
            type='number'
            defaultValue={slidesCount + 1}
            min={1}
            max={slidesCount}
          />
        </div>
        <div className='form-input'>
          <input
            name='header'
            ref={node => headerInput = node}
            type="text"
            placeholder='Header'
          />
        </div>
        <div className="form-input text-area">
            <textarea
              id='text'
              name='text'
              ref={node => textInput = node}
              placeholder='Type content here...'
            />
        </div>
      </div>
      <footer className='section'>
        <button type='submit' onClick={submit}>Add</button>
        <button onClick={exit}>Cancel</button>
      </footer>
    </form>
  )
}

export default Index
