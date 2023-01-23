import { FC, Fragment } from "react";
import { LenFunding } from "../@types/global";
import { View } from '@react-pdf/renderer'
import Subtext from "./Subtext";
import Table from "../pdf/Table";
import { currencyFormat, percentFormat } from "../utils/utilities";

type PropsType = {
    data: Array<LenFunding>
}

const Funding:FC<PropsType> = (props) => {
    return (
        <Fragment>
            <View>
                <Table>
                    <Table.Header>
                        <Table.HeaderCell>Account</Table.HeaderCell>
                        <Table.HeaderCell>Lender Name</Table.HeaderCell>
                        <Table.HeaderCell>Amount Funded</Table.HeaderCell>
                        <Table.HeaderCell>% Owned</Table.HeaderCell>
                        <Table.HeaderCell>Investor Rate</Table.HeaderCell>
                        <Table.HeaderCell>Current Balance</Table.HeaderCell>
                        <Table.HeaderCell>Payment Information</Table.HeaderCell>
                        <Table.HeaderCell>Secondary Uid</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        {props.data.map(f => (
                        <Table.Row key={f.lenderUid}>
                            <Table.Cell>{f.lenderAccount}</Table.Cell>
                            <Table.Cell>{f.lenderName}</Table.Cell>
                            <Table.Cell>{currencyFormat(f.lenderAmountFunded)}</Table.Cell>
                            <Table.Cell>{percentFormat(f.percentageOwned/100)}</Table.Cell>
                            <Table.Cell>{percentFormat(f.investorRate/100)}</Table.Cell>
                            <Table.Cell>{currencyFormat(f.lenderCurrentBalance)}</Table.Cell>
                            <Table.Cell>{currencyFormat(f.paymentInformation)}</Table.Cell>
                            <Table.Cell>{f.secondaryUid}</Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>                    
                </Table>
            </View>
            {props.data.length <= 0 && (<Subtext>No Funding provided</Subtext>)}
        </Fragment>
    );
};

export default Funding;