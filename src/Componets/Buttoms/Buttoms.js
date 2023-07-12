
import React from 'react';
import './Buttoms.css'
function Buttoms({setdatosValue}){
    var operation = "";
    function totalOperation(data) {
        if (data.includes('+')){
            let array = data.split('=');
            let array2 = array[0].split('+');
            let data1 = array2[0];
            let data2 = array2[1];   
            let result = Number(data1) + Number(data2);  
            console.log(result);
        } else  if (data.includes('-')){
            let array = data.split('=');
            let array2 = array[0].split('-');
            let data1 = array2[0];
            let data2 = array2[1];   
            let result = Number(data1) - Number(data2);  
            console.log(result);
        } else  if (data.includes('/')){
            let array = data.split('=');
            let array2 = array[0].split('/');
            let data1 = array2[0];
            let data2 = array2[1];   
            let result = Number(data1) / Number(data2);  
            console.log(result);
        } else  if (data.includes('*')){
            let array = data.split('=');
            let array2 = array[0].split('8');
            let data1 = array2[0];
            let data2 = array2[1];   
            let result = Number(data1) * Number(data2);  
            console.log(result);
        }
    }
    function saveDato(data){
        operation = operation + data;
        console.log(operation);
        if(operation.includes("=")){
            totalOperation(operation)
        }
 
    }
    return(
        <div className='buttoms'>
                <button className='buttom' onClick={() => saveDato("1")}>1</button>
                <button className='buttom' onClick={() => saveDato("2")}>2</button>
                <button className='buttom' onClick={() => saveDato("3")}>3</button>
                <button className='butto m' onClick={() => saveDato("4")}>4</button>
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
                <button className='operation'onClick={() => saveDato("*")}>x</button>
                <button className='operation' onClick={() => saveDato("/")}>/</button>
                <button className='operation' onClick={() => saveDato("=")}>=</button>
         </div>
    );
}
export {Buttoms};