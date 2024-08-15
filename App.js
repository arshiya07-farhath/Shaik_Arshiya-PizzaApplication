import Menu from "./Components/Menu";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import OurMenu from "./Components/OurMenu";
import { Routes, Route } from "react-router-dom";
import Addmenu from "./Components/Addmenu";
import Updatemenu from "./Components/Updatemenu";

function App() { 
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/ourmenu" element={<OurMenu />} />
        <Route path="/about" element={<About />} />
        <Route path="/addmenu" element={<Addmenu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/update-menu/:id" element={<Updatemenu/>} />
      </Routes>
      {/* <Home/>
    <About/>
    <Contact/> 
   <OurMenu/> */}
      <Footer />
    </>
  );
}
export default App;
/* 
Routing
1.Install React router npm install react-router-dom
2.set up Browser router
 update src/index.js to include BrowserRouter
 update src/app.js to include routes

3. after all steps of component in one file in app.js
import {Routes,Route} from

update Menu Component to provde Navigation Links

{
 1. Install Json Server
 npm install -g json-server
2. create a filename.json inside folder 
3. shouldnot close REACT APP open at another terminal like (POWERSHELL)
both need to learn parllel
4.start json server 
json-server --watch filename.json --port 5000



}


*/
