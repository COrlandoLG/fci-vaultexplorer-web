import { useState, FC, Fragment } from "react";
import { TabsType } from "../../@types/global";
import SubTabBono from "./SubTabsNFT/SubTabBono";
import SubTabFunding from "./SubTabsNFT/SubTabFunding";
import SubTabProofOwnership from "./SubTabsNFT/SubTabProofOwnership";
import Tabs from "../../components/Tabs/Tabs";
import { useGlobalState } from "../../context/GlobalStateProvider";

export const TabNFT: FC<{}> = () => {
    const { state } = useGlobalState();

    const tabs: TabsType = [
        {
            label: "Ownership",
            index: 1,
            Component: SubTabFunding
        },
        {
            label: "Proof of Ownership",
            index: 2,
            Component: SubTabProofOwnership
        },
        {
            label: "Bono",
            index: 3,
            Component: SubTabBono
        }
    ];

    const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

    return (
        <Fragment>
            {
                Object.keys(state).length > 0 && state.loanDetail!==null &&state.loanDetail?.uid!==""&&state.loanDetail!.uid.length>0&&
                <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
            }
        </Fragment>
    );
};

export default TabNFT;