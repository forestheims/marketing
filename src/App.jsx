import './global.css';
import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Write from './components/Write/Write';
import Projects from './components/Projects/Projects';
import AboutPage from './components/AboutPage/AboutPage';
import Home from './components/Home/Home';
import Games from './components/Games/Games';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="blog" element={<Home />} />
          <Route path="write" element={<Write />} />
          <Route path="games" element={<Games />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog/:blogId" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
