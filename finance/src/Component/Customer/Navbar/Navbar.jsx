import { useState } from "react";
import Style from "./Navbar.module.css";
import { NavData } from "../../utils/NavData";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className={Style.navbar_items}>
      <h2 className={Style.navbar_logo}>Finance Book</h2>

      <div className={Style.menu_icons}>
        <i
          className={clicked ? "fas-fa-times" : "fas-fa-bars"}
          onClick={() => setClicked(!clicked)}
        ></i>
      </div>

      <div className={`${Style.nav_menu} ${clicked ? Style.active : ""}`}>
        {NavData().map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={`${Style[item.cName]}`}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
