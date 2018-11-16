import React from 'react'

class ContextMenuWrapper extends React.Component {

  state = {
    visible: false
  }

  contextMenuNode = React.createRef()

  componentDidMount () {
    document.addEventListener('mousedown', this.handleMouseDown)
    this.updateMenuPosition()
    this.setState({ visible: true })
  }

  componentDidUpdate () {
    this.updateMenuPosition()
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleMouseDown)
  }

  handleMouseDown = (e) => {
    const { closeMenu } = this.props
    !this.contextMenuNode.current.contains(e.target) && e.button !== 2 && closeMenu()
  }


  updateMenuPosition = () => {
    const { coords: { x: clickX, y: clickY }} = this.props
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const menuWidth = this.contextMenuNode.current.offsetWidth
    const menuHeight = this.contextMenuNode.current.offsetHeight
    const isOnTheRight = (windowWidth - clickX) > menuWidth + 5
    const isBelow = (windowHeight - clickY) > menuHeight + 5
    isOnTheRight ?
      this.contextMenuNode.current.style.left = `${clickX + 3}px` :
      this.contextMenuNode.current.style.right = `${windowWidth - clickX - 3}px`
    isBelow ?
      this.contextMenuNode.current.style.top = `${clickY + 3}px` :
      this.contextMenuNode.current.style.top = `${clickY - menuHeight - 3}px`
  }

  render () {
    const { children, closeMenu } = this.props
    const { visible } = this.state
    return (
      <div
        className={`context-menu non-selectable ${visible ? 'visible' : ''}`}
        ref={this.contextMenuNode}
        onClick={closeMenu}
      >
        {children}
      </div>
    )
  }

}

export default ContextMenuWrapper
