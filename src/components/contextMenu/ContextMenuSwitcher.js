import React from 'react'
import { connect } from 'react-redux'
import SlideIconMenu from './SlideIconMenu'
import { componentsWithContextMenu } from './supportedComponents'

const ContextMenuSwitcher = ({ menuToOpen }) => {

  switch (menuToOpen && menuToOpen.component) {
    case componentsWithContextMenu.SLIDE_ICON: {
      return <SlideIconMenu/>
    }
    default: {
      return <div hidden={true}/>
    }
  }

}

const mapStateToProps = (state) => ({
  menuToOpen: state.activeContextMenu
})

export default connect(mapStateToProps)(ContextMenuSwitcher)
