import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const { id, name, email, phone } = user;

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
        </div>
    );
};

export default User;