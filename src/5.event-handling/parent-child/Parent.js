import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Parent'
        }

       this.callParent = this.callParent.bind(this) 
    }

    callParent(child){
        alert(`Calling ${this.state.name} from ${child}`)
    }
  render() {
    return (
      <div>
          <Child callParent={this.callParent}/>
          {/* <button className='btn btn-primary' onClick={() => this.callParent('child')}>Call </button> */}
      </div>
    )
  }
}

export default Parent