import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Blog from './components/blog';
import Header from './components/header';
import Page404 from './components/page404';
import Like from './components/like';

function App() {
  return (
    <>
      <Header/>
      <nav className="nav nav-pills nav-justified">
        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/about">Hakkında</NavLink>
        <NavLink className="nav-link" to="/blog">Blog</NavLink>
        <NavLink className="nav-link" to="/like">Beğenenler</NavLink>
        
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/like' element={<Like />} />
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </>
  );
}

export default App;
