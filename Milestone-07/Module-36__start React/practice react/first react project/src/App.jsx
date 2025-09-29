
import Actor from "./Actor.jsx"
import ToDo from "./ToDo.jsx"
import './App.css'
import Library from "./Library.jsx"

function App() {
  const actors = ["Bappa Raj", "Omar Sunny", "Salman Shah"];

  const books = [
    {id: 1, name: "Physics", price: 250},
    {id: 2, name: "Chemistry", price: 350},
    {id: 3, name: "Math", price: 255},
    {id: 4, name: "Biology", price: 290}
  ]
  


  return (
    <>
      <h1>Vite + React</h1>

      <Library books={books}></Library>



      {
        actors.map(actor => <Actor actor={actor} ></Actor>)
      }



      {/* <ToDo task="Eid Salami" time="On time" isDone= {true} ></ToDo>
      <ToDo task="Passed by Graduation" time="4 years" isDone = {false} ></ToDo> */}
    </>
  )
}
export default App





















// function Developer (props) {
//   return (
//     <div style={{border: "3px dotted green", borderRadius: "10px", marginTop: "20px"}}>
//       <p style={{fontWeight: "bolder"}}>Name: {props.name}</p>
//       <p style={{fontWeight: "bolder"}}>Technology: {props.tech}</p>
//     </div>
//   )
// }








// function Result () {
//   const num = 56;
//   return (
//     <p style={{
//       color: "blue",
//       fontWeight: "bolder"
//     }}>my exam average number is {num}</p>
//   )
// }
// function Result () {
//   const num = 56;
//   const paragraphSyle = {
//     color: "red",
//     fontSize: "30px",
//     fontWeight: "bolder"
//   }
//   return (
//     <p style={paragraphSyle}>my exam average number is {num}</p>
//   )
// }
// function Result () {
//   const num = 56;
//   return (
//     <p className='paragraph'>my exam average number is {num}</p>
//   )
// }
