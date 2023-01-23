import '@progress/kendo-theme-bootstrap/dist/all.css';
import React, { FC, Fragment, useState } from "react";
import { useGlobalState } from "../../../context/GlobalStateProvider";
import { Grid, GridColumn, GridColumnMenuFilter } from '@progress/kendo-react-grid';
import { LenFunding } from "../../../@types/global";
import { DoRequest } from '../../../utils/axios';
import { initialColumnsFunding } from '../../../utils/global';

export const SubTabFunding: FC<{}> = () => {
    const [gridData, setGridData] = useState(Array<LenFunding>);
    const { state } = useGlobalState();

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

    return (
        <Fragment>
            {
                gridData.length>0 && (
                    <Grid
                        data={gridData}
                        sortable={{ allowUnsort: true, mode: 'single' }}
                        pageable={{ buttonCount: 4, pageSizes: true }}
                        resizable={true}
                    >
                        {
                            initialColumnsFunding.filter(column => column.checked).map((column: any, index: number) => (
                                (
                                    <GridColumn
                                        title={column.title}
                                        key={column.columnName}
                                        field={column.columnName}
                                        className={column.className}
                                        width={column.width + "px"}
                                        format={column.format}
                                        filter={column.filter}
                                        sortable={true}
                                        columnMenu={
                                            props =>
                                                <GridColumnMenuFilter
                                                    {...props}
                                                    expanded={true}
                                                />
                                        }
                                    />
                                )
                            ))
                        }
                    </Grid>
                )
            }

            
        </Fragment>
    );
};

export default SubTabFunding;