import { Link } from "react-router-dom";
import logo from "../Images/OGJ Portfolio Logo.png";
import "./TopNav.css"

function TopNav() {
  return (
    <>
      <nav className="border nav">
        <Link to="/">
            <img src={logo} alt="logo" className="top-nav-logo border" />
        </Link>
        <div className="navigation ">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>Contact</button>
        </Link>
        </div>
        
      </nav>
    </>
  );
}

export default TopNav;
