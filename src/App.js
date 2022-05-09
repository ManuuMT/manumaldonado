import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Views/Home/Home.jsx";

function App() {
  return (
    <div className="App">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Router> 
          <Routes>
            <Route path="/" element={<Home/>}/> 
          </Routes>
        </Router>  
    </div>
  );
}

export default App;
