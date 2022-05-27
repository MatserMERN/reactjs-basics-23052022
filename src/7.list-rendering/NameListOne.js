import React from 'react'

function NameListOne() {
    const names = ["Scott", "Adam", "Tuan", "Adam"]
  return (
    <div>
        {
            names.map((name, index) =><h2 key={index}>{name}</h2>)
        }
    </div>
  )
}

export default NameListOne

// {
//     names.map(function(name){
//         return <h2>{name}</h2>
//     })
// }