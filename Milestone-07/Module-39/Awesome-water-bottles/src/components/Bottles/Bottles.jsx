import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"
import { addToStoredCart, getStoredCart } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({bottleData}) => {
    const bottles = use(bottleData);


    //useEffect
    useEffect(() => {
        const storedCartIds = getStoredCart();
        console.log(storedCartIds, bottles);
        
        const storedCart = [];

        for(const id of storedCartIds) {
            console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle) {
                storedCart.push(cartBottle);
            }
        }
        console.log("stored cart", storedCart);
        setCart(storedCart);
    }, [bottles])
    

    const [cart, setCart] = useState([])
    const handleAddToCard = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart);

        // save the bottle id in the storage
        addToStoredCart(bottle.id);
    }
    
    return (
        <div>
            <h3>Bottle: {bottles.length}</h3>
            <p>My Cart: {cart.length}</p>
            <Cart cart={cart}></Cart>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id}
                        handleAddToCard={handleAddToCard}
                        bottle={bottle}
                        ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;