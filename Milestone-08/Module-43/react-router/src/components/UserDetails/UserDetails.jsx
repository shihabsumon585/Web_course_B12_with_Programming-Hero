
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user);
    return (
        <div>
            here user details
        </div>
    );
};

export default UserDetails;