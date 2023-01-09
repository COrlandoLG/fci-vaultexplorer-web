import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from "../../components/Tabs/Tabs";
import TabDashboard from "../../components/Tabs/TabDashboard";
import TabTransaction from "../../components/Tabs/TabTransaction";
import TabNFT from "../../components/Tabs/TabNFT";
import TabDocuments from "../../components/Tabs/TabDocuments";
import "../../styles/custom.css";
import Card from 'react-bootstrap/Card';
import Navbar from "../../components/Navbar/resume";
import { useGlobalState } from "../../context/GlobalStateProvider";
import { TabsType } from "../../@types/global";
import { Zfooter } from "../../components/zfooter/zfooter";
import { FaSearch } from 'react-icons/fa';
import { IGlobal } from "../../@types/global";
import { DoRequest } from "../../utils/utilities";

const style = { color: "red", fontSize: "1em" }
const VaultInfo: React.FC = () => {
  const tabs: TabsType = [
    {
      label: "Dashboard",
      index: 1,
      Component: TabDashboard
    },
    {
      label: "Transaction History",
      index: 2,
      Component: TabTransaction
    },
    {
      label: "Investment Certificate NFT",
      index: 3,
      Component: TabNFT
    },
    {
      label: "Documents",
      index: 4,
      Component: TabDocuments
    }
  ];

  const { state, setState } = useGlobalState();
  const [account, setAccount] = useState('');
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  const updateState = (data: Partial<IGlobal>) => {
    setState((prev) => ({ ...prev, ...data }));
  };  

  const handleChangeAccount = (event: any) => {setAccount(event.target.value);}

  const handleKeyPress = (event: any) => {
    if(event.key === 'Enter'&& account!==undefined && account!==null && account!=="" && account.length>0){
      updateState({loans:state.loans!.filter(f=>f.loanAccount.includes(account)), loanSelected:''});
    }
  }

  const handleLocation= async (loanUid:string)=>{

    if(loanUid!==undefined && loanUid!==null && loanUid!=="" && loanUid.length>0)
    {
      const post={
        query: `query execute ($loanUid:String!) { getLoanDetailByUid(loanUid:$loanUid) { uid, account, borrowerFullName, status, isOnHold,originalBalance, principalBalance, noteRate, soldRate, lienPosition, escrowBalance, reserveBalanceRestricted, reserveBalance, unpaidLateCharges, unpaidInterest, noteType, rateType, deferredPrinBal, deferredUnpaidInt, deferredLateCharges }}`,
        variables: {loanUid:loanUid}
      }
      
      const resp = await DoRequest(post);
      updateState({loanSelected:loanUid, loanDetail:resp.data.data.getLoanDetailByUid});
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const element = document.getElementById('details');
    if (element)
      element.scrollIntoView({ behavior: 'smooth' });
  }, [state.loanDetail]);
  
  return (
    <>      
      <section id="loans">
        <Navbar />
        <div className="pt-1">
          <div className="pLocation">
            <div className="BSS">Investments</div>
          </div>

          <div className="header">        
            <div className="header-right">
              <div className="header-location-search-container">
                <div className="header-searchBar">
                  <span><FaSearch style={style}/></span>
                  <input id="account"
                    className="search-input"
                    placeholder="Search by Account, Prev Account"
                    onKeyDown={handleKeyPress} onChange={handleChangeAccount}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="Lol">
            {
              state.loans&& state.loans.length>0&&
              state.loans.map(function(d){
                return (
                  <div className="LolD" key={d.loanUid} onClick={()=>{
                    handleLocation(d.loanUid)
                  }}>
                    {" "}
                    <p>{d.loanAccount}</p>
                  </div>
                  )
                }
              )
            }
          </div>
        </div>
      </section>

      {
        Object.keys(state).length > 0 && state.loanDetail!==null && state.loanDetail!==undefined &&state.loanDetail?.uid!==""&&state.loanDetail!.uid.length>0&&
        <section id="details">
          <div className="vault-info">
            <Card className="text-center">
            
              <Card.Header><h3>Investment Details for {state.loanDetail?.account}</h3></Card.Header>
              <Card.Body>
                <Card.Title>
                  <div className="d-flex justify-content-between bd-highlight m-3">
                    <h6>Account: {state.loanSelected}</h6>
                    <h6>Account: (FCI account Number / Revious Account Number) {state.loanDetail?.account}</h6>
                  </div>
                  </Card.Title>
                <Card.Body>
                  <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />      
                </Card.Body>
              </Card.Body>
              <Card.Footer className="text-muted">Centurion</Card.Footer>          
            </Card>
            
          </div>
        </section>
      }
      <Zfooter/>
    </>
  );
}

export default VaultInfo;