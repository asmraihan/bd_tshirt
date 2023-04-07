import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const HerSelf = ({ring}) => {

    const angti = useContext(RingContext)

    return (
        <div>
            <h2>Her</h2>
            <p><small>Ring : {angti}</small></p>
        </div>
    );
};

export default HerSelf;