import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const clickHandler = ()=>{
  console.log("Hello");
}


function App() {
  const [persons, setPersons] = useState(
    [
      {name:"Jordan", age:"31"}, 
      {name:"Tom", age:"23"}
    ]
  );

  return (
    <div className="App">
      <Person name={persons[0].name} age={persons[0].age} clickThis={clickHandler} />
    </div>
  );
}

const Person = (props)=>{
  return(
    <h1 onClick={props.clickThis}>{props.name} is {props.age} years old</h1>
  )
}
export default App;
