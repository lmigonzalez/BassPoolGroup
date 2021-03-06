import React, {} from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './pages/Home/Home';
import GalleryPage from './pages/Gallery/GalleryPage'
import Services from './pages/Services/Services'
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Admin from './pages/Admin/Admin';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './components/Footer';

import { RequiredAuth } from './ProtectedPage/ProtectedPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gallery' element={<GalleryPage/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/contactus' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route
          path='/dashboard'
          element={
            <RequiredAuth redirectTo='/'>
              <Dashboard/>
            </RequiredAuth>
          }
        >
        </Route>
          {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
