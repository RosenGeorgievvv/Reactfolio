import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Experience from './pages/Experience';
import Footer from './components/Footer';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
