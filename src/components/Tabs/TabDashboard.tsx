import { FC, Fragment } from "react";
import { useGlobalState } from "../../context/GlobalStateProvider";
import { LoanDetail } from "../../@types/global";
import { currencyFormat, GetEnumDescription, percentFormat } from "../../utils/utilities";
import { BooleanEnum, LoanStatusForFCIWebEnum, NoteTypeEnum, PriorityEnum, RateTypeEnum } from "../../utils/Enums";

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
                            <div className="col">{GetEnumDescription(LoanDetail.isOnHold?1:0,BooleanEnum)}</div>
                            <div className="col"><h6>Loan Status</h6></div>
                            <div className="col">{GetEnumDescription(LoanDetail.status,LoanStatusForFCIWebEnum)}</div>
                            <div className="col"><h6>Original Loan Amount</h6></div>
                            <div className="col">{currencyFormat(LoanDetail.originalBalance)}</div>
                            <div className="col"><h6>Unpaid Loan Amount</h6></div>
                            <div className="col">{currencyFormat(LoanDetail.principalBalance)}</div>
                            <div className="col"><h6>Note Rate</h6></div>
                            <div className="col">{percentFormat(LoanDetail.noteRate/100)}</div>
                            <div className="col"><h6>Investor Rate</h6></div>
                            <div className="col">{percentFormat(LoanDetail.soldRate/100)}</div>                            
                            <div className="col"><h6>Lien Position</h6></div>
                            <div className="col">{GetEnumDescription(LoanDetail.lienPosition,PriorityEnum)}</div>
                            <div className="col"><h6>Escrow Balance</h6></div>
                            <div className="col">{currencyFormat(LoanDetail.escrowBalance)}</div>
                            <div className="col"><h6>Restricted Suspense</h6></div>
                            <div className="col">{currencyFormat(LoanDetail.reserveBalanceRestricted)}</div>
                            <div className="col"><h6>Suspense Balance</h6></div>
                            <div className="col">{currencyFormat(LoanDetail.reserveBalance)}</div>
                            <div className="col"><h6>Unpaid Late Charges</h6></div>
                            <div className="col">{currencyFormat(LoanDetail.unpaidLateCharges)}</div>
                            <div className="col"><h6>Unpaid Interest</h6></div>
                            <div className="col">{currencyFormat(LoanDetail.unpaidInterest)}</div>
                            <div className="col"><h6>Note Type</h6></div>
                            <div className="col">{GetEnumDescription(LoanDetail.noteType,NoteTypeEnum)}</div>
                            <div className="col"><h6>Rate Type</h6></div>
                            <div className="col">{GetEnumDescription(LoanDetail.rateType,RateTypeEnum)}</div>
                            <div className="col"><h6>Deferred Principal Balance</h6></div>
                            <div className="col">{currencyFormat(LoanDetail.deferredPrinBal)}</div>
                            <div className="col"><h6>Deferred Unpaid Interest</h6></div>
                            <div className="col">{currencyFormat(LoanDetail.deferredUnpaidInt)}</div>
                            <div className="col"><h6>Deferred Unpaid Late Charges</h6></div>
                            <div className="col">{currencyFormat(LoanDetail.deferredLateCharges)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default TabDashboard;
