import React from "react";
import './Screen.css';
function Screen({datosValue}){
    return(
            <div className='screen'>
                <label className='history'>History</label>
                <label className='data'>{datosValue}</label>
            </div>
    );
}
export {Screen};