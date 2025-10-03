
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user);
    const {name, website} = user;
    return (
        <div>
            <h2>here user details</h2>
            <div>
                <h3>Name: {name}</h3>
                <p>Website: {website}</p>
            </div>
        </div>
    );
};

export default UserDetails;