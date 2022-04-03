import React from "react";
import Button from '@mui/material/Button';
import SearchFields from './Searchfield';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.js';
import '../CSS/App.css';
import { CreateAddModalButton, CreateDeleteModalButton, CreateEditModalButton } from "./crudButtons";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";



function CreateBtn({ text, onClick }) {
    return (<Button className="createbtn" variant="outlined" onClick={onClick}>{text}</Button>);
}
function ActionButtons() {
    return (
        <ThemeProvider theme={theme}>
            <div className="actionbutton" >
                <div >
                    {/* <CreateBtn id="predict" text="PREDICT" onClick={() => { }} /> */}
                    <Button disableElevation className="createbtn" variant="contained">PREDICT</Button>
                    <CreateBtn text="ANALYTICS VIEW" onClick={() => { }} />
                    <CreateBtn text="ADVANCE SEARCH" onClick={() => { }} />
                </div>
                <RefreshOutlinedIcon className="refreshicon"/>
                <SearchFields />
                <div>
                    <CreateAddModalButton />
                    <CreateEditModalButton />
                    <CreateDeleteModalButton deleteFn={() => {
                        console.log("deleted item");
                    }} />

                </div>
            </div>
        </ThemeProvider>
    )
}

export default ActionButtons



