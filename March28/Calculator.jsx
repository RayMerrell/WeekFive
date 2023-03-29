import { evaluate, isNumeric } from "mathjs";
import { useState } from "react";

const arrSimpleButtons=[
    {
        name:7, value:7, class:"CalculatorButton"
    },
    {
        name:8, value:8, class:"CalculatorButton"
    },
    {
        name:9, value:9, class:"CalculatorButton"
    },
    {
        name:"C", value:"Cancel", class:"CalculatorButton CalculatorCancelButton"
    },
    {
        name:4, value:4, class:"CalculatorButton"
    },
    {
        name:5, value:5, class:"CalculatorButton"
    },
    {
        name:6, value:6, class:"CalculatorButton"
    },
    {
        name:"*", value:"*", class:"CalculatorButton"
    },
    {
        name:1, value:1, class:"CalculatorButton"
    },
    {
        name:2, value:2, class:"CalculatorButton"
    },
    {
        name:3, value:3, class:"CalculatorButton"
    },
    {
        name:"÷", value:"/", class:"CalculatorButton"
    },
    {
        name:"+", value:"+", class:"CalculatorButton"
    },
    {
        name:0, value:0, class:"CalculatorButton"
    },
    {
        name:"-", value:"-", class:"CalculatorButton"
    },
    {
        name:"=", value:"=", class:"CalculatorButton"
    }
];
let answer=0;
let partOne="";
let booPartOneDone = false;
let operator = "";
let partTwo = "";

const Calculator = () => {
    const [readOut, setReadout] = useState("0");
    const handleClick = (val) => {
        let inp = val.toString();
        switch (inp){
            case math.isNumeric(inp):
                console.log("isnumber");
                if (!booPartOneDone){
                    if (partOne === "0"){
                        partOne = val.toString();
                    }else{
                        partOne = partOne + val.toString();
                    }
                }else{
                    partTwo = partTwo + val.toString();
                }
                setReadout(partOne + operator + partTwo);
                break;
            case "=":
                console.log("answer", partOne);
                answer = evaluate(readOut);
                partOne = answer.toString();
                setReadout(partOne);                
                break;
            case "Cancel":
                console.log("cancel", partOne);
                partOne="";
                partTwo="";
                answer="";
                booPartOneDone=false;
                operator ="";
                setReadout("0");
                break;
            default: ///operator
            console.log("Operator", partOne)
                booPartOneDone = true;
                operator = val.toString();
                setReadout(partOne + operator);
        }

    }

    return (
        <div className="Calculator">
            <div className="StandardCalculatorReadout">
                <p>{readOut}</p>
            </div>
            <div className="StandardCalculatorButtons">
            {arrSimpleButtons.map((btn, index)=>{
                return (
                <button key={index} className={btn.class} onClick={()=>handleClick(btn.value)} value={btn.value} >
                    {btn.name}
                </button>)
            })}     
            </div>
        </div>
    );
}

export default Calculator;