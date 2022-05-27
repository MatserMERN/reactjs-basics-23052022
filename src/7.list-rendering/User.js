import React from 'react'

function User(props) {
    let {id, name, age, skill} = props.user
  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{skill}</td>
    </tr>
  )
}

export default User