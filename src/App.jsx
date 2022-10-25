import './global.css';
import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Random from './components/Blog/Random/Random';
import Write from './components/Blog/Write/Write';
import Browse from './components/Blog/Browse/Browse';
import Blog from './components/Blog/Blog';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import HireMe from './components/HireMe/HireMe';
import Services from './components/HireMe/Services/Services';
import AuthForm from './components/HireMe/AuthForm/AuthForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<About />} />
          <Route path="blog" element={<Blog />}>
            <Route index element={<Browse />} />
            <Route path="write" element={<Write />} />
            <Route path=":blogId" element={<Random />} />
          </Route>
          <Route path="work" element={<HireMe />}>
            <Route index element={<Services />} />
            <Route path="login" element={<AuthForm />} />
            <Route path="register" element={<AuthForm register />} />
          </Route>
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
