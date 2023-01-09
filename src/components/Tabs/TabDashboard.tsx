import React, { FC, Fragment } from "react";
import { useGlobalState } from "../../context/GlobalStateProvider";
import { LoanDetail } from "../../@types/global";

export const TabDashboard: FC<{}> = () => {
    const { state } = useGlobalState();
    var LoanDetail:LoanDetail=state.loanDetail!;

    return (
        <Fragment>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="box-title mt-2 ms-1 mb-3">General Info</h5>

                <div className="container">
                    {/* <div className="table-responsive"> */}
                    <div>
                        <div className="row row-cols-4">
                            <div className="col"><h6>Hash</h6></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"><h6>Transaction Date</h6></div>
                            <div className="col"></div>                            
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"><h6>On Hold</h6></div>
                            <div className="col">{LoanDetail.isOnHold}</div>
                            <div className="col"><h6>Loan Status</h6></div>
                            <div className="col">{LoanDetail.status}</div>
                            <div className="col"><h6>Original Loan Amount</h6></div>
                            <div className="col">{LoanDetail.originalBalance}</div>
                            <div className="col"><h6>Unpaid Loan Amount</h6></div>
                            <div className="col">{LoanDetail.principalBalance}</div>
                            <div className="col"><h6>Note Rate</h6></div>
                            <div className="col">{LoanDetail.noteRate}</div>
                            <div className="col"><h6>Investor Rate</h6></div>
                            <div className="col">{LoanDetail.soldRate}</div>                            
                            <div className="col"><h6>Lien Position</h6></div>
                            <div className="col">{LoanDetail.lienPosition}</div>
                            <div className="col"><h6>Escrow Balance</h6></div>
                            <div className="col">{LoanDetail.escrowBalance}</div>
                            <div className="col"><h6>Restricted Suspense</h6></div>
                            <div className="col">{LoanDetail.reserveBalanceRestricted}</div>
                            <div className="col"><h6>Suspense Balance</h6></div>
                            <div className="col">{LoanDetail.reserveBalance}</div>
                            <div className="col"><h6>Unpaid Late Charges</h6></div>
                            <div className="col">{LoanDetail.unpaidLateCharges}</div>
                            <div className="col"><h6>Unpaid Interest</h6></div>
                            <div className="col">{LoanDetail.unpaidInterest}</div>
                            <div className="col"><h6>Note Type</h6></div>
                            <div className="col">{LoanDetail.noteType}</div>
                            <div className="col"><h6>Rate Type</h6></div>
                            <div className="col">{LoanDetail.rateType}</div>
                            <div className="col"><h6>Deferred Principal Balance</h6></div>
                            <div className="col">{LoanDetail.deferredPrinBal}</div>
                            <div className="col"><h6>Deferred Unpaid Interest</h6></div>
                            <div className="col">{LoanDetail.deferredUnpaidInt}</div>
                            <div className="col"><h6>Deferred Unpaid Late Charges</h6></div>
                            <div className="col">{LoanDetail.deferredLateCharges}</div>
                        </div>
                    </div>
                </div>

                {/* <div className="table-responsive">
                    <table className="table table-striped table-product">
                        <tbody>
                            <tr>
                            <td width="390">Hash</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Transaction Date</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
            </div>
        </Fragment>
    );
};

export default TabDashboard;
