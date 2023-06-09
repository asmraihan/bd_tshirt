import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunt from '../Aunt/Aunt';
import './Grandpa.css'


export const RingContext = createContext('gold')
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const ring = 'diamond'
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunt ring={ring}></Aunt>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>

        </div>
    );
};

export default Grandpa;


/* 
1. create a context and export it
2. create a provider and pass a value(can be more)
3. useContext to receive the value

*/