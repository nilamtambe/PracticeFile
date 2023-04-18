import React from 'react';
import {Routes,Route} from "react-router-dom";
import Header from '../components/Header';
import Menu from '../components/Menu';
import Gallery from '../pages/Gallery';
import Posts from '../pages/Posts';
import Profile from '../pages/Profile';
import ToDO from '../pages/ToDO';
//import Profile from '../components/Userprofile';


function index () {
  
//<Route path="/posts" element={<Posts/>} />

    return (
      <div>
          
      
        
         <Routes>
          
          <Route path="/" element={<Header/>} />
          <Route path="menu" element={<Menu/>} />
          <Route path="profile/:id"  element={<Profile/>} />
            <Route  path='profile/:id/posts' element={<Posts/>}  />
            <Route  path='profile/:id/gallery' element={<Gallery/>} />
            <Route  path='profile/:id/todo' element={<ToDO/>}   >
          </Route>
            
            
          
        </Routes>
        
      </div>
    );
  };
  
  

export default index;
