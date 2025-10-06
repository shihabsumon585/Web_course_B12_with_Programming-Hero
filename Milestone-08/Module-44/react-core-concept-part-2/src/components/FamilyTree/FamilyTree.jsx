import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import "./FamilyTree.css"

export const AssestContext = createContext("");
export const MoneyContext = createContext(0);


const FamilyTree = () => {
    const [money, setMoney] = useState(0);

    const asset = "Diamond";
    const newAsset = "Gold";

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family Money: {money}</h4>
            <MoneyContext value={[money, setMoney]}>
                <AssestContext.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssestContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;

/**
 * 1. create a context using createContext with a defalult value make sure you export the context to be used in other files
 */