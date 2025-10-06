import React, { createContext } from 'react';
import Grandpa from './Grandpa';
import "./FamilyTree.css"

export const AssestContext = createContext("");


const FamilyTree = () => {

    const asset = "Diamond";
    const newAsset = "Gold";

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <AssestContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssestContext.Provider>
        </div>
    );
};

export default FamilyTree;