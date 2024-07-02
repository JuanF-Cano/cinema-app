import react from "react";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import './NavBarM1.css';

function NavBarM1() {
  return (
    <nav>
      <div className='nav-bar-links'>
        <Link className="link-nav" to="/"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="50px" 
        fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></Link>
      </div>
      <SearchComponent />
    </nav>
  );
}

export default NavBarM1;
