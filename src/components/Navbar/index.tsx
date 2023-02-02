import { NavLink, NavMenu } from "./Navbar";
import logo from "../../images/logo.png";

const Navbar = () => {
  
  return (
    <>
      <NavMenu>
        <NavLink className={"logo"} to="/" >
          <img id="logo" src={logo} alt="Logo" />
        </NavLink>
        <NavLink to="/blockchain" >
          Blockchain Services
        </NavLink>
        <NavLink to="/vault">
          Vault Explorer
        </NavLink>
        <NavLink to="/fintech">
          Fintech Services
        </NavLink>
        <NavLink to="/cNFT">
          Centurion cNFT
        </NavLink>
        <NavLink to="/network">
          Centurion Network
        </NavLink>        
        <NavLink to="/VaultInfo">
          Developers
        </NavLink>
        {/* <NavMenu1></NavMenu1> */}
      </NavMenu>
    </>
  );
};

export default Navbar;