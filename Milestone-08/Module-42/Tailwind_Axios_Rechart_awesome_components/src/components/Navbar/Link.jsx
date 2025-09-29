import React from 'react';

const Link = ({route}) => {
    return (
        <li className='hover:underline'><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;