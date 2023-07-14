
import React from 'react';
import './Buttoms.css'
function Buttoms({setdatosValue , datosValue}){
    const operation = {
        solved: false,
        data1: "",
        data2: "",
        complete: "",
    };
    console.log(operation.solved);
    console.log(operation.complete);

    function totalOperation(operation) {
        if (operation.complete.includes('+')){
            let array = operation.complete.split('=');
            let array2 = array[0].split('+');
            operation.data1 = array2[0];
            operation.data2 = array2[1];
            let result = Number(operation.data1) + Number(operation.data2);
            setdatosValue(result);
            operation.complete = "";
            operation.solved = true;   
        } else  if (operation.includes('-')){
            let array = operation.split('=');
            let array2 = array[0].split('-');
            let data1 = array2[0];
            let data2 = array2[1];
            let result = Number(data1) - Number(data2);
            setdatosValue(result);
            operation.complete = "";
        } else  if (operation.includes('/')){
            let array = operation.split('=');
            let array2 = array[0].split('/');
            let data1 = array2[0];
            let data2 = array2[1];
            let result = Number(data1) / Number(data2);
            setdatosValue(result);  
            operation.complete = "";
        } else  if (operation.includes('*')){
            let array = operation.split('=');
            let array2 = array[0].split('*');
            let data1 = array2[0];
            let data2 = array2[1];
            let result = Number(data1) * Number(data2);
            setdatosValue(result);
            operation.complete = "";
        }
    }
    function saveDato(data){
        if(operation.solved){
            console.log('true')
            setdatosValue("");
            operation.solved = false;
            console.log(operation.solved)
        }else{
            console.log('False')
            operation.complete = datosValue + data;
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