import React from "react";
import Button from '@mui/material/Button';
import SearchFields from './Searchfield';
import '../CSS/App.css';

function CreateBtn({ text, onClick }) {
    return (<Button className="createbtn" variant="outlined" onClick={onClick}>{text}</Button>);
}
function ActionButtons() {
    return (
        <div className="divtable" >
            <div >
                <CreateBtn text="PREDICT" onClick={() => {}} />
                <CreateBtn text="ANALYTICS VIEW" onClick={() => { }} />
                <CreateBtn text="ADVANCE SEARCH" onClick={() => { }} />
            </div>
            <SearchFields />
            <div>
            <CreateBtn text="ADD" onClick={() => { }} />
            <CreateBtn text="EDIT" onClick={() => { }} />
            <CreateBtn text="DELETE" onClick={() => { }} />
            </div>
        </div>
    )
}

export default ActionButtons
