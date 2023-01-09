import "../../styles/search.css";
import { FaSearch } from 'react-icons/fa';
import {useState} from 'react';
import { useGlobalState } from "../../context/GlobalStateProvider";
import { IGlobal } from "../../@types/global";
import { useNavigate } from "react-router-dom";
import { DoRequest } from "../../utils/utilities";

const style = { color: "red", fontSize: "1em" }

const Header = () => {

  const [token, setToken] = useState('');
  const { setState } = useGlobalState();
  const navigate = useNavigate();
  const handleChangeToken = (event: any) => {setToken(event.target.value);}

  const updateState = (data: Partial<IGlobal>) => {
    setState((prev) => ({ ...prev, ...data }));
  };

  async function handleKeyPress(event: any) {
    if(event.key === 'Enter' && token!==undefined && token!==null && token!=="" && token.length>0){

      const post = {
        query: `query execute ($investor:String!) { getLoanPortfolioNew(investor:$investor) { loanUid, loanAccount }}`,
        variables: {investor:token}
      };
      
      const resp= await DoRequest(post);      
      updateState({loans:resp.data.data.getLoanPortfolioNew, loanSelected:''});
      navigate("/VaultInfo");
    }
  }

  return (
    <div className="header">
     
      <div className="header-right">
        <div className="header-location-search-container">
          {/* <div className="location-wrapper">
            <div className="location-icon-name">
              <div> Access Token</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div> */}
          <div className="header-searchBar">
            <span><FaSearch style={style}/></span>
            <input
              id="token"
              className="search-input"
              placeholder="Please insert your key to Search for Investor’s Loans"
              onKeyUp={handleKeyPress} onChange={handleChangeToken}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
