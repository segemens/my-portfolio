import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header.js"

import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Skills from "./pages/Skills.js"
import Projects from "./pages/Projects.js"
import Footer from './components/Footer.js';


function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />

      <main className="flex-fill">

        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='skills' element={<Skills />} />
            <Route path='projects' element={<Projects />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
