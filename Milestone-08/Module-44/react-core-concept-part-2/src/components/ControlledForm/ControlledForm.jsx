import React, { useState } from 'react';

const ControlledForm = () => {

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleControlled = (e) => {
        e.preventDefault();
        if(password.length < 6) {
            setError("password must be 6 character or longer");
        } else {
            setError("");
        }
    }

    const handleControlledOnChange = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
        console.log(password.length);

        if(password.length < 6) {
            setError("password must be 6 character or longer");
        } else {
            setError("");
        }
    }

    return (
        <div>
            <form onSubmit={handleControlled}>
                <input type="text" name="name" placeholder='Your Name' />
                <br />
                <input type="password" onChange={handleControlledOnChange} defaultValue={password} name="email" placeholder='Password' />
                <br /> <br />
                <input  type="submit" value="Submit" />
            </form>
            <p style={{color: "red"}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledForm;