import { Link } from "react-router-dom";
import logo from "../Images/OGJ Portfolio Logo.png";
import "../CSS/TopNav.css"

function TopNav() {
  return (
    <>
      <nav className=" nav">
        <Link to="/">
            <img src={logo} alt="logo" className="top-nav-logo " />
        </Link>
        <div className="navigation">
        <Link to="/">
          <button >Home</button>
        </Link>
        <Link to="/demo">
          <button>Demo</button>
        </Link>
        </div>
        
      </nav>
    </>
  );
}

export default TopNav;
