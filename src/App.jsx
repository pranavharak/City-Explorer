import { useState } from "react";
import Nav from "./components/navigation"
import './App.css'
import Home from "./components/home/home"
import Tour from "./components/tour/tour";
import Contact from "./components/contact/contact";
function App() {
  const [activePage, setActivePage] = useState("home");

  const pages = {
    home: <Home />,
    tour: <Tour />,
    contact: <Contact />,
  };
  return (
    <>
      <Nav setActivePage={setActivePage}/>
      <div className="content">{pages[activePage] || <Home />}</div>
    </>
  )
}

export default App