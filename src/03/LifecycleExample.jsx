import React, {Component} from 'react'


class LifecycleExample extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps CALL')
    return {}
  }

  constructor(props) {
    super(props)
    // getDerivedStateFromProps() 함수를 사용하므로
    // 경고 메세지를 건너 뛰기 위해 state 초기값을 설정합니다.
    this.state = {}
    console.log('constructor CALL')
  }

  componentDidMount() {
    console.log('componentDidMount CALL')
    // this.setState({updated: true})
    this.forceUpdate()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate CALL')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount CALL')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate CALL')
    return {}
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate CALL')
    return false
    // return {}
  }

  render() {
    console.log('render CALL')
    return (
      <div>123</div>
    )
  }
}

export default LifecycleExample