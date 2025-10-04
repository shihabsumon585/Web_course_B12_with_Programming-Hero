import React, { useState } from 'react';

const ControlledForm = () => {

    const [password, setPassword] = useState("");

    const handleControlled = (e) => {
        e.preventDefault();
    }

    const handleControlledOnChange = e => {
        console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleControlled}>
                <input type="text" name="name" placeholder='Your Name' />
                <br />
                <input type="email" onChange={handleControlledOnChange} defaultValue={password} name="email" placeholder='Your Email' />
                <br /> <br />
                <input  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledForm;