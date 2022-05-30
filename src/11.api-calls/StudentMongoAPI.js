import React, { Component } from 'react'

class StudentMongoAPI extends Component {
    constructor() {
        super()

        this.state = {
            students: [],
            _id: '',
            name: '',
            email: '',
            city: ''
        }
    }

    componentDidMount() {
        this.getStudents()
    }

    getStudents() {
        fetch("http://localhost:3001/api/students")
            .then(response => response.json())
            .then(data => this.setState({ students: data }))
    }

    clearFields() {
        this.setState({
            name: '',
            email: '',
            city: ''
        })
    }

    createStudent() {
        const postStudent = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city,
            })
        }

        fetch("http://localhost:3001/api/students", postStudent)
        .then(response => response.json())
        .then(data => {
            this.getStudents()
            this.clearFields()
        })
    }

    editStudent(student){
        this.setState({
            _id: student._id,
            name: student.name,
            email: student.email,
            city: student.city,
        })
    }

    updateStudent(){
        const putStudent = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city,
            })
        }

        fetch(`http://localhost:3001/api/students/${this.state._id}`, putStudent)
        .then(response => response.json())
        .then(data => {
            this.getStudents()
            this.clearFields()
        })
    }

    deleteStudent(studentId){
        const deleteStudent = {
            method: 'DELETE'
        }

        fetch(`http://localhost:3001/api/students/${studentId}`, deleteStudent)
        .then(data => {this.getStudents()})
    }
    render() {
        return (
            <React.Fragment>
                <h1>Student CRUD </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <th>
                                <input type="text"
                                    value={this.state.name}
                                    onChange={(event) => this.setState({ name: event.target.value })}
                                />
                            </th>
                            <th>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={(event) => this.setState({ email: event.target.value })}
                                />
                            </th>
                            <th>
                                <input type="text"
                                    value={this.state.city}
                                    onChange={(event) => this.setState({ city: event.target.value })}
                                />
                            </th>
                            <th>
                                <button className="btn btn-primary"
                                    onClick={() => this.createStudent()}
                                >Add</button> &nbsp;&nbsp;
                                <button className="btn btn-warning"
                                    onClick={() => this.updateStudent()}
                                >Update</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(student => (
                                <tr key={student._id}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.city}</td>
                                    <td>
                                        <button className="btn btn-warning"
                                                onClick={() => this.editStudent(student)}
                                        >Edit</button>&nbsp;&nbsp;
                                        <button className="btn btn-danger"
                                                onClick={() => this.deleteStudent(student._id)}
                                        >Delete</button>
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

export default StudentMongoAPI