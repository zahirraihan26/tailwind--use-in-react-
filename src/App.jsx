

import { Suspense } from 'react'
import './App.css'
import Daisyuinav from './Coumponent/Daisyuinav/Daisyuinav'
import Navbar from './Coumponent/Navbar/Navbar'
import Prisingoption from './Coumponent/Prisingoption/Prisingoption'
import ResultChart from './Coumponent/ResultChart/ResultChart'
// import axios from 'axios'
import Markschart from './Coumponent/Markschart/Markschart'
import axios from 'axios'


const prisingPromise = fetch('Prisingdata.json').then(res => res.json())
const markspromise = axios.get('Markdata.json') 

// Markdata.json a problem ase 

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

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

      <Markschart  markspromise={markspromise}></Markschart>

      </Suspense>


      <ResultChart></ResultChart>

     </main>
      
     
    </>
  )
}

export default App



