import '@progress/kendo-theme-bootstrap/dist/all.css';
import React, { FC, Fragment } from "react";
import { useGlobalState } from "../../../context/GlobalStateProvider";

export const SubTabBono: FC<{}> = () => {

    const { state } = useGlobalState();

    if ( typeof state.loanSelected !== 'undefined' && state.loanSelected?.length > 0 ) {
            
    }

    return (
        <Fragment>
            
        </Fragment>
    );
};

export default SubTabBono;