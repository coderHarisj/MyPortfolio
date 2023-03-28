import './App.scss';
import Home from './pages/Home';
import Resume from './pages/Resume.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './component/Topbar';
import Skills from './pages/Skills.tsx';


function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
