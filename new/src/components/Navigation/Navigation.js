import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  const links = props.links;

  return (
    <div className="links">
      {links.map((link, index) => (
        <Link to={link.path} key={index} className="view-employee-link">
           <button>{link.title}</button>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
