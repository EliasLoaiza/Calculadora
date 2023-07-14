import './base.css'
import { Buttoms } from '../Buttoms/Buttoms';
import { Screen } from '../Screen/Screen';
import React from 'react';
function Base(){
    const [datosValue, setdatosValue] = React.useState('');
    console.log(datosValue);
    return (
            <div className='base'>
                <Screen datosValue={datosValue} />
                <Buttoms setdatosValue={setdatosValue} datosValue={datosValue}/>
            </div>
    );
}
export {Base};