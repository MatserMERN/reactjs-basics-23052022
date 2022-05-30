import React, { Component } from 'react'

class ReqResAPIOne extends Component {
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
          <table className="table">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Email</th>
                      <th>Avatar</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.state.users.map(user => (
                          <tr key={user.id}>
                              <td>{user.id}</td>
                              <td>{user.first_name}</td>
                              <td>{user.last_name}</td>
                              <td>{user.email}</td>
                              <td>
                                  <img src={user.avatar}/>
                              </td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>
      </React.Fragment>
    )
  }
}

export default ReqResAPIOne