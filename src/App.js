import React, {Component} from 'react'
import Input from './03/Input'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      daniel: ''
    }
  }

  render() {
    return (
      <div className="body">
        <Input name={this.daniel}/>
      </div>
    )
  }
}

export default App
