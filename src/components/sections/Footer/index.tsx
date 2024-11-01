import Companies from "./components/companies";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

import './index.css'

const FooterParent = () => (
  <div className="w-full">
    <Companies/>  
    <Subscribe/>  
    <Footer/>  
  </div>
)

export default FooterParent