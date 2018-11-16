import React from 'react'
import '../../styles/contextMenu.css'
import ContextMenuItem from './ContextMenuItem'
import ContextMenuWrapper from './ContextMenuWrapper'
import { connect } from 'react-redux'
import { closeContextMenu } from '../../actions/contextMenu'
import { addSlide } from '../../actions/slides'
import { changeActiveModalTo } from '../../actions/modals'
import { modals } from '../modals/modals'

export const SlideIconMenu = ({ slides, menuInfo, closeMenu, changeActiveModalTo }) => {

  const { slide } = menuInfo
  const slideIndex = slides.findIndex(item => slide.id === item.id)
  return (

    <ContextMenuWrapper
      coords={menuInfo.coords}
      closeMenu={closeMenu}
    >
      <ContextMenuItem
        text='Insert slide below'
        onClick={() => changeActiveModalTo(modals.SLIDE_FORM, { position: slideIndex })}
      />
      <ContextMenuItem
        text='Insert slide above'
        onClick={() => changeActiveModalTo(modals.SLIDE_FORM, { position: slideIndex + 1 })}
      />
      <ContextMenuItem
        text='Delete'
        onClick={() => changeActiveModalTo(modals.DELETE_CONFIRMATION, { slide })}
      />
      <ContextMenuItem
        text='Edit'
        onClick={() => changeActiveModalTo(modals.SLIDE_FORM, { slide, position: slideIndex })}
      />

    </ContextMenuWrapper>

  )
}

const mapStateToProps = (state) => ({
  menuInfo: state.activeContextMenu.data,
  slides: state.slides
})

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => dispatch(closeContextMenu()),
  addSlide: (slide, position) => dispatch(addSlide({ slide, position })),
  changeActiveModalTo: (modal, position) => dispatch(changeActiveModalTo(modal, position))
})


export default connect(mapStateToProps, mapDispatchToProps)(SlideIconMenu)
