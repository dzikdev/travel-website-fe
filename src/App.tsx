import './App.css'
import { Header } from './components/sections/Header'
import Services from './components/sections/Service'
import Destination from './components/sections/Destination'
import Guides from './components/sections/Guides'
import Testimonies from './components/sections/Testimonies'
import Footer from './components/sections/Footer'

function App() {
  

  return (
    <>
      <Header></Header>
      <Services></Services>
      <Destination></Destination>
      <div className='px-[186px]'>
        <Guides></Guides>
      </div>
      <div className='px-[186px]'>
        <Testimonies></Testimonies>
      </div>
      <Footer/>


      {/* <Button>Click me</Button> */}
    </>
  )
}

export default App
