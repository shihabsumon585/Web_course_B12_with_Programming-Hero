import React from 'react';
import useInputField from '../Hooks/UseInputField';


const Practice = () => {

    const [name, nameOnChange] = useInputField("");
    const [email, emailOnChange] = useInputField("");

    const handleSubmit = e => {
        e.precentDefault();
        console.log("submit", name, email);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange} name="name" placeholder='Your Name' />
                <br />
                <input type="password" name="email" onChange={emailOnChange} placeholder='Password' />
                <br /> <br />
                <input  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Practice;