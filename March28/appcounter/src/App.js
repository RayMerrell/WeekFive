import './App.css';
import {useState} from 'react';





function App() {

  function clickHandler(d){
    if (d==="up"){
      console.log(ourNumber);
      setNum(ourNumber+1);//i do not understand how this works
    }else{
      setNum(ourNumber-1);
    };
  }

  const [ourNumber, setNum]= useState(10);

  return (
    <div className="App">
      <br></br>
      <Plusbutton click={clickHandler} />
      <h1>{ourNumber}</h1>      
      <Subbutton click={clickHandler} />
    </div>
  );
}

const Plusbutton =(props)=>{
  return(
    <div id="idPlusButton" onClick={()=>props.click("up")}>
      +
    </div>
  )
}

const Subbutton =(props)=>{
  return(
    <div id="idSubButton" onClick={()=>props.click("down")}>
      -
    </div>
  )
}
export default App;
