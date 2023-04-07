import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {

    const [mon, setMon]  = useContext(MoneyContext)
    return (
        <div>
            <h2>Sis</h2>
            <p><small>grandpa money : {mon}</small></p>
        </div>
    );
};

export default Sister;