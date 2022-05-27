import React from 'react'

function FunctionClick() {

    function clickHandler(message){
        console.log(message)
    }

  return (
    <div>
        <br />
        <button className="btn btn-primary"
                onClick={() => clickHandler("Button Clicked")}
        >Function - Click</button>
    </div>
  )
}

export default FunctionClick