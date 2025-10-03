import React from 'react';
import Header from '../Header.jsx/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import "./Root.css"

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div>
            <Header></Header>

            <div className='root-main'>
                <Sidebar></Sidebar>
                {isNavigating && <span>Loading...</span>}
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;

/**
 * 1. use: usersPromise > Suspennse > promise > use(usersPromise)
 * 2. [ less used so far ] > useState + useEffect ( () => {}, [])
 * 3. set loader in the rout defination: load data before router component is rendered
 */