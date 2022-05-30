import React, { Component } from 'react'

class ReqResAPI extends Component {
    constructor(){
        super()

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2")
        .then(response => response.json())
        .then(userlist => this.setState({users : userlist.data}))
    }
  render() {
    return (
      <React.Fragment>
          <h1>Uers with Images</h1>
          {
              this.state.users.map(user => (
                  <div key={user.id}>
                      <img src={user.avatar} />
                      <h3>{user.first_name} {user.last_name}</h3>
                      <br />
                  </div>
              ))
          }
      </React.Fragment>
    )
  }
}

export default ReqResAPI