import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h2>Bro</h2>
            <p>{angti}</p>
        </div>
    );
};

export default Brother;