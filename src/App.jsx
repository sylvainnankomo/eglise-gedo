import { BrowserRouter as Router , Routes, Route, Link, NavLink, Outlet, useParams } from "react-router-dom";
import About from "./pages/propos";
import Services from "./pages/sevices";
import Contact from "./pages/contact";
import Events from "./pages/evenements";


import Accueil from "./pages/accueil";
import Header from "./header/header";
import './App.css'
import Footer from "./footer/footer";

function App() {
  
  return (
    <>
         <Router >
          <Header/>
     
      <main >
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/propos" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/evenements" element={<Events/>}/>
          <Route path="/contact" element={<Contact/>}/>

          
          {/* <Route path="*" element={<NoMatch/>}/> */}
        </Routes>
      </main>

      <div>
        <Footer/>
      </div>
      </Router>
    </>
  )
}

export default App
