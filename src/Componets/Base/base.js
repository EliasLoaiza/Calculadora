import './base.css'
import { Buttoms } from '../Buttoms/Buttoms';
import { Screen } from '../Screen/Screen';
import React from 'react';
function Base(){
    const [datosValue, setdatosValue] = React.useState('');
    const [historyValue, setHistory] = React.useState('');
    const [state, setState] = React.useState(false);
    return (
            <div className='base'>
                <Screen datosValue={datosValue} historyValue={historyValue} />
                <Buttoms setdatosValue={setdatosValue} datosValue={datosValue}
                         setState={setState} state={state}
                         setHistory={setHistory}/>
            </div>
    );
}
export {Base};