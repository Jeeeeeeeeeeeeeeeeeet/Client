import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import Home from './components/Home';
import { Nav } from './components/Nav';
import Blank from './components/Blank';
import RegJob from './components/RegJob';
import RegOrg from './components/RegOrg';
import LoginOrg from './components/LoginOrg';
import LoginJob from './components/LoginJob';

function App() {

  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-org" element={<LoginOrg />} />
          <Route path="/login-job" element={<LoginJob />} />
          <Route path="/reg-organization" element={<RegOrg />} />
          <Route path="/reg-job" element={<RegJob />} />
          <Route path="/blank" element={<Blank />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
