import React from 'react';
import Menu from '../components/Menu';
import { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { list } from '../components/Data';


function Posts () {

  const [item, setItem] = useState({address:'{}',company:'{}'});
  const [show, setShow] = useState(false);
  
   const {id} = useParams();

  const navigate = useNavigate();

 useEffect(()=>{
    getItem();
  },[])

  //
  const getItem = ()=>{
    const newItem = list.find((value)=>value.id===parseInt(id));
    //console.log(newItem);
    setItem(newItem);
  }


  const Logout = () => {
     navigate("/")


   
  };

  return (
    <div>
      <div className="w-screen h-screen flex gap-10 px-8 pt-3 overflow-x-hidden">
        <Menu />
        <div className="flex flex-col w-full">
        <div className="h-[13vh] w-[100%] border-b border-gray-300">
          <div className="flex h-full items-center justify-between">
            <div className="capitalize text-[20px] text-gray-500">
              <p>Posts</p>
              </div> 
            
              <div className="relative inline-block text-left mt-5 ml-40" data-headlessui-state  >

{
<div>
<button  className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none " id="headlessui-menu-button-:r0:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="open" aria-controls='headlessui-menu-items-:r1:' onClick={()=>setShow(!show)}>
  <div className='cursor-pointer flex justify-end gap-3 items-center'>
  <img className="rounded-full w-[7%]" src={item.profilepicture}  alt={item.id} />
    <p>{item.name}</p>
  
    </div>
    </button>
    </div>
    
   }
     
     {
        show &&
  <div className='absolute right-0 z-10 mt-2 w-[20vw] origin-top-right rounded-md bg-white shadow-lg focus:outline-none transform opacity-100 scale-100' aria-labelledby='headlessui-menu-button-:r0:' id='headlessui-menu-items-:r7:' role="menu"tabIndex={0} data-headlessui-state="open">
  <div className=' py-1' role="none">
  <div className='flex flex-col justify-center items-center gap-1 pb-2 ' role="none">
  
   <img className='rounded-full' src={item.profilepicture} alt='' width="50%" role="none"></img>
   <p role="none">{item.name}</p>
   <p className='text-[14px] text-gray-400' role="none">{item.email}</p>
   <div className='border-t border-gray-300 '>
   <button className='mt-2 rounded-[20px] px-2 py-1 text-white bg-[#e15b22]' role="none" onClick={Logout}>Sign out</button>
   </div>
   
   </div>

 

</div>

</div>
}
    
</div>

      </div>


      </div>

      <div className='flex justify-center items-center h-full w-full'>
        <h1 className='text-[80px] font-[700] text-gray-200'>Coming Soon</h1>

      </div>

    </div>
    
    </div>
    </div>
  )
}

export default Posts
