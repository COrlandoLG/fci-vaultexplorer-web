import '@progress/kendo-theme-bootstrap/dist/all.css';
import React, { FC, Fragment, useState } from "react";
import { useGlobalState } from "../../context/GlobalStateProvider";
import { Grid, GridColumn, GridColumnMenuFilter } from '@progress/kendo-react-grid';
import { LenFunding } from "../../@types/global";
import { DoRequest } from '../../utils/utilities';
import { initialColumnsAttachments } from '../../utils/global';

export const TabDocuments: FC<{}> = () => {
    const [gridData, setGridData] = useState(Array<LenFunding>);
    const { state } = useGlobalState();

    React.useEffect(() => {
        if ( typeof state.loanSelected !== 'undefined' && state.loanSelected?.length > 0 ) {
            getAttachments(state.loanSelected);
        }
    },[state.loanSelected]);

    const getAttachments = async (loanUid:string)=>{

        if(loanUid!==undefined && loanUid!==null && loanUid!=="" && loanUid.length>0)
        {
          const post={
            query: `query execute ($loanUid:String!) { getLoanAttachmentNew(loanUid:$loanUid) { appCreationDate2,
                description,
                isRestriced,
                module,
                parentAccount,
                uid }}`,
            variables: {loanUid:loanUid}
          }
          
          const resp = await DoRequest(post);
          setGridData(resp.data.data.getLoanAttachmentNew);
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
                            initialColumnsAttachments.filter(column => column.checked).map((column: any, index: number) => (
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

export default TabDocuments;