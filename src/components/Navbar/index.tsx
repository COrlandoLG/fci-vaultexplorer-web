import { NavLink, NavMenu } from "./Navbar";
import logo from "../../images/logo.png";

const Navbar = () => {
  const handleClick = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }  
  
  return (
    <>
      <NavMenu>
        <NavLink to="/" onClick={()=>{handleClick("landing")}}>
          <img id="logo" src={logo} alt="Logo" />
        </NavLink>        
        <NavLink className={"navText"} to="/" onClick={()=>{handleClick("blockchain")}}>
          Blockchain Services
        </NavLink>
        <NavLink className={"navText"} to="/" onClick={()=>{handleClick("vault")}}>
          Vault Explorer
        </NavLink>
        <NavLink className={"navText"} to="/" onClick={()=>{handleClick("fintech")}}>
          Fintech Services
        </NavLink>
        <NavLink className={"navText"} to="/" onClick={()=>{handleClick("cNFT")}}>
          Centurion cNFT
        </NavLink>
        <NavLink className={"navText"} to="/" onClick={()=>{handleClick("network")}}>
          Centurion Network
        </NavLink>        
        <NavLink className={"navText"} to="/">
          Developers
        </NavLink>
        {/* <NavMenu1></NavMenu1> */}
      </NavMenu>
    </>
  );
};

export default Navbar;