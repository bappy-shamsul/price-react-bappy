import './App.css'
import BarChart from './components/BarChart/BarChart'
import LineChart from './components/LineChart/LineChart'
// import Daisynav from './components/Daisynav/Daisynav'
import Navbar from './components/Navbar/Navbar'
import Priceoptions from './components/Priceoptions/Priceoptions'

function App() {

  return (
    <>
      {/* <Daisynav></Daisynav> */}
      <Navbar></Navbar>
      {/* <h1 className='text-7xl bg-red-400'>Vite + React</h1> */}
     
    <Priceoptions></Priceoptions>
    <LineChart></LineChart>
    <BarChart></BarChart>
    </>
  )
}

export default App
