import React, { Component } from 'react'

 class ClassClick extends Component {

    clickHandler(){
        console.log('Button is Clicked')
    }
  render() {
    return (
      <div>
          <br />
          <button className="btn btn-primary"
                  onClick={this.clickHandler}
          >Class - Click</button>
      </div>
    )
  }
}

export default ClassClick