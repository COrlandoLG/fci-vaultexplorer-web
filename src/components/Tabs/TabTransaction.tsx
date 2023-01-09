import '@progress/kendo-theme-bootstrap/dist/all.css';
import React, { FC, Fragment, useState } from "react";
import { useGlobalState } from "../../context/GlobalStateProvider";
import { Grid, GridColumn, GridColumnMenuFilter } from '@progress/kendo-react-grid';
import { LoanPayments } from "../../@types/global";
import { DoRequest } from '../../utils/utilities';
import { initialColumnsPayments } from '../../utils/global';

export const TabTransaction: FC<{}> = () => {
    const [gridData, setGridData] = useState(Array<LoanPayments>);
    const { state } = useGlobalState();

    React.useEffect(() => {
        if ( typeof state.loanSelected !== 'undefined' && state.loanSelected?.length > 0 ) {
            getBorrowerPayments(state.loanSelected);
        }
    },[state.loanSelected]);

    const getBorrowerPayments = async (loanUid:string)=>{

        if(loanUid!==undefined && loanUid!==null && loanUid!=="" && loanUid.length>0)
        {
          const post={
            query: `query execute ($loanUid:String!) { getLoanHistoryNew(loanUid:$loanUid) { dateReceived,
                dateDue,
                dayVariance,
                reference,
                isACH,
                code,
                totalAmount,
                toInterest,
                toPrincipal,
                lateCharge,
                toLateCharge,
                toReserve,
                toImpound,
                toPrepay,
                toChargesPrincipal,
                toChargesInterest,                
                toBrokerFee,
                toLenderFee,
                toOtherTaxable,
                toOtherTaxFree,
                toOtherPayments,
                toUnpaidInterest,
                notes }}`,
            variables: {loanUid:loanUid}
          }
          
          const resp = await DoRequest(post);
          setGridData(resp.data.data.getLoanHistoryNew);
        }
    }        

    return (
        <Fragment>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="box-title mt-2 ms-1 mb-3">General Info</h5>

                <div className="container">
                    {/* <div className="table-responsive"> */}
                    <div>
                        <div className="row row-cols-4">
                            <div className="col"><h6>Time Stamp</h6></div>
                            <div className="col"></div>
                            <div className="col"><h6>Transaction</h6></div>
                            <div className="col"></div>
                            <div className="col"><h6>Block</h6></div>
                            <div className="col"></div>
                            <div className="col"><h6>Link</h6></div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
            </div>

            {
                gridData.length>0 && (
                    <Grid
                        data={gridData}
                        sortable={{ allowUnsort: true, mode: 'single' }}
                        pageable={{ buttonCount: 4, pageSizes: true }}
                        resizable={true}
                    >
                        {
                            initialColumnsPayments.filter(column => column.checked).map((column: any, index: number) => (
                                (
                                    <GridColumn
                                        title={column.title}
                                        key={column.columnName}
                                        field={column.columnName}
                                        className={column.className}
                                        width={column.width + "px"}
                                        format={column.format}
                                        filter={column.filter}
                                        sortable={column.columnName === 'Notes' ? false : true}
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

export default TabTransaction;