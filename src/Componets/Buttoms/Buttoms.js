
import React from 'react';
import './Buttoms.css';
function Buttoms({setdatosValue , datosValue, setState, state, setHistory, historyValue}){
    var operation = {
        solved: state,
        data1: historyValue,
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
        } else if(operation.complete.includes('%')){
            operation.operator = "%";
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
    function validatelength(){
        if(operation.complete.length > 13){
            operation.complete = operation.complete.slice(0, 13);
        }
    }
    function addOperator(){
        operation.data2 = operation.complete;
        operation.complete = operation.data1 + operation.data2; 
        validateOperator();
        var replace1 = operation.data1;
        var replace2 = operation.data2;
        if(operation.data2.includes("-")){
            operation.data1 = operation.data1.replace("-", "");
            operation.data2 = operation.data2.replace("-", "");
            operation.complete = operation.complete.replace(replace1, operation.data1);
            operation.complete = operation.complete.replaceAll(replace2, operation.data2);
            setHistory(operation.data1);
            setdatosValue(operation.data2);
        } else{
            operation.data1 = "-" + operation.data1;
            operation.data2 = "-" + operation.data2;
            operation.complete = operation.complete.replace(replace1, operation.data1);
            operation.complete = operation.complete.replace(replace2, operation.data2);
            setHistory(operation.data1);
            setdatosValue(operation.data2);
        }
    }
    function percentaje(){
        let result = Number(operation.complete) / 100;
        setHistory(operation.complete);
        setdatosValue(result.toString());
        setState(true);
    }
    function splitData(){
        let array = operation.complete.split('=');
        let array2 = array[0].split(operation.operator);
        operation.data1 = array2[0];
        operation.data2 = array2[1];
    }
    function totalOperation() {
        validateOperator();
        splitData();
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
        validatelength();
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
            if(validateOperator()){
                if(operation.operator === data){
                    operation.data1 = operation.complete;
                    setHistory(operation.data1);
                    setdatosValue("");
                }else{
                    operation.operator = data;
                    operation.data1 = operation.complete;
                    setHistory(operation.data1);
                    setdatosValue("");
                }
            } else {    
                operation.data2 = operation.complete;
                setdatosValue(operation.complete);
                if(operation.complete.includes("=")){
                    operation.complete = operation.data1 + operation.complete;
                    setdatosValue(operation.complete);
                    totalOperation();
                }
            }
        }
    }
    return(
        <div className='buttoms'>
                <button className='buttom' onClick={() => deleteData()}>CE</button>
                <button className='buttom' onClick={() => deleteData()}>C</button>
                <button className='buttom' onClick={() => percentaje()}>%</button>
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