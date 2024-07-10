import { Link } from "react-router-dom";
import logo from "../images/OGJ Portfolio Logo.png";
import "./TopNav.css"

function TopNav() {
  return (
    <>
      <nav className="border">
        <Link to="/">
            <img src={logo} alt="logo" className="top-nav-logo border" />
        </Link>
        <div className="top-nav-buttons border">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>Python</button>
        </Link>
        <Link to="/">
          <button>Java</button>
        </Link>
        </div>
        
      </nav>
    </>
  );
}

export default TopNav;
