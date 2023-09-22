import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = (props) => {
  const title = props.title;
  const links = [{title:'View Current Employees', path:'/employees'}];


  return (
    <header >
      <nav >
        <div className="title">
          <img src={logo} alt="Logo" className="logo" />
          <h1>{title}</h1>
        </div>
        <div className="links">
          {links.map((link, index) => (
            <Link to={link.path} key={index} className="view-employee-link">
              <button>{link.title}</button>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
