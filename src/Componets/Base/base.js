import './base.css'
import { Buttoms } from '../Buttoms/Buttoms';
import { Screen } from '../Screen/Screen';
import React from 'react';
function Base(){
    const [datosValue, setdatosValue] = React.useState(0);
    return (
            <div className='base'>
                <Screen datosValue={datosValue} />
                <Buttoms setdatosValue={setdatosValue}/>
            </div>
    );
}
export {Base};