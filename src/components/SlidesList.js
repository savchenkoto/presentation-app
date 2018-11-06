import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSlides } from '../actions/slides'
import Slides from './Slides'


class SlidesList extends Component {

  componentDidMount () {
    const { fetchSlides } = this.props
    fetchSlides()
  }

  render () {
    const { slides } = this.props
    return (
      <div className='slidesWrapper box'>
        <Slides slides={slides}/>
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
