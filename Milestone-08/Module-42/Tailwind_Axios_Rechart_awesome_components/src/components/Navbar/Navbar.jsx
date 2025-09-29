import React, { useState } from 'react';
import Link from './Link';
import LinkRes from './LinkRes';
import { Menu, X } from 'lucide-react';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const navigationData = [
        { name: "Home", path: "/home", id: 1 },
        { name: "About Us", path: "/about-us", id: 2 },
        { name: "Services", path: "/services", id: 3 },
        { name: "Contact", path: "/contact", id: 4 },
        { name: "Blog", path: "/blog", id: 5 },
    ]


    return (
        <div className='flex justify-between items-center mx-4 py-3 shadow-sm '>
            <div className='flex gap-4'>
                {
                    open ? <X onClick={() => setOpen(!open)} className='sm:hidden'></X> : <Menu onClick={() => setOpen(!open)} className='sm:hidden'></Menu>
                }
                <ul className={`sm:hidden absolute duration-1000 ${open ? "ml-2  top-12 bg-white text-black rounded-sm" : "ml-2 -top-60 bg-white text-black rounded-sm"}`}>
                    {
                        navigationData.map(route => (<LinkRes key={route.id} route={route} ></LinkRes>))
                    }
                </ul>
                <h1>My Navbar</h1>
            </div>
            <ul className='sm:flex gap-10 hidden'>
                {
                    navigationData.map(route => (<Link key={route.id} route={route} ></Link>))
                }
            </ul>
            <button className='btn'>Sign In</button>
        </div>
    );
};

export default Navbar;