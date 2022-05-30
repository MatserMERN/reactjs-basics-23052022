import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(){
        super()

        this.state = {

        }

        console.log(`Constructor of LifeCycle A`)
    }

    static getDerivedStateFromProps(){
        console.log(`getDerivedStateFromProps of LifeCycle A`)
        return null
    }

    componentDidMount(){
        console.log(`componentDidMount of LifeCycle A`)
    }

  render() {
    console.log(`render of LifeCycle A`)
    return (
      <div>
          <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA