import React from 'react'
import './Styling.css'

function StyleSheet(props) {
  let className = props.primary? "primary": "secondary"
  return (
    <div>
        <h1 className="primary">Header Using Styling</h1>
        <h1 className={className}>Conditional Styling</h1>
        <h1 className={`${className} enlarge-text`}>Applying Multiple Classes</h1>
    </div>
  )
}

export default StyleSheet