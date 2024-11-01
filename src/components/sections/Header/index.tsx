import { NavBar } from "./components/navbar";
import { JumboTron } from "./components/jumbotron";
import backgroundImage from '@/assets/Decore.png'
import './index.css'

export const Header = () => {
  return(
    <div className="header flex flex-wrap bg-no-repeat bg-right-top h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <NavBar />
      <JumboTron />
    </div>
  )
}