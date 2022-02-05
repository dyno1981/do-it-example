import React, {PureComponent} from 'react'
import withStyles, {css} from '../04/withStyles'

class Modal extends PureComponent {
  render() {
    const {styles, children} = this.props
    return (
      <div {...css(styles.overlay)}>
        <div {...css(styles.wrapper)}>
          <div {...css(styles.container)}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(({color, unit}) => ({
  overlay: { // 반투명 배경
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)'
  },
  wrapper: {
    verticalAlign: 'middle'
  },
  container: {
    margin: '40px auto 0px',
    padding: unit * 4,
    backgroundColor: color.white,
    width: 400
  }
}))(Modal)