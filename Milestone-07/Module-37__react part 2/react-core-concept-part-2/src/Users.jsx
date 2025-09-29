import { use } from "react"

export default function Users ({fetchUsers}) {

    const users = use(fetchUsers);

    console.log(users);

    return (
        <div style={{
            border: "2px dotted yellow"
        }}>
            <h3>Users: {users.length}</h3>
        </div>
    )
}