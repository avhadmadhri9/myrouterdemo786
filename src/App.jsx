import React from 'react'
import { Link,BrowserRouter,Router,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Login from "./components/Login"
import Register from './components/Register'
function App() {
  return (
    <BrowserRouter>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/aboutus">About us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contactus">Contact us</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" to="/register">Register</Link>
        </li>
      </ul>
    </div>
</nav>
 <div>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/aboutus" element={<Aboutus/>}/>
     <Route path="/contactus" element={<Contactus/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
   </Routes>
 </div>
    </BrowserRouter>
  )
}

export default App
