import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/Admin/Admin';
import Main from './pages/Main/Main';
import AddEmployee from './pages/Admin/AddEmployee/AddEmployee';
import Employees from './pages/Admin/Employees/Employees';
import LogOut from './pages/Admin/LogOut/LogOut';
import MainSite from './pages/Admin/MainSite/MainSite';
import AdminPanel from './pages/Main/AdminPanel/AdminPanel';
import Favorites from './pages/Main/Favorites/Favorites';
import Home from './pages/Main/Home/Home';

function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />}>
        <Route path="/admin/mainsite" element={<MainSite />} />
        <Route path="/admin/addemployee" element={<AddEmployee />} />
          
          <Route path="/admin/employees" element={<Employees />} />
          <Route path="/admin/logout" element={<LogOut />} />
        
        </Route>
        <Route path="/" element={<Main />}>
          
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/employees" element={<Employees />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
