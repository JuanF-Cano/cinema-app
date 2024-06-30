import react from "react";
import { Link } from "react-router-dom";
import SearchBarM1 from "../SearchBarM1/SerchBarM1";

function NavBarM1() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tv-shows">TV Shows</Link>
        <Link to="/people">People</Link>
      </div>
      <SearchBarM1></SearchBarM1>
    </nav>
  );
}

export default NavBarM1;
