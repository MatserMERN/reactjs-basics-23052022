import React, { Component } from 'react'

class GreetingOne extends Component {
  render() {
      console.log(this.props)
      let {name, email, city, children} = this.props
    return (
      <div>
          <h2>{name}</h2>
          <h2>{email}</h2>
          <h2>{city}</h2>
          {children}
      </div>
    )
  }
}

export default GreetingOne