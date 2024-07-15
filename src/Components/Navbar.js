import React from 'react'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2';

const Navbar = () => {
  const navigate = useNavigate();

  const Logout =()=>{
    
    Swal.fire({
      icon: "success",
      text: "Çıkış yapılıyor",
      timer: 2000,
    });
    setTimeout(()=>{
      navigate("/login")
    }, 2000);
  }

  return (
    <div className="flex justify-between bg-amber-800 p-3">
        {/* logo & company */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <div className="text-white">Simge Coffe</div>
        </div>
        {/* logout */}
        <div className="flex justify-center items-center gap-3 text-white cursor-pointer">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <button onClick={Logout}>Logout</button>
        </div>
      </div>
  )
}

export default Navbar