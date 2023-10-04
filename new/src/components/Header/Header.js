import logo from "../../assets/logo.png";
import "./Header.css";

const Header = (props) => {
  const title = props.title;

  return (
  
        <div className="title">
          <img src={logo} alt="Logo" className="logo" />
          <h1>{title}</h1>
        </div>      
  );
};

export default Header;
