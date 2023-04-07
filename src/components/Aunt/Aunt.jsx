import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunt = ({ring}) => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>nibir</Cousin>
            </section>
        </div>
    );
};

export default Aunt;