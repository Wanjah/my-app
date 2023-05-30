import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Nav from './Pages/Nav';
import Gallery from './Pages/Gallery';
import Table from './Pages/Table';
import Home from './Pages/Home';
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav/>}>
      <Route path="home" element={<Home />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="table" element={<Table/>}/>
      </Route>
  
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
