import React from "react";
import {Link } from "react-router-dom";
import {list} from "../components/Data";


  function Header () {

  return (
<div>
 <div className='bg-gradient-to-b from-white-300 to-[#6337c8] relative flex justify-center items-center h-screen w-screen'>
    <div className='absolute top-0 w-full z-[-1]'>
    <div className='h-[20vh] bg-[#6337c8]'></div>
    <svg className='drop-shadow-[0px_17px_0px_#dcd6f3] z-[-1]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path fill='#6337c8' fillOpacity={1} d="M 0 224 L 80 197.3 C 160 171 320 117 480 128 C 640 139 800 213 960 245.3 C 1120 277 1280 267 1360 261.3 L 1440 256 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 Z"></path>
    </svg>
    </div>
    <div className='h-[85vh] shadow-2xl w-2/5 rounded-[25px] bg-white'> 
      <div className='w-full rounded-t-[25px] flex justify-center items-center h-[16vh] text-gray-600 bg-gray-100 text-xl'> Select an account  </div>
      <div className='h-[65vh] pb-4 px7 overflow-y-auto scrollbar scrollbar-thumb-gray-200'>
      
      {
           
           list && list.length > 0 && list.map( (value) =>{
            
            return(
              <Link to={`/profile/${value.id}`} key={value.id}>
              <div className='cursor-pointer flex gap-3 items-center border-b py-2' >
              <img className='rounded-full w-[7%]' 
               src={value.profilepicture} alt="" /> 
              <div className='text-md text-gray-700 text-center font-[400] '> 
              <button>{value.name}</button>
              
             

              </div>
            
              </div> 
              
              </Link>
              
              
            )
           })}
          
      </div>
   </div>
   </div> 
       
    </div>


  
  );
};

export default Header;


