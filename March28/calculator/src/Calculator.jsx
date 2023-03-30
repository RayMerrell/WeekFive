import { evaluate } from "mathjs";
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
let booEqualsPressed = false;
let booPartOneDone = false;
let operator = "";
let partTwo = "";

const Calculator = () => {
    const [readOut, setReadout] = useState("0");
    const handleClick = (val) => {
        
        if (!isNaN(val)){
            console.log("isnumber");
            booEqualsPressed=false;
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
        }else{
            let inp = val.toString();
            switch (inp){
                case "=":
                    booEqualsPressed=true;
                    if (partTwo !== ""){
                        console.log("answer", partOne, operator, partTwo);
                        answer = evaluate(partOne + operator + partTwo);
                        partOne = answer.toString();
                        setReadout(partOne);
                        booPartOneDone=true;
                    }                
                    break;
                case "Cancel":
                    booEqualsPressed=false;
                    booPartOneDone=false;
                    console.log("cancel", partOne);
                    partOne="";
                    partTwo="";
                    answer="";
                    operator ="";
                    setReadout("0");
                    break;
                default: ///operator
                    console.log("Operator", partOne)
                    if (partOne !=="" && !booEqualsPressed && partTwo !==""){
                        answer = evaluate(partOne + operator + partTwo);//take it as "="
                        partOne = answer.toString();
                        partTwo="";                                
                    }
                    if (booEqualsPressed){
                        partTwo=""; 
                    }                    
                    operator = inp;                    
                    booPartOneDone=true;  
                    booEqualsPressed=false;
                    setReadout(partOne + operator + partTwo);
            }
        }
    }

    return (
        <div className="Calculator">
            <div className="StandardCalculatorReadout">
                <p>{readOut}</p>
            </div>
            {arrSimpleButtons.map((btn, index)=>{
                return (
                <button key={index} className={btn.class} onClick={()=>handleClick(btn.value)} value={btn.value} >
                    {btn.name}
                </button>)
            })}    
        </div>
    );
}

export default Calculator;