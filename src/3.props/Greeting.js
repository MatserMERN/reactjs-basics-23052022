import React from 'react'

const Greeting = (props) => {
  let {id, name, isAdmin, details, secret, address, skills, showMessage, display} = props
  let {city, country} = address
  return <div>
          <ul>
            <li><strong>Id:</strong>{id}</li>
            <li>Name: {name}</li>
            <li>isAdmin :{isAdmin ? "true" : "false"}</li>
            <li>Details : {details == null ? "No Deatils" : details}</li>
            <li>Secret : {secret == undefined? "No Secret": secret}</li>
            <li>City: {city}</li>
            <li>Country: {country}</li>
            <li>Skills: {skills[0]}, {skills[1]}</li>
            <li>Message: {showMessage()}</li>
            <li>Display: {display()}</li>
          </ul>
        </div>

}

export default Greeting