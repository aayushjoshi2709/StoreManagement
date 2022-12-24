import React from 'react'
import Styles from '../../../Styles/Styles'
function Head(props) {
  return (
    <thead>

      <tr style={Styles.rows}>
        {
          props.head.length > 0?<th style={{...Styles.cells, ...Styles.frow}}>Sno</th>:""
        }
        
        {props.head.map((headings,id)=>{return <th style={Styles.cells} key={id}>{headings}</th>})}
      </tr>
    </thead>
  )
}

export default Head