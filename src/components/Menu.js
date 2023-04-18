import React from 'react';
import { Link ,useParams} from 'react-router-dom';

function Menu() {
  const {id} = useParams();
  return (
    
    <div>
     <nav className="bg-gradient-to-r from-[#5168cd] to-[#3e57c8] h-[95vh] w-[21vw] rounded-[23px] flex flex-col justify-center items-center px-8 ">
     <div className="border-b capitalize border-white block w-full py-3">
        <Link className='text-white'style={{textDecoration:"none"}} to={"/profile/"+id}>Profile</Link>
        </div>
        <div className="border-b capitalize border-white block w-full py-3">
        <Link className='text-white'style={{textDecoration:"none"}} to={`/profile/${id}/posts`}>Posts</Link>
        </div>
        <div className="border-b capitalize border-white block w-full py-3">
        <Link className='text-white'style={{textDecoration:"none"}} to={`/profile/${id}/gallery`}>Gallery</Link>
        </div>
        <div className="border-b capitalize border-white block w-full py-3">
        <Link className='text-white'style={{textDecoration:"none"}} to={`/profile/${id}/todo`}>ToDO</Link>

        </div>

       
       </nav>
       </div>
       
    
  )
}

export default Menu
