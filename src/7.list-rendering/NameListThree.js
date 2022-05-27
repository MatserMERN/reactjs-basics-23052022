import React from 'react'

function NameListThree() {
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

    // const userList = users.map(user => {
    //   return  <div key={user.id}>
    //             <h2>Id : {user.id}</h2>
    //             <h2>Id : {user.name}</h2>
    //             <h2>Id : {user.age}</h2>
    //             <h2>Id : {user.skill}</h2>
    //             <br />
    //           </div>
    // })

    const userList = users.map(user => (
          <div key={user.id}>
                  <h2>Id : {user.id}</h2>
                  <h2>Id : {user.name}</h2>
                  <h2>Id : {user.age}</h2>
                  <h2>Id : {user.skill}</h2>
                  <br />
           </div>
    ))
    console.log(userList)
    return userList
}

export default NameListThree