import {useState, React} from 'react'

function Tabs(props) {
    const [isHover, setIsHover] = useState(false);
    const styles = {
        tab:{
            padding: '16px',
            color:'white', 
            fontFamily:'Arial',
            fontSize:'18px',
            backgroundColor:'#b388ff',
            borderBottom: '1px solid grey'
        },
        hover:{
            padding: '16px',
            color:'white', 
            fontFamily:'Arial',
            fontSize:'18px',
            backgroundColor:'#6200EE',
            borderBottom: '1px solid grey'
        },
    }
  return (
    <div 
      onMouseEnter={()=>{setIsHover(true)}}
      onMouseLeave={()=>{setIsHover(false)}}
      onClick={()=>{props.navClick(props.title)}}
      style={isHover?styles.tab:styles.hover}>
        {props.title}
    </div>
  )
}
export default Tabs