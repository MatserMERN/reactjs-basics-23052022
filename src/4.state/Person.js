import React, { Component } from 'react'

export class Person extends Component {
    constructor(props){
        super()
       
        this.state = {
            id: props.id,
            title: props.title,
            name: 'Scott Desatnick',
            city: 'Boston',
            isActive : true
        }
        // super -never call super at later stages

        //console.log(this.props)
    }
  render() {
      let {id, name, city, isActive, title} = this.state
     // let { title, id} = this.props
    return (
      <div>
          <h2>{id}</h2>
          <h2>{name}</h2>
          <h2>{title}</h2>
          <h2>{city}</h2>
          <h2>{isActive ? "true": "false"}</h2>
      </div>
    )
  }
}

export default Person