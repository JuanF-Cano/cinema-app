import react from "react";
import { Link } from "react-router-dom";
import SearchBarM1 from "../SearchBarM1/SerchBarM1";
import './NavBarM1.css';

function NavBarM1() {
  return (
    <nav>
      <div className='nav-bar-links'>
        <Link to="/">Home</Link>
      </div>
      <SearchBarM1></SearchBarM1>
    </nav>
  );
}

export default NavBarM1;
