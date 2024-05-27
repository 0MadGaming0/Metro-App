import logo from './logo.svg';
import './App.css';
import MetroApp from './components/MetroApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contacts from './components/Contacts';
import FAQ from './components/FAQ';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MetroApp/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/FAQ" element={<FAQ/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
