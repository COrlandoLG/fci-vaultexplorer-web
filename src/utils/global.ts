export const initialColumnsAttachments: any[] = [
    { total: false, position: 1, checked: true, className: "text-left", alignExcel: "left", filter: 'text', width: 850, title: 'Description', columnName: 'description' },
    { total: false, position: 2, checked: true, className: "text-center", alignExcel: "center", filter: 'date', width: 120, title: 'Date', columnName: 'appCreationDate2', format: "{0:MM/dd/yyyy}" },
];

export const initialColumnsPayments: any[] = [
    { total: false, position: 1, checked: true, className: "text-center", alignExcel: "center", filter: 'date', width: 100, title: 'Date Received', columnName: 'dateReceived', format: "{0:d}" },
    { total: false, position: 2, checked: true, className: "text-center", alignExcel: "center", filter: 'date', width: 100, title: 'Date Due', columnName: 'dateDue', format: "{0:d}" },
    { total: false, position: 3, checked: true, className: "text-center", alignExcel: "center", filter: 'numeric', width: 120, title: 'Pmt Day Variance', columnName: 'dayVariance', format: "{0:n}" },
    { total: false, position: 4, checked: true, className: "text-center", alignExcel: "center", filter: 'text', width: 100, title: 'Reference', columnName: 'reference' },
    { total: false, position: 5, checked: true, className: "text-center", alignExcel: "center", filter: 'text', width: 70, title: 'ACH', columnName: 'isACH' },
    { total: false, position: 6, checked: true, className: "text-center", alignExcel: "center", filter: 'text', width: 120, title: 'Payment Type', columnName: 'code' },
    { total: true, position: 7, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Total Pmt', columnName: 'totalAmount', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 8, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Interest Received', columnName: 'toInterest', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 9, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Principal Received', columnName: 'toPrincipal', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 10, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Accrued Late Charges', columnName: 'lateCharge', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 11, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Late Charges Paid', columnName: 'toLateCharge', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 12, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Reserve Pmt', columnName: 'toReserve', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 12, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Reserve Restricted', columnName: 'reserveRestricted', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 13, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Escrow Pmt', columnName: 'toImpound', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 14, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'PPP Pmt', columnName: 'toPrepay', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 15, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Charges Prin Pmt', columnName: 'toChargesPrincipal', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 16, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Charges Int Pmt', columnName: 'toChargesInterest', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 17, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Broker Fees', columnName: 'toBrokerFee', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 18, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Lender Fees', columnName: 'toLenderFee', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 19, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Other (Taxable)', columnName: 'toOtherTaxable', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 20, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Other (Non-Taxable)', columnName: 'toOtherTaxFree', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 21, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Other Pmt', columnName: 'toOtherPayments', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 22, checked: true, className: "text-right", alignExcel: "right", filter: 'numeric', width: 100, title: 'Accrued Unpaid Interest', columnName: 'toUnpaidInterest', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: false, position: 23, checked: true, className: "text-left", alignExcel: "left", filter: 'text', width: 200, title: 'Additional Information', columnName: 'notes' },
];

export const initialColumnsFunding: any[] = [
    { total: false, position: 1, checked: true, className: "text-center", alignExcel: "center", filter: 'numeric', width: 150, title: 'Account', columnName: 'lenderAccount' },
    { total: false, position: 2, checked: true, className: "text-center", alignExcel: "center", filter: 'text', width: 150, title: 'Lender Name', columnName: 'lenderName' },
    { total: false, position: 3, checked: true, className: "text-center", alignExcel: "center", filter: 'text', width: 150, title: 'Amount Funded', columnName: 'lenderAmountFunded', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: false, position: 4, checked: true, className: "text-center", alignExcel: "center", filter: 'text', width: 150, title: '% Owned', columnName: 'percentageOwned', format: "{0:p}" },
    { total: true, position: 5, checked: true, className: "text-center", alignExcel: "center", filter: 'numeric', width: 150, title: 'Investor Rate', columnName: 'investorRate', format: "{0:p}" },
    { total: true, position: 6, checked: true, className: "text-center", alignExcel: "center", filter: 'numeric', width: 150, title: 'Current Balance', columnName: 'lenderCurrentBalance', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 7, checked: true, className: "text-center", alignExcel: "center", filter: 'numeric', width: 150, title: 'Payment Information', columnName: 'paymentInformation', format: "{0:c}", formatExcel: "$#,##0.00" },
    { total: true, position: 8, checked: true, className: "text-center", alignExcel: "center", filter: 'numeric', width: 150, title: 'Secondary Uid', columnName: 'secondaryUid' },
];