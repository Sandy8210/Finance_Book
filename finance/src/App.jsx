import { useState } from "react";
import Home from "./Component/Customer/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Customer/Navbar/Navbar";
import Service from "./Component/Customer/Service/Service";
import About from "./Component/Customer/About/About";
import Contact from "./Component/Customer/Form/Contact";
import Profile from "./Component/User/Profile";
import { Auth } from "./Component/utils/Auth";
import { AuthenticationProvider } from "./Component/utils/AuthenticationProvider";
import Login from "./Component/LoginAuthentication/Login";

const App = () => {
  return (
    <div className=''>
      <Auth>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/profile'
            element={
              <AuthenticationProvider>
                <Profile />
              </AuthenticationProvider>
            }
          />

          <Route path='/login' element={<Login />} />
        </Routes>
      </Auth>
    </div>
  );
};

export default App;
