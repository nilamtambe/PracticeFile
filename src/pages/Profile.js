import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { list } from '../components/Data';
import googlemap from '../images/googlemap.jpg';
import Menu from '../components/Menu';




function Profile ()  {

  const [item, setItem] = useState({address:'{[{}]}',company:'{}'});
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
    <>
    <div>
      
    
      
      <div className="w-screen h-screen flex gap-10 px-8 pt-3 overflow-x-hidden">
      
       <Menu />
      
            
       <div className="flex flex-col w-full">
        <div className="h-[13vh] w-[100%] border-b border-gray-300">
          <div className="flex h-full items-center justify-between">
             <div className="capitalize text-[20px] text-gray-500">
              <p>profile</p>
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

     

          
                <div className='block' >
              <div className='w-full h-full flex mt-5'>
             <div className='border-r border-gray-300 h-full w-[40%]'>
                
             {

              
                 <div className='flex flex-col w-full items-center h-full justify-center' >
                   
                 <img className='rounded-full w-[48%]' 
                       src={item.profilepicture}  alt="" /> 
                        <p className='text-[16px] font-[400] text-gray-800'>{item.name}</p>
                       

                       <div className='flex flex-col gap-0.5 border-b border-gray-300 py-3'>

                        <div className='flex gap-3 items-center justify-center' >
                        <p className='text-[16px] font-[400] text-gray-400'>Username:</p> 
                        <p className='text-[16px] font-[400] text-gray-800'>{item.username}</p>
                        </div>

                       <div className='flex gap-3 items-center justify-center'>
                       <p className='text-[16px] font-[400] text-gray-400'>email:</p> 
                        <p className='text-[16px] font-[400] text-gray-800'>{item.email}</p>  
                       </div>

                       <div className='flex gap-3 items-center justify-center'>
                       <p className='text-[16px] font-[400] text-gray-400'>phoneNumber:</p> 
                        <p className='text-[16px] font-[400] text-gray-800'>{item.phone}</p>
                       
                       </div>
                       <div className='flex gap-3 items-center justify-center'>
                       <p className='text-[16px] font-[400] text-gray-400'>website:</p> 
                        <p className='text-[16px] font-[400] text-gray-800'>{item.website}</p>
                       
                       </div>
                       </div>

                       <div className='flex flex-col gap-1 py-3'>

                         <div className='flex gap-2 items-center justify-center' >
                        <p className='text-[16px] font-[400] text-gray-400'>Company Name:</p> 
                        <p className='text-[16px] font-[400] text-gray-800'>{item.company.name}</p>
                        </div>

                       <div className='flex gap-2 items-center justify-center'>
                       <p className='text-[16px] font-[400] text-gray-400'>catchPhrase:</p> 
                        <p className='text-[16px] font-[400] text-gray-800'>{item.company.catchPhrase}</p>  
                       </div>

                       <div className='flex gap-2 items-center justify-center'>
                       <p className='text-[16px] font-[400] text-gray-400'>bs:</p> 
                        <p className='text-[16px] font-[400] text-gray-800'>{item.company.bs}</p>
                       
                       </div>
                        

                       
                       </div>
                 </div>
               }
             </div>
               
                
              
                <div className='h-full w-[60%]'>
                  <div className='flex flex-col gap-4'>
                    <div className='pl-9 mt-2'>
                      <p className='text-[16px] font-[400] text-gray-400'>Address:</p> 
                        </div>
                  
                <div className='ml-[70px] flex flex-col gap-1'>
                  <div className='flex gap-2 items-center'>
                  <p className='text-[16px] font-[400] text-gray-400'>Street:</p>
                  <p className='text-[16px] font-[400] text-gray-800'>{item.address.street}</p>
                  </div>
                
                  <div className='flex gap-2 items-center'>
                  <p className='text-[16px] font-[400] text-gray-400'>Suite:</p>
                  <p className='text-[16px] font-[400] text-gray-800'>{item.address.suite}</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                  <p className='text-[16px] font-[400] text-gray-400'>City:</p>
                  <p className='text-[16px] font-[400] text-gray-800'>{item.address.city}</p>
                  </div>
                  <div className='flex gap-2 items-center'>
                  <p className='text-[16px] font-[400] text-gray-400'>Zipcode:</p>
                  <p className='text-[16px] font-[400] text-gray-800'>{item.address.zipcode}</p>
                  </div>
                </div>
                       
                        <div className='flex flex-col w-full justify-center items-center gap-1'>
                           <img className='w-[80%]' src={googlemap} alt={item.id}/>


                           {/* <div className='flex flex-row-reverse w-[80%] m-[auto] gap-4 text-[12px]'>
                            <div className='flex gap-2'> 
                            <p className='text-gray-400'>Lat:</p>
                            <p >{item.address.geo.lat}</p>
                            </div>
                            <div className='flex gap-2'> s
                            <p className='text-gray-400'>Long:</p>
                            <p >{item.address.geo.long}</p>
                            </div>

                           </div> */}
                        </div>
                        
                       
                       </div>

                 </div>
                 </div>
         </div>
              
           
              
          
       
         
            
       
        

      </div>

     


      
      
      

    </div>
    
    </div>
   
    </>
  )
}

export default Profile


