import React from "react";
import Button from '@mui/material/Button';
import SearchFields from './Searchfield';
import '../CSS/App.css';
import { CreateAddModalButton, CreateDeleteModalButton } from "./crudButtons";



function CreateBtn({ text, onClick }) {
    return (<Button className="createbtn" variant="outlined" onClick={onClick}>{text}</Button>);
}
function ActionButtons() {
    return (
        <div className="divtable" >
            <div >
                <CreateBtn id="predict" text="PREDICT" onClick={() => { }} />
                <CreateBtn text="ANALYTICS VIEW" onClick={() => { }} />
                <CreateBtn text="ADVANCE SEARCH" onClick={() => { }} />
            </div>
            <SearchFields />
            <div>
                <CreateAddModalButton />
                <CreateAddModalButton />
                <CreateDeleteModalButton deleteFn={() => {
                    console.log("deleted item");
                }} />

            </div>
        </div>
    )
}

export default ActionButtons



