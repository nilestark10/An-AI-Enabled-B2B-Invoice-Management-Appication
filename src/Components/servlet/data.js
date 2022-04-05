import React from "react";
import axios from "axios";
export const getData = async () => {
    let response = await axios.get("http://localhost:8080/HRCmyapp1/dataload");
    let data = response.data.users;
    data.map((user, index) => ({ ...user, "id": index }));
    return data;
}

// export const addData = async (data) => {
//     console.log("at adddata",data);
//     let str = ('business_code=' + data.business_code + '&cust_number=' + data.cust_number + '&clear_date=' + data.clear_date
//         + '&buisness_year=' + data.buisness_year + '&doc_id=' + data.doc_id + '&posting_date=' + data.posting_date + '&document_create_date=' + data.document_create_date
//         + '&due_in_date=' + data.due_in_date + '&invoice_currency=' + data.invoice_currency + '&document_type=' + data.document_type
//         + '&posting_id=' + data.posting_id + '&total_open_amount=' + data.total_open_amount + '&baseline_create_date=' + data.baseline_create_date
//         + '&cust_payment_terms=' + data.cust_payment_terms + '&invoice_id=' + data.invoice_id) ;
//         let url="http://localhost:8080/HRCmyapp1/addData?"+str;
//         console.log(url)
//     let response = await axios.get(url);
//     console.log(response.status)
//     return response.data;  

// }