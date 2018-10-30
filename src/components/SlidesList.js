import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchImages } from '../actions/images'
import Slides from './Slides'


class SlidesList extends Component {

  componentDidMount () {
    const { fetchImages } = this.props
    fetchImages()
  }

  render () {
    const { images } = this.props
    return (
      <div className='slidesWrapper box'>
        <Slides images={images}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  images: state.images
})

const mapDispatchToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchImages())
})

export default connect(mapStateToProps, mapDispatchToProps)(SlidesList)
