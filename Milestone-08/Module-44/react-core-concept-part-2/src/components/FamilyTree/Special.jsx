import React, { useContext } from 'react';
import { AssestContext } from './FamilyTree';

const Special = ({name, asset}) => {
    const newAsset = useContext(AssestContext);

    console.log("new asset: ", newAsset);

    return (
        <div>
            <h3>Special: {name}</h3>
            <p>Asset: {asset}</p>
            <p>new asset: {newAsset}</p>
        </div>
    );
};

export default Special;