
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'


const bottleData = fetch("../public/bottles.json")
  .then(res => res.json())


function App() {


  return (
    <>
      
      <h1>Buy Awesome Water Bottle</h1>

      <Suspense fallback={<h4>Bottles are loading.....</h4>}>
        <Bottles bottleData={bottleData}></Bottles>
      </Suspense>
      
    </>
  )
}

export default App
