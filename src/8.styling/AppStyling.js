import React from 'react'
import './appStyles.css'
import styles from './appStyles.module.css'

function AppStyling() {
  return (
    <div>
        <h1 className="success">Notification Dellivered Sucessfully</h1>
        <h1 className="error">Notification Dellivery has failed</h1>

        <h1 className={styles.success}>Notification Dellivered Sucessfully - Modules</h1>
        <h1 className={styles.error}>Notification Dellivery has failed - Modules</h1>
    </div>
  )
}

export default AppStyling

var name ="Green"