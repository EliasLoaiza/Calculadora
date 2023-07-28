import React from "react";
import './Screen.css';
function Screen({datosValue , historyValue}){
    return(
            <div className='screen'>
                <label className='history'>{historyValue}</label>
                <label className='data'>{datosValue}</label>
            </div>
    );
}
export {Screen};