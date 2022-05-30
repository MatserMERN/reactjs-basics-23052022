import React, { Component } from 'react'

class UserFormOne extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            comments: '',
            country: 0,
            gender: '',
            isAdmin:  false,
            subjects: []
        }

        this.state.username ="Scott"
    }
    getUserData(){
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isAdmin)
        console.log(this.state.subjects)
    }

    getSubjects(event){
       let checkBox = event.target
       let subject= checkBox.value
       
       if(checkBox.checked){
           this.state.subjects.push(subject)
       } else {
           this.state.subjects.splice(subject-1, 1)
       }
    }

  render() {
    return (
        <React.Fragment>
            <h1>User Form One</h1>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" 
                           className='form-control w-50'
                           value={this.state.username}
                           onChange= {(event) => this.setState({username: event.target.value})}
                    />
                </div>
                <br />
                <div>
                    <label>Comments</label>
                    <textarea className="form-control w-50"
                              value={this.state.comments}
                              onChange= {(event) => this.setState({comments: event.target.value})}
                    ></textarea>
                </div>
                <br />
                <div>
                    <label>Country</label>
                    <select className="form-select w-50"
                            value={this.state.country}
                            onChange= {(event) => this.setState({country: event.target.value})}
                    >
                        <option value={0}>select</option>
                        <option value={1}>Bharat</option>
                        <option value={2}>Japan</option>
                        <option value={3}>Australia</option>
                    </select>
                </div>
                <br />
                <div>
                    <label>Gender</label>&nbsp;&nbsp;
                    <input type="radio" 
                           className="form-check-input"
                           name="gender"
                           value={1}
                           onChange={(event) => this.setState({gender: event.target.value})}
                    />&nbsp;&nbsp;Female&nbsp;&nbsp;
                    <input type="radio" 
                           className="form-check-input"
                           name="gender"
                           value={0}
                           onChange={(event) => this.setState({gender: event.target.value})}
                    />&nbsp;&nbsp;Male&nbsp;&nbsp;
                </div>
                <br />
                    <div>
                        <label>IsAdmin</label>&nbsp;&nbsp;
                        <input type="checkbox" 
                               className="form-check-input" 
                               onChange={() => this.setState({isAdmin: !this.state.isAdmin})}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Subjects</label>&nbsp;&nbsp;
                        <input type="checkbox" 
                               className="form-check-input" 
                               name="subjects"
                               value={1}
                               onChange={(event) => this.getSubjects(event)}
                        />&nbsp;&nbsp;Maths&nbsp;&nbsp;
                        <input type="checkbox" 
                               className="form-check-input" 
                               name="subjects"
                               value={2}
                               onChange={(event) => this.getSubjects(event)}
                        />&nbsp;&nbsp;Physics&nbsp;&nbsp;
                        <input type="checkbox" 
                               className="form-check-input" 
                               name="subjects"
                               value={3}
                               onChange={(event) => this.getSubjects(event)}
                        />&nbsp;&nbsp;Chemistry&nbsp;&nbsp;
                    </div>
                <br />
                <div>
                    <button type="button" 
                            className="btn btn-primary"
                            onClick={() => this.getUserData()}
                    >Submit</button>
                </div>
            </form>
        </React.Fragment>

    )
  }
}

export default UserFormOne