
import Nav from './pages/Nav'
import Home from './Component/Home'
import {BrowserRouter,Routes,Route}from"react-router-dom"
import About from'./Component/About'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import Frontpage from './Component/Frontpage'
const App = () => {
  return (
    <>
    
    <BrowserRouter>
    
   <Nav/>
   <Routes>
    <Route path='/'element={<Frontpage/>}/>
    <Route path="Home" element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="Blog" element={<Blog/>}/>
   </Routes>
   </BrowserRouter>
   
    </>
  )
}

export default App
