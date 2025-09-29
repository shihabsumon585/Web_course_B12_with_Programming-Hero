import React from 'react';

const LinkRes = ({route}) => {
    return (
        <li className='hover:bg-black hover:text-white px-2 py-1 rounded-sm'><a href={route.path}>{route.name}</a></li>
    );
};

export default LinkRes;