import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length ===0){
        message = <p>Please add some products</p>
    }else{
        message = <div>
            <h3>Thanks for wasting money</h3>
        </div>
    }
    return (
        <div className='tshirt'>
            <h2 className={cart.length === 1 ? 'green' : 'red'}>Order Summary :{cart.length}</h2>
            <p className={`bold bordered ${cart.length === 4 ? 'orange' : 'blue'}`}>Checking common css</p>
            {cart.length > 2 ? <span className='blue'>Aro kino</span> : <span>Fokira</span>}
            {message}
            {
                cart.map((tshirt) => <p
                    key={tshirt._id}>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button> </p>)
            }
            {
                cart.length === 2 && <p>double bonus</p> 
            }
            {
                cart.length === 3 || <h3>not three broo</h3> 
            }
        </div>
    );
};

export default Cart;

/* 
conditional rendering
1. if else ==> use if else to set a variable that will contain an element, components
2. ternary ==> condition ? 'fr true ' : "false"
3.logical and && ==> if the condition is true then the next thing will be displayed
4.Logical or || ==> if the conditon is false then the next thing will be displayed
*/


/* 
conditional css class
1.use ternary
2. ternary inside template string

*/