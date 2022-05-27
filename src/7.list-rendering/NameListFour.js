import React from 'react'
import User from './User'

function NameListFour() {
    const users = [
        {
            id: 1,
            name: "Scott",
            age: 44,
            skill: 'Great Boss'
        },
        {
            id: 2,
            name: "Adam",
            age: 43,
            skill: 'Business Analyst'
        },
        {
            id: 3,
            name: "Tuan",
            age: 42,
            skill: 'Tech Boss'
        },
        {
            id: 4,
            name: "Uma",
            age: 40,
            skill: 'JavaScript'
        },
    ]

    return (
        <React.Fragment>
            <h1>User List</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <User key={user.id} user={user}/>)
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default NameListFour