import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const promise = use(usersPromise);
    console.log(promise);
    return (
        <div>
            <h2>this is users 2</h2>
        </div>
    );
};

export default Users2;