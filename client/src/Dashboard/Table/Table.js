import React from 'react'
import Body from './Body/Body'
import Head from './Head/Head'
function Table(props) {
  return (
    <div style={styles.div}>
      <table style={styles.table}>
        <Head head={props.head}/>
        <Body body={props.body}/>
      </table>
    </div>
  )
}
const styles = {
  table:{
      border:"0.5px solid grey",
      width:'100%',
      borderCollapse: 'collapse',
  },
  div:{
    flex:1,
    borderTop: '1px solid black',
    borderBottom:'1px solid black',
    overflow:'auto'
  }
}
export default Table