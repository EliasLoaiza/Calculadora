
import React from 'react';
import './Buttoms.css';
function Buttoms({setdatosValue , datosValue, setState, state, setHistory}){
    const operation = {
        solved: state,
        data1: "",
        data2: "",
        complete: datosValue,
        operator: ""
    };
    function validateOperator() {
        if(operation.complete.includes('+')){
            operation.operator = "+";
            return true;
        } else if(operation.complete.includes('-')){
            operation.operator = "-";
            return true;
        } else if(operation.complete.includes('/')){
            operation.operator = "/";
            return true;
        } else if(operation.complete.includes('*')){
            operation.operator = "*";
            return true;
        } else {
            return false;
        }
    };
    function deleteData(){
        setdatosValue("");
        setHistory("");
    }
    function deleteNumber(){
        operation.complete = operation.complete.slice(0, -1);
        setdatosValue(operation.complete);
    }
    function addOperator(){
        var replace1 = operation.data1;
        var replace2 = operation.data2;
        if(operation.data1.includes("+")){
            operation.data1 = "-" + operation.data1;
            operation.data2 = "-" + operation.data2;
            operation.complete = operation.complete.replace(replace1, operation.data1);
            operation.complete = operation.complete.replace(replace2, operation.data2);
            setdatosValue(operation.complete);
        }
        else if(operation.data1.includes("-")){
            operation.data1 = "+" + operation.data1;
            operation.data2 = "+" + operation.data2;
            operation.complete = operation.complete.replace(replace1, operation.data1);
            operation.complete = operation.complete.replace(replace2, operation.data2);
            setdatosValue(operation.complete);
        }
        else{
            operation.data1 = "-" + operation.data1;
            operation.data2 = "-" + operation.data2;
            operation.complete = operation.complete.replace(replace1, operation.data1);
            operation.complete = operation.complete.replace(replace2, operation.data2);
            setdatosValue(operation.complete);
            console.log(replace1 + " " + replace2 + " " + operation.data1 + " " + operation.data2);
        }
    }
    function splitData(){
        let array = operation.complete.split('=');
        let array2 = array[0].split(operation.operator);
        operation.data1 = array2[0];
        operation.data2 = array2[1];
    }
    function totalOperation() {
        splitData()            
        if (operation.operator === "+"){       
            let result = Number(operation.data1) + Number(operation.data2);
            setHistory(operation.complete);
            setdatosValue(result.toString());
            setState(true);   
        } else  if (operation.operator === "-"){;
            let result = Number(operation.data1) - Number(operation.data2);
            setHistory(operation.complete);
            setdatosValue(result.toString());
            setState(true);
        } else  if (operation.operator === "/"){
            let result = Number(operation.data1) / Number(operation.data2);
            setHistory(operation.complete);
            setdatosValue(result.toString());
            setState(true);
        } else  if (operation.operator === "*"){;
            let result = Number(operation.data1) * Number(operation.data2);
            setHistory(operation.complete);
            setdatosValue(result.toString());
            setState(true);
        }
    }
    function saveDato(data){
        operation.complete = operation.complete + data;
        if(operation.solved){
            if(validateOperator()){
                setState(false);
                setdatosValue(operation.complete)
            } else {    
                setdatosValue(data);
                setState(false);
                setHistory(operation.complete);
            }
        }else{
            validateOperator();
            setdatosValue(operation.complete)
            if(operation.complete.includes("=")){
            totalOperation();
            }
        }
    }
    return(
        <div className='buttoms'>
                <button className='buttom' onClick={() => deleteData()}>CE</button>
                <button className='buttom' onClick={() => deleteData()}>C</button>
                <button className='buttom' onClick={() => saveDato("%")}>%</button>
                <button className='buttom' onClick={() => saveDato("1")}>1</button>
                <button className='buttom' onClick={() => saveDato("2")}>2</button>
                <button className='buttom' onClick={() => saveDato("3")}>3</button>
                <button className='buttom' onClick={() => saveDato("4")}>4</button>
                <button className='buttom' onClick={() => saveDato("5")}>5</button>
                <button className='buttom' onClick={() => saveDato("6")}>6</button>
                <button className='buttom' onClick={() => saveDato("7")}>7</button>
                <button className='buttom' onClick={() => saveDato("8")}>8</button>
                <button className='buttom' onClick={() => saveDato("9")}>9</button>
                <button className='buttom' onClick={() => saveDato("0")}>0</button>
                <button className='buttom' onClick={() => addOperator()}>+/-</button>
                <button className='buttom' onClick={() => saveDato(".")}>.</button>
                <button className='operation' onClick={() => saveDato("+")}>+</button>
                <button className='operation' onClick={() => saveDato("-")}>-</button>
                <button className='operation' onClick={() => saveDato("*")}>x</button>
                <button className='operation' onClick={() => saveDato("/")}>/</button>
                <button className='operation' onClick={() => deleteNumber()}></button>
                <button className='operation' onClick={() => saveDato("=")}>=</button>
         </div>
    );
}
export {Buttoms};