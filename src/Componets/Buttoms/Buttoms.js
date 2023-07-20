
import React from 'react';
import './Buttoms.css'
function Buttoms({setdatosValue , datosValue, setState, state}){
    const operation = {
        solved: state,
        data1: "",
        data2: "",
        complete: datosValue,
    };
    function validateOperator() {
        if(operation.complete.includes('+')){
            return true;
        } else if(operation.complete.includes('-')){
            return true;
        } else if(operation.complete.includes('/')){
            return true;
        } else if(operation.complete.includes('*')){
            return true;
        } else {
            return false;
        }
    };
    function totalOperation(operation) {
        if (operation.complete.includes('+')){
            let array = operation.complete.split('=');
            let array2 = array[0].split('+');
            operation.data1 = array2[0];
            operation.data2 = array2[1];
            let result = Number(operation.data1) + Number(operation.data2);
            setdatosValue(result.toString());
            setState(true);   
        } else  if (operation.complete.includes('-')){
            let array = operation.complete.split('=');
            let array2 = array[0].split('-');
            operation.data1 = array2[0];
            operation.data2 = array2[1];
            let result = Number(operation.data1) - Number(operation.data2);
            setdatosValue(result.toString());
            setState(true);
        } else  if (operation.complete.includes('/')){
            let array = operation.complete.split('=');
            let array2 = array[0].split('/');
            operation.data1 = array2[0];
            operation.data2 = array2[1];
            let result = Number(operation.data1) / Number(operation.data2);
            setdatosValue(result);
            setState(true);
        } else  if (operation.complete.includes('*')){
            let array = operation.complete.split('=');
            let array2 = array[0].split('*');
            operation.data1 = array2[0];
            operation.data2 = array2[1];
            let result = Number(operation.data1) * Number(operation.data2);
            setdatosValue(result);
            setState(true);
        }
    }
    function saveDato(data){
        operation.complete = datosValue + data;
        if(operation.solved){
            if(validateOperator()){
                setState(false);
                setdatosValue(operation.complete)
                console.log('includes = ' + operation.complete);
            } else {    
                setdatosValue(data);
                setState(false);
                console.log('no includes = ' + operation.complete);
            }
        }else{
            setdatosValue(operation.complete)
            if(operation.complete.includes("=")){
            totalOperation(operation);
            }
        }
    }
    return(
        <div className='buttoms'>
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
                <button className='buttom' onClick={() => saveDato(",")}>,</button>
                <button className='buttom' onClick={() => saveDato(".")}>.</button>
                <button className='operation' onClick={() => saveDato("+")}>+</button>
                <button className='operation' onClick={() => saveDato("-")}>-</button>
                <button className='operation' onClick={() => saveDato("*")}>x</button>
                <button className='operation' onClick={() => saveDato("/")}>/</button>
                <button className='operation' onClick={() => saveDato("=")}>=</button>
         </div>
    );
}
export {Buttoms};