import React, { useState } from 'react'
import Tabs from './Tabs/Tabs'
function Navigation(props) {

  return (
    <div style={styles.navigation}>
        <img style={styles.logo} src='https://th.bing.com/th/id/OIP.IOGGKcmJMYKPkMuimQDLnwHaHv?pid=ImgDet&rs=1'/>
        <Tabs navClick={props.navClick} title="Stores"/>
        <Tabs navClick={props.navClick} title="Categories"/>
        <Tabs navClick={props.navClick} title="Products"/>
        <Tabs navClick={props.navClick} title="Users"/>
        <Tabs navClick={props.navClick} title="Bills"/>
        <Tabs navClick={props.navClick} title="Debts"/>
    </div>
  )
}

const styles = {
    logo:{
        borderRadius:'50%',
        margin: '20px',
        marginBottom:'25px',
        width:'80%'
    },
    navigation:{
        flex:1,
        height: '100vh',
        backgroundColor: '#6200EE',
        height: '100%',
        display:'flex',
        flexDirection:'column',
        alignItem:' center',
        border: '1px solid grey'
    }
}

export default Navigation