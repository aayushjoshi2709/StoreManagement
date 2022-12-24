import React from 'react'
import Styles from '../../../../Styles/Styles'
function Rows(props) {
  return (
    <tr style={Styles.rows}>
        {
          props.row.length > 0?<td style={{...Styles.cells, ...Styles.frow}}>{props.iter + 1}</td>:<td style={Styles.cells}>NO RECORDS FOUND</td>
        }
        { 
            props.row.map((cell, key)=>{return <td style={Styles.cells} key={key}>{cell}</td>})
        }
    </tr>    
  )
}

export default Rows