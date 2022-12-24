import React, { useState } from 'react'
import Table from './Table/Table'
import TopBar from './TopBar/TopBar';
function Dashboard(props) {
  return (
    <div style={styles.dashboard}>
        <TopBar heading={props.topBarHeading} buttonText={props.topBarButtonText}/>
        <Table head={props.head} body={props.body}/>
    </div>
  )
}
const styles = {
    dashboard:{
        padding: '20px',
        borderLeft:'1px solid grey',
        flex:4,
        display:'flex',
        flexDirection:'column'
    }
}
export default Dashboard