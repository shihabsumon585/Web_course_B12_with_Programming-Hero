import React from 'react';

const ActionForm = () => {

    const handleActionForm = (formData) => {
        console.log(formData.get("name"));
        console.log(formData.get("email"));
    }

    return (
        <div>
            <form action={handleActionForm}>
                <input type="text" name="name" placeholder='Your Name' />
                <br />
                <input type="email" name="email" placeholder='Your Email' />
                <br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ActionForm;