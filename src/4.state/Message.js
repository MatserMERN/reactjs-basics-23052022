import React, { Component } from 'react'

 class Message extends Component {
    constructor(){
        super()

        this.state = {
            message: 'Welcome Scott'
        }
    }

    subscribe(){
        this.setState({
            message : "Thank you for subscribing"
        })
    }

  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button className="btn btn-primary"
                  onClick={() => this.subscribe()}
          >Subscribe</button>
      </div>
    )
  }
}

export default Message