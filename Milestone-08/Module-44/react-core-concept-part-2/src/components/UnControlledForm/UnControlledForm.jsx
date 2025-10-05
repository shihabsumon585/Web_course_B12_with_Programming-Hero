import React, { useRef } from 'react';

const UnControlledForm = () => {

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleUnControlledSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(`
            ${email}
            ${password}
        `);
    }

    return (
        <div>
            <form onSubmit={handleUnControlledSubmit}>
                <input type="email" ref={emailRef} name="" />
                <br />
                <input type="password" ref={passwordRef} name="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlledForm;