import React from 'react'
import Rows from './Rows/Rows'
function Body(props) {
  return (
    <tbody>
        {
          props.body.map((row, key)=>{
            return <Rows row={row} key={key} iter={key}/>
          })
        }
    </tbody>
  )
}

export default Body