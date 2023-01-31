import { FC, Fragment } from "react";
import { LoanDetail } from "../@types/global";
import { View, StyleSheet, Text } from '@react-pdf/renderer';
import { currencyFormat, GetEnumDescription, percentFormat } from "../utils/utilities";
import { LoanStatusForFCIWebEnum, NoteTypeEnum, PriorityEnum, RateTypeEnum } from "../utils/Enums";
import Coin from "../pdf/Coin";

type PropsType = {
    LoanDetail: LoanDetail
}

const FrontPage:FC<PropsType> = (props) => {
    const styles = StyleSheet.create({
        text: {
            margin: 5,
            paddingHorizontal: 25,
            fontSize: 14,
            textAlign: 'justify',
            fontFamily: 'Times-Roman'
        },
        subtitle: {
            fontSize: 18,
            paddingHorizontal: 12,
            margin: 10
        },
        coin: {
            left: 350,
            top: 370
        },
    });
    
    return (
        <Fragment>
            <View>
                <Text style={styles.subtitle}>
                    Lender Name: {props.LoanDetail.borrowerFullName.replace(/(\r\n|\n|\r)/gm,"")}
                </Text>
                <Text style={styles.text}>
                    Loan Status: {GetEnumDescription(props.LoanDetail.status,LoanStatusForFCIWebEnum)}
                </Text>
                <Text style={styles.text}>
                    Original Loan Amount: {currencyFormat(props.LoanDetail.originalBalance)}
                </Text>
                <Text style={styles.text}>
                    Unpaid Loan Amount: {currencyFormat(props.LoanDetail.principalBalance)}
                </Text>
                <Text style={styles.text}>
                    Note Rate: {percentFormat(props.LoanDetail.noteRate/100)}
                </Text>
                <Text style={styles.text}>
                    Investor Rate: {percentFormat(props.LoanDetail.soldRate/100)}
                </Text>
                <Text style={styles.text}>
                    Lien Position: {GetEnumDescription(props.LoanDetail.lienPosition,PriorityEnum)}
                </Text>
                <Text style={styles.text}>
                    Escrow Balance: {currencyFormat(props.LoanDetail.escrowBalance)}
                </Text>
                <Text style={styles.text}>
                    Restricted Suspense: {currencyFormat(props.LoanDetail.reserveBalanceRestricted)}
                </Text>
                <Text style={styles.text}>
                    Suspense Balance: {currencyFormat(props.LoanDetail.reserveBalance)}
                </Text>
                <Text style={styles.text}>
                    Unpaid Late Charges: {currencyFormat(props.LoanDetail.unpaidLateCharges)}
                </Text>
                <Text style={styles.text}>
                    Unpaid Interest: {currencyFormat(props.LoanDetail.unpaidInterest)}
                </Text>
                <Text style={styles.text}>
                    Note Type: {GetEnumDescription(props.LoanDetail.noteType,NoteTypeEnum)}
                </Text>
                <Text style={styles.text}>
                    Rate Type: {GetEnumDescription(props.LoanDetail.rateType,RateTypeEnum)}
                </Text>
                <Text style={styles.text}>
                    Deferred Principal Balance: {currencyFormat(props.LoanDetail.deferredPrinBal)}
                </Text>
                <Text style={styles.text}>
                    Deferred Unpaid Interest: {currencyFormat(props.LoanDetail.deferredUnpaidInt)}
                </Text>
                <Text style={styles.text}>
                    Deferred Unpaid Late Charges: {currencyFormat(props.LoanDetail.deferredLateCharges)}
                </Text>

                <Coin style={styles.coin}/>
            </View>
        </Fragment>
    );
};

export default FrontPage;