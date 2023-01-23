import React, { FC, Fragment, useState } from "react";
import { useGlobalState } from "../../context/GlobalStateProvider";
import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { LenFunding, LoanDetail } from "../../@types/global";
import { DoRequest } from "../../utils/axios";
import SectionHeader from "../../pdf/SectionHeader";
import SectionFooter from "../../pdf/SectionFooter";
import Funding from "../../pdf/Funding";
import FrontPage from "../../pdf/FrontPage";
import { Image } from "@react-pdf/renderer";
import img1 from "../../images/marque.png";

export const TabNFT: FC<{}> = () => {
  const { state } = useGlobalState();
  const [gridData, setGridData] = useState(Array<LenFunding>);

  React.useEffect(() => {
    if ( typeof state.loanSelected !== 'undefined' && state.loanSelected?.length > 0 ) {
      getFunding(state.loanSelected);
    }
  },[state.loanSelected]);
 
  const getFunding = async (loanUid:string)=>{
    
    if(loanUid!==undefined && loanUid!==null && loanUid!=="" && loanUid.length>0)
    {
      const post={
        query: `query execute ($loanUid:String!) { getLoanFundingNew(loanUid:$loanUid) { 
            lenderUid,
            loanUid,
            lenderAccount,
            lenderCurrentBalance,
            lenderName,
            lenderAmountFunded,
            secondaryUid,
            investorRate,
            percentageOwned,
            paymentInformation }}`,
        variables: {loanUid:loanUid}
      }
      
      const resp = await DoRequest(post);
      setGridData(resp.data.data.getLoanFundingNew);
    }
  }
  
  var LoanDetail:LoanDetail=state.loanDetail!;
  
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35
    },    
    pageBackground: {
      position: 'absolute',
      minWidth: '76vh',
      minHeight: '88vh',
      display: 'flex',
      height: '88vh',
      width: '76vh',
      zIndex: 1,
      margin:-20
    },
  });

  return (
    <Fragment>
      {
        typeof state.loanSelected !== 'undefined' && state.loanSelected?.length > 0 && (
          <div className="pdfViewer">
            <PDFViewer width="100%" height="100%">
              <Document>
                <Page size="A4" style={styles.body} wrap={false}>
                  <SectionHeader />
                  <FrontPage LoanDetail={LoanDetail}/>
                  <Image src={img1} style={styles.pageBackground} />
                </Page>
                <Page orientation="landscape" style={styles.body} break wrap={false}>
                  <SectionHeader secondary={true}>Funding</SectionHeader>
                  <Funding data={gridData}/>
                  <SectionFooter />
                </Page>
              </Document> 
            </PDFViewer>
          </div> 
        )
      }
    </Fragment>
  );
};

export default TabNFT;