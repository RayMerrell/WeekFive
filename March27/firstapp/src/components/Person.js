import Pet from "./Pet";

const Person = (props)=>{
    return (
        <div>
            <h1>Hello from {props.name}, age of {props.age} </h1>
            <Pet petName={props.petName} />
        </div>
    );
}


// const person2 = ()=>{
//     return (
//         <div>
//             <h1>Hello World, this is a component render</h1>
//         </div>
//     );
// }
export default Person;
//export {Person, person2};