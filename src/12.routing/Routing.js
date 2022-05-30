import React from 'react'
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom'
import StudentMongoAPI from '../11.api-calls/StudentMongoAPI'
import UserAPI from '../11.api-calls/UserAPI'
import NameListFour from '../7.list-rendering/NameListFour'
import UserForm from '../9.form-data/UserForm'

const About = () => <div><h1>You will learn about ReactJS</h1></div>
const Error = () => <div><h1>Please contact Administrator</h1></div>

 function Routing() {
  return (
        <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">React</Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                                <Link to="/home" className="nav-item nav-link active">Home</Link>
                                <Link to="/users" className="nav-item nav-link">Users</Link>
                                <Link to="/students" className="nav-item nav-link">Students</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            <Routes>
                <Route path='/' element={<NameListFour />}></Route>
                <Route path='/home' element={<UserForm />}></Route>
                <Route path='/users' element={<UserAPI />}></Route>
                <Route path='/students' element={<StudentMongoAPI />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </Router>
  )
}

export default Routing