import Dashboard from "./Dashboard/Dashboard";
import Navigation from "./Navigation/Navigation";
import { useState, useEffect } from "react";
function App() {
  const [topBarHeading, setTopBarHeading] = useState("Stores");
  const [topBarButtonText, setTopBarButtonText] = useState("Add Store");
  const [head, setHead] = useState([]);
  const [body, setBody] = useState([[]]);
  
  const navClick = (clickedTab)=>{
      setTopBarHeading(clickedTab);
      setTopBarButtonText("Add "+clickedTab);   
  }

  useEffect(() => {
    let url = "http://localhost:5000/"+topBarHeading.toLowerCase();
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);

      let keys = data.keys;
      keys = keys.slice(1, keys.length-1)
      setHead(data.keys)
      let values = []
      data = data.values;
      data.forEach(dataObject => {  
        let value = Object.values(dataObject);
        value = value.slice(1, value.length-1)
        values.push(value)
      });
      setBody(values);
    })
  }, [topBarHeading])
  

  return (
    <div style={styles.app} className="App">
      <Navigation navClick={navClick}/>
      <Dashboard head={head} body={body} topBarHeading={topBarHeading} topBarButtonText={topBarButtonText}/>
    </div>
  );
}
const styles={
  app:{
    height:'100vh',
    margin:0,
    padding:0,
    display:'flex',
    flexDirection:'row',
  }
}
export default App;
