import React from 'react';
import HerSelf from '../HerSelf/HerSelf';

const MySelf = ({ring}) => {
 
    return (
        <div>
            <h2>Me</h2>
            <HerSelf ring={ring}></HerSelf>
        </div>
    );
};

export default MySelf;