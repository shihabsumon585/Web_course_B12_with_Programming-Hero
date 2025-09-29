// export default function ToDo({reason, amount = 250}) {
//     return (
//         <div style={{border: "3px dotted red", borderRadius: "15px", fontWeight: "bolder", marginTop: "20px"}}>
//             <p>Gift for {reason}</p>
//             <p>Money {amount}</p>
//         </div>
//     )
// }




// conditional rendering: 3 ternary
// condtion ? true : false

export default function ToDo ({task, isDone, time = 0}) {
    return isDone ? <li>Done: {task} and time : {time}</li> : <li>Not Done: {task}</li>

}



// condtional rendering : 4 &&