

import { Suspense } from 'react'
import './App.css'
import Daisyuinav from './Coumponent/Daisyuinav/Daisyuinav'
import Navbar from './Coumponent/Navbar/Navbar'
import Prisingoption from './Coumponent/Prisingoption/Prisingoption'
import ResultChart from './Coumponent/ResultChart/ResultChart'


const prisingPromise = fetch('Prisingdata.json').then(res => res.json())

function App() {
 

  return (
    <>

    
      
     <header>
      <Navbar></Navbar>
      {/* <Daisyuinav></Daisyuinav> */}
     </header>

     <main>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Prisingoption prisingPromise={prisingPromise}></Prisingoption>
      </Suspense>

      <ResultChart></ResultChart>

     </main>
      
     
    </>
  )
}

export default App



