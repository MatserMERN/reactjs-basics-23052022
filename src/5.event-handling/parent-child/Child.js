import React from 'react'

const Child = (props) => {
    let {callParent} = props
  return (
    <div>
        <button className="btn btn-primary" onClick={() => callParent('Child')} >Call Parent</button>
    </div>
  )
}

export default Child