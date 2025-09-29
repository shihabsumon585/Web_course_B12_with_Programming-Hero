import { use } from "react"
import Friend from "./Friend";

export default function Friends ({frinedsPromise}) {

    const friends = use(frinedsPromise);

    // console.log(friends);

    return (
        <div className="card">
            <h3>Friends {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}
// <Friend friend={friend}></Friend>