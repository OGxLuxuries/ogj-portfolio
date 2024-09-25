import { Link } from "react-router-dom";
import logo from "../Images/OGJ Portfolio Logo.png";
import "../CSS/Header.css"

function Header() {
  return (
    <>
      <header>
        <Link to="/">
            <img src={logo} alt="logo" className="top-nav-logo " />
        </Link>
        {/* <div className="navigation">
        <Link to="/">
          <button >Home</button>
        </Link>
        <Link to="/resume">
          <button>Resume</button>
        </Link>
        </div> */}
        
        
      </header>
    </>
  );
}

export default Header;
