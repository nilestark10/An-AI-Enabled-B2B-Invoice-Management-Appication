import React from "react";
import Button from '@mui/material/Button';
import SearchFields from './Searchfield';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.js';
import '../CSS/App.css';
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import CreateAddModalButton from "./addbutton";
import CreateEditModalButton from "./EditButton";
import CreateDeleteModalButton from "./DeleteButton.js";
import CreateAdvSearchModal from "./AdvSearch";
import CreateAnalyticModal from "./AnalyticView";
import IconButton from '@mui/material/IconButton';
import CreateAdvanceSearchModal from "./AdvanceSearch";

function handleRef() {

    window.location.reload();
}

function ActionButtons(props) {
    //console.log('at action button',props.checkedlist)
    //console.log('action s item'+props.searchItem)
    return (
        <ThemeProvider theme={theme}>
            <div className="actionbutton" >
                <div >
                    {/* <CreateBtn id="predict" text="PREDICT" onClick={() => { }} /> */}
                    <Button disableElevation className="createbtn" variant="contained">PREDICT</Button>
                    <CreateAnalyticModal />
                    {/* <CreateAdvSearchModal onClickSearchFn ={(e)=>{props.onClickSearchFn(e)}} /> */}
                    <CreateAdvanceSearchModal searchData ={(e)=>{props.searchData(e)}} /> 
                </div>

                <IconButton><RefreshOutlinedIcon className="refreshicon" onClick={handleRef} /></IconButton>
                <SearchFields searchItem={(e) => { props.searchItem(e) }} />
                <div>
                    <CreateAddModalButton callback={props.modalSuccessFn} />
                    <CreateEditModalButton checkCount={props.checkedlist} />
                    <CreateDeleteModalButton deleteList={props.checkedlist} />

                </div>
            </div>
        </ThemeProvider>
    )
}

export default ActionButtons

// docId={(e) => { props.searchDocId(e)}} InvoiceId={(e) => { props.searchInvoiceId(e)}} CustNum={(e) => { props.searchCustNum(e)}} BusinessYear={(e) => { props.searchBusinessYear(e)}}

