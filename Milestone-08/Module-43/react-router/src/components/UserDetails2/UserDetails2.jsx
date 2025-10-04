import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise);
    console.log(user);
    return (
        <div>
            <p><small>User Name: {user.username}</small></p>
            <p>{user.name}</p>
        </div>
    );
};

export default UserDetails2;