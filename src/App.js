import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Views/Home.jsx"
import Contact from "./Views/Contact.jsx"

function App() {
  return (
    <div className="App">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Router> 
          <Routes>
            <Route path="/" element={<Home/>} />  
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>  
    </div>
  );
}

export default App;
