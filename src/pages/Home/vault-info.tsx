import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from "../../components/Tabs/Tabs";
import TabDashboard from "../../components/Tabs/TabDashboard";
import TabTransaction from "../../components/Tabs/TabTransaction";
import TabDocuments from "../../components/Tabs/TabDocuments";
import Card from 'react-bootstrap/Card';
import Navbar from "../../components/Navbar/index";
import { useGlobalState } from "../../context/GlobalStateProvider";
import { TabsType } from "../../@types/global";
import { Zfooter } from "../../components/zfooter/zfooter";
import { FaSearch } from 'react-icons/fa';
import { IGlobal } from "../../@types/global";
import { DoRequest } from "../../utils/axios";
import TabNFT from "../../components/Tabs/TabNFT";
import { LanText } from "../../components/Navbar/Navbar";
import { Container } from "react-bootstrap";

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
      label: "Traceability",
      index: 3,
      Component: TabTransaction
    },
    {
      label: "Documents",
      index: 4,
      Component: TabDocuments
    },
    {
      label: "cNFT",
      index: 5,
      Component: TabNFT
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
    const element = document.getElementById('details');
    if (element)
      element.scrollIntoView({ behavior: 'smooth' });
  }, [state.loanDetail]);
  
  return (
    <>      
      <Navbar {...({ classToShow: 'navNotHome' })}/>
      <section id="loans" className="section">
        <Container fluid>
          <LanText>
            INVESTMENTS
          </LanText>
          <div className="header w-50">        
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
                  <div className="menu" data-animation="center" key={d.loanUid} onClick={()=>{
                    handleLocation(d.loanUid)
                  }}>
                    <p>{d.loanAccount}</p>
                  </div>
                  )
                }
              )
            }
          </div>
        </Container>
      </section>

      {
        Object.keys(state).length > 0 && state.loanDetail!==null && state.loanDetail!==undefined &&state.loanDetail?.uid!==""&&state.loanDetail!.uid.length>0&&
        <section id="details" className="section pb-5">
          <Container>
            <Card className="text-center">            
              <Card.Header><h3>Investment Details for {state.loanDetail?.account}</h3></Card.Header>
              <Card.Body>
                <Card.Title>
                  <div className="d-flex justify-content-between bd-highlight m-3">
                    <h6>Account: {state.loanDetail?.account}</h6>
                    <h6>Account: (FCI account Number / Previous Account Number) {state.loanDetail?.account}</h6>
                  </div>
                  </Card.Title>
                <Card.Body>
                  <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />      
                </Card.Body>
              </Card.Body>
              <Card.Footer className="text-muted">Centurion</Card.Footer>          
            </Card>            
          </Container>
        </section>
      }
      <Zfooter/>
    </>
  );
}

export default VaultInfo;