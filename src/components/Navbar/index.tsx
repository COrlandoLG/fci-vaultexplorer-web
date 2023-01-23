import { NavLink, NavMenu, HL2 } from "./Navbar";

const Navbar = () => {
  const handleClick = (event: any) => {
    const element = document.getElementById('vault');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
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
          <NavLink to="/" onClick={handleClick}>
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