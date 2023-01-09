import { NavLink, NavMenu, HL2 } from "./Navbar";

const Navbar = () => {
  return (
    <>
        <NavMenu>
          <HL2 to="/">
            CENTURION BLOCKCHAIN
          </HL2>
          
          {/* <NavMenu1> */}
            <NavLink to="/">
              Developers
            </NavLink>
            <NavLink to="/">
              Ecosystem
            </NavLink>
            <NavLink to="/">
              Vault Explorer
            </NavLink>
            <NavLink to="/">
              Centurion NFT
            </NavLink>
          {/* </NavMenu1> */}
        </NavMenu> 
    </>
  );
};

export default Navbar;
