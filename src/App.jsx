import './global.css';
import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Random from './components/Blog/Random/Random';
import Write from './components/Blog/Write/Write';
import Browse from './components/Blog/Browse/Browse';
import Blog from './components/Blog/Blog';
import Projects from './components/Projects/Projects';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />}>
            <Route index element={<Browse />} />
            <Route path="write" element={<Write />} />
            <Route path=":blog" element={<Random />} />
          </Route>
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
