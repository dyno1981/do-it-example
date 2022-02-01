import React from 'react'

export default function withHoC(WrappedComponnt) {
  return class WithHoC extends React.Component {
    render() {
      return <WrappedComponnt {...this.props}/>
    }
  }
}