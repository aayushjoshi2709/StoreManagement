import React from 'react'

function TopBar(props) {
  const styles = {
    topbar:{
        display:'flex',
        paddingBottom: '10px',
        paddingTop: '10px',
        borderBottom:'1px solid grey',
        borderTop:'1px solid grey',
        marginBottom: '10px',
        justifyContent:'space-between'
    },
    button:{
        height:'100%',
        padding:'10px',
        color:'white',
        border:'1px solid grey',
        borderRadius:'8px',
        backgroundColor:'#5cb85c',
        textTransform:'uppercase'
    },
    heading:{
        fontFamily:'Arial',
        margin:'0px',
        padding:'0px',
        textTransform:'uppercase'
    }
  }
  return (
    <div style={styles.topbar}>
        <h1 style={styles.heading}>{props.heading}</h1>
        <button style={styles.button}>{props.buttonText}</button>
    </div>
  )
  
}

export default TopBar