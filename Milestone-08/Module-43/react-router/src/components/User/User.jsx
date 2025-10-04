import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const [showinfo, setShowinfo] = useState(false);
    const { id, name, email, phone } = user;
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    const userStyle = {
        border: "2px solid yellow",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px"
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>E-mail: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => setShowinfo(!showinfo)}>{showinfo ? "Hide" : "Show" } Info</button>
            {
                showinfo && <Suspense fallback={<span>Loading....</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;