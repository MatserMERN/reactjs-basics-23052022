import React from 'react'

function InlineStyling() {
    const heading = {
        fontSize: '72px',
        color:'blue'
    }
  return (
    <div>
        <h1 style={heading}>Applying Inline Styling</h1>
        <h1 style={{fontSize: '36px', color: 'orange'}}>Applying Inline Styling directly</h1>
    </div>
  )
}

export default InlineStyling