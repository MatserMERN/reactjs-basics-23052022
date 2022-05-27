import React, { Component } from 'react'
import Test from './Test'

class Counter extends Component {
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    addCount(){
        //this.state.count = this.state.count + 1
        this.setState({
            count: this.state.count + 1
        }, () => console.log(this.state.count))
       
    }

  render() {
     console.log(`Render method is invoked ${this.state.count}`)
    return (
      <div>
          <h1>Count : {this.state.count}</h1>
          <button className='btn btn-primary'
                  onClick={()=>this.addCount()}
          >Add Count</button>
          <Test count={this.state.count} />
      </div>
    )
  }
}

export default Counter