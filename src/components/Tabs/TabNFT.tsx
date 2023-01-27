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
import img1 from "../../images/cNFT.png";

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
      paddingVertical: "5vh",
      paddingHorizontal: "5vh",
      paddingBottom: "15vh"
    },
    body2: {
      paddingVertical: "5vh",
      paddingHorizontal: "5vh",
      paddingBottom: "30vh"
    },
    pageBackground: {
      position: 'absolute',
      height:"60%",
      marginTop: "30%",
      marginLeft: "14%",
      zIndex: 1,
      aspectRatio: 1
    },
    pageBackground2: {
      position: 'absolute',
      height:"70%",
      marginTop: "12%",
      marginLeft: "27%",
      zIndex: 1,
      aspectRatio: 1
    },
  });

  return (
    <Fragment>
      {
        typeof state.loanSelected !== 'undefined' && state.loanSelected?.length > 0 && (
          <div className="pdfViewer">
            <PDFViewer width="100%" height="100%">
              <Document>
                <Page size="A4" style={styles.body} wrap={true}>
                  <SectionHeader />
                  <FrontPage LoanDetail={LoanDetail}/>
                  <Image src={img1} style={styles.pageBackground} />
                </Page>
                <Page size="A4" orientation="landscape" style={styles.body2} break wrap={true}>
                  <SectionHeader secondary={true}>Funding</SectionHeader>
                  <Funding data={gridData}/>
                  <SectionFooter />
                  <Image src={img1} style={styles.pageBackground2} />
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