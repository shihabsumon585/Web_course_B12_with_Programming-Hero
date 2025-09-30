
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing';
import Charts from './components/Charts/Charts';


// const promiseData = fetch("PricingData.json").then(res => res.json());

function App() {


  return (
    <>
      <header className='max-w-[1140px] mx-auto'>
        {/* <Navbar></Navbar> */}
      </header>
      <main className='max-w-[1140px] mx-auto'>
        {/* <Suspense
        fallback={<p className='text-center mt-40'>Loading Data......</p>}
        >
          <Pricing
          promiseData={promiseData}
          ></Pricing>
        </Suspense> */}

        <Charts></Charts>
      </main>
    </>
  )
}

export default App
