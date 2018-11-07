import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSlides } from '../actions/slides'
import Slide from './slide/index'


class SlidesList extends Component {

  componentDidMount () {
    const { fetchSlides } = this.props
    fetchSlides()
  }

  render () {
    const { slides } = this.props
    return (
      <div className='slidesWrapper box'>
        {slides.map(item => (
          <div className='slideWrapper'>
            <Slide key={item.id} slide={item}/>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  slides: state.slides
})

const mapDispatchToProps = (dispatch) => ({
  fetchSlides: () => dispatch(fetchSlides())
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesList)
