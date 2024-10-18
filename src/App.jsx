import './App.css'
import BarChart from './components/BarChart/BarChart'
import LineChart from './components/LineChart/LineChart'
// import Daisynav from './components/Daisynav/Daisynav'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import Priceoptions from './components/Priceoptions/Priceoptions'

function App() {

  return (
    <>
      {/* <Daisynav></Daisynav> */}
      <Navbar></Navbar>
      {/* <h1 className='text-7xl bg-red-400'>Vite + React</h1> */}

      <Priceoptions></Priceoptions>
      <div className='grid grid-cols-2 mr-8 bg-slate-700'>
        <LineChart></LineChart>
        <BarChart></BarChart>
      </div>
      <Phones></Phones>
    </>
  )
}

export default App
