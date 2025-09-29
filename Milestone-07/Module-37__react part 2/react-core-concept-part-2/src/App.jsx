import Users from './Users'
import Batsman from './Batsman'
import Counter from './Counter'
import './App.css'
import { Suspense } from 'react'
import Friends from './Frineds'


// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())

// const fetchFriends = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   return res.json();
// }




function App() {

  // const frinedsPromise = fetchFriends();

  function handleClick() {
    alert("I am clicked")
  }

  return (
    <>
      <h3>Vite + React</h3>
      
      {/* <Suspense fallback={<h3>loading....</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Frineds are coming for treat...</h3>}>
        <Friends frinedsPromise={frinedsPromise}>
        </Friends>
      </Suspense> */}


      <Batsman></Batsman>
      <Counter></Counter>


      {/* <button onclick="handleClick()" >Click Me</button> */} 
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert("clicked 2")
      }}>Click Me</button>
    </>
  )
}

export default App




