export interface IGlobal {
    loans: Array<Loans>;
    loanSelected: string;
    loanDetail: LoanDetail;
}

export interface Loans {
    loanUid: string;
    loanAccount: string;
}

export interface LoanDetail {
    uid: string;
    account: string;
    borrowerFullName: string;
    borrowerTIN: string;
    borrowerMailingAddress: string;
    borrowerHomePhone: string;
    borrowerWorkPhone: string;
    borrowerMobilePhone: string;
    borrowerFax: string;
    borrowerEmail: string;
    borrowerZip: string;
    status: number;
    departmentName: string;
    isOnHold: boolean;
    originalBalance: number;
    principalBalance: number;
    noteRate: number;
    soldRate: number;
    lienPosition: number;
    reserveBalanceRestricted: number;
    restrictedFundFCI: number;
    restrictedInterestFCI: number;
    restrictedFundInvestor: number;
    restrictedInterestInvestor: number;

    floatSurplus: number;
    floatEnableSurplus: boolean;
    floatCeiling?: number;
    floatFloor: number;
    floatIndex: number;
    aRMName: string;
    aRMOptionActive: boolean;
    floatDaysAfterRateChange: number;
    floatMargin: number;
    floatCapForNegAmort?: number;
    floatDaysAfterPymtChange: number;
    floatEnabledPymtAdj: boolean;
    floatCapForPayment?: number;
    floatFreqPymtChange: number;
    floatNextAdjPayment?: Date;
    floatNextAdjPayment_String?: string;
    floatFreqRateChange: number;
    floatNextAdjRate?: Date;
    floatNextAdjRate_String?: string;
    floatEnableFirstRateCap: boolean;
    floatFirstRateMaxCap?: number;
    floatFirstRateMinCap?: number;
    floatPeriodicMaxCap?: number;
    floatPeriodicMinCap?: number;
    floatRoundRateFactor: number;
    floatRoundMethod: number;
    floatRoundMethod_String: string;
    floatFreqRecast: number;
    floatNextAdjRecast?: Date;
    floatNextAdjRecast_String?: string;
    floatEnableRecast: boolean;
    floatStopRecast?: Date;
    floatStopRecast_String?: string;
    floatLastRecast?: Date;
    floatLastRecast_String?: string;
    floatSendNotice: boolean;

    escrowBalance: number;
    reserveBalance: number;
    unpaidLateCharges: number;

    unpaidInterest: number;
    noteType: number;
    rateType: number;
    deferredPrinBal: number;
    deferredUnpaidInt: number;
    deferredLateCharges: number;

    paidToDate?: Date;
    paidToDate_String?: string;
    nextDueDate?: Date;
    nextDueDate_String?: string;
    maturityDate?: Date;
    maturityDate_String?: string;
    paidOffDate?: Date;
    paidOffDate_String?: string;
    originationDate?: Date;
    originationDate_String?: string;

    aCHStatus: number;

    payment: number;
    paymentImpound: number;
    paymentReserve: number;
    paymentOthers: number;
    lateChargesDays: number;
    lateChargesMin: number;
    lateChargesPct: number;
    unearnedDiscount: number;
}

export interface LoanDetail {
    uid: string;
    account: string;
    borrowerFullName: string;
    borrowerTIN: string;
    borrowerMailingAddress: string;
    borrowerHomePhone: string;
    borrowerWorkPhone: string;
    borrowerMobilePhone: string;
    borrowerFax: string;
    borrowerEmail: string;
    borrowerZip: string;
    status: number;
    departmentName: string;
    isOnHold: boolean;
    originalBalance: number;
    principalBalance: number;
    noteRate: number;
    soldRate: number;
    lienPosition: number;
    reserveBalanceRestricted: number;
    restrictedFundFCI: number;
    restrictedInterestFCI: number;
    restrictedFundInvestor: number;
    restrictedInterestInvestor: number;

    floatSurplus: number;
    floatEnableSurplus: boolean;
    floatCeiling?: number;
    floatFloor: number;
    floatIndex: number;
    aRMName: string;
    aRMOptionActive: boolean;
    floatDaysAfterRateChange: number;
    floatMargin: number;
    floatCapForNegAmort?: number;
    floatDaysAfterPymtChange: number;
    floatEnabledPymtAdj: boolean;
    floatCapForPayment?: number;
    floatFreqPymtChange: number;
    floatNextAdjPayment?: Date;
    floatNextAdjPayment_String?: string;
    floatFreqRateChange: number;
    floatNextAdjRate?: Date;
    floatNextAdjRate_String?: string;
    floatEnableFirstRateCap: boolean;
    floatFirstRateMaxCap?: number;
    floatFirstRateMinCap?: number;
    floatPeriodicMaxCap?: number;
    floatPeriodicMinCap?: number;
    floatRoundRateFactor: number;
    floatRoundMethod: number;
    floatRoundMethod_String: string;
    floatFreqRecast: number;
    floatNextAdjRecast?: Date;
    floatNextAdjRecast_String?: string;
    floatEnableRecast: boolean;
    floatStopRecast?: Date;
    floatStopRecast_String?: string;
    floatLastRecast?: Date;
    floatLastRecast_String?: string;
    floatSendNotice: boolean;

    escrowBalance: number;
    reserveBalance: number;
    unpaidLateCharges: number;

    unpaidInterest: number;
    noteType: number;
    rateType: number;
    deferredPrinBal: number;
    deferredUnpaidInt: number;
    deferredLateCharges: number;

    paidToDate?: Date;
    paidToDate_String?: string;
    nextDueDate?: Date;
    nextDueDate_String?: string;
    maturityDate?: Date;
    maturityDate_String?: string;
    paidOffDate?: Date;
    paidOffDate_String?: string;
    originationDate?: Date;
    originationDate_String?: string;

    aCHStatus: number;

    payment: number;
    paymentImpound: number;
    paymentReserve: number;
    paymentOthers: number;
    lateChargesDays: number;
    lateChargesMin: number;
    lateChargesPct: number;
    unearnedDiscount: number;
}

export interface LoanPayments {
    DateReceived?: Date;
    DateDue?: Date;
    DayVariance: number;
    DayVarianceStr: string;
    Reference: string;
    IsACHValue: string;
    IsACH: any;
    Code: string;
    TotalAmount: number;
    ToInterest: number;
    ToPrincipal: number;
    LateCharge: number;
    ToLateCharge: number;
    ToReserve: number;
    ToImpound: number;
    ToPrepay: number;
    ToChargesPrincipal: number;
    ToChargesInterest: number;
    ToBrokerFee: number;
    ToLenderFee: number;
    ToOtherTaxable: number;
    ToOtherTaxFree: number;
    ToOtherPayments: number;
    ToUnpaidInterest: number;
    Notes: string;
}

export interface LenFunding {
    lenderUid: string,
    loanUid: string,
    lenderAccount: string,
    lenderCurrentBalance: number,
    lenderName: string,
    lenderAmountFunded: number,
    secondaryUid: string,
    investorRate: number,
    percentageOwned: number,
    paymentInformation: number
}

export interface AllAttachment {
    appCreationDate2?: Date;
    description?: string;
    isRestriced: boolean;
    module: number;
    parentAccount: string;
    uid: string;
}

type TabsType = {
    label: string;
    index: number;
    Component: React.FC<{}>;
}[];