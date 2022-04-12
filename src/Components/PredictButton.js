import react from "react";
import Button from '@mui/material/Button';
import { Predict, slNoGetdata } from "./servlet/data";
export default function PredictButton(props) {

    const predictHandler = async(e) =>{
        e.preventDefault();
        let response = await slNoGetdata(props.predictList);
        let data= response.data.users;
        let len = data.length;
        let i;
        for(i=0;i<len;i++)
        {
         console.log("in predictdoc", props.predictList[i]);
        let age = await Predict(data[i].doc_id , props.predictList[i]); 
        console.log("in predict age",age);
        };

    }

    return (
        <Button disableElevation className="createbtn" variant="contained" onClick={predictHandler}>PREDICT</Button>
    );
}