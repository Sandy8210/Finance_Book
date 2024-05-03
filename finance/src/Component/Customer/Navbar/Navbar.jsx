import { NavData } from "../../utils/NavData";
import { NavLink, useNavigate } from "react-router-dom";
import Images from "../../../assets/Image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className='bg-white  shadow-md'>
      <div className='container mx-auto  px-4 z-50 lg:px-8 py-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <a
            href='/'
            className='flex items-center font-bold text-black text-xl'
          >
            <span className='sr-only'>Finance Book</span>
            <span className='text-xl font-bold mr-2'>Finance</span>
            <img className='h-6 w-auto' src={Images.title} alt='Logo' />
          </a>
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12'>
          {NavData().map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className='text-black text-sm font-semibold hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 px-2 py-1'
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => navigate("/login")}
          className=' bg-blue-500 hover:bg-blue-600 text-white font-bold mx-10 py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Login
        </button>

        <button className='lg:hidden' onClick={() => setClicked(!clicked)}>
          {clicked ? (
            <FaTimes className='text-black text-xl' />
          ) : (
            <CiMenuFries className='text-black text-xl' />
          )}
        </button>
      </div>

      {/* Mobile Responsive Menu */}
      {clicked && (
        <div className='lg:hidden bg-gray-900'>
          <div className='container mx-auto p-4'>
            {NavData().map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className='block text-white text-center text-sm font-semibold py-2 hover:text-fuchsia-600 transition hover:bg-slate-800 hover:rounded'
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
