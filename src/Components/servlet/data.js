import React from "react";
import axios from "axios";
export const getData = async () => {
    let response = await axios.get("http://localhost:8080/HRCmyapp1/dataload");
    let data = response.data.users;
   return data;
}


export const addData = async (data) => {
    //console.log("at adddata",data);
    
        let url="http://localhost:8080/HRCmyapp1/addData?"+`business_code=${data.business_code}&cust_number=${data.cust_number}&clear_date=${data.clear_date}&buisness_year=${data.buisness_year}&doc_id=${data.doc_id}&posting_date=${data.posting_date}&document_create_date=${data.document_create_date}&due_in_date=${data.due_in_date}&invoice_currency=${data.invoice_currency}&document_type=${data.document_type}&posting_id=${data.posting_id}&total_open_amount=${data.total_open_amount}&baseline_create_date=${data.baseline_create_date}&cust_payment_terms=${data.cust_payment_terms}&invoice_id=${data.invoice_id}`;
        //console.log(url)
    let response = await axios.get(url);
    //console.log(response.status)
    return response;  

}

// let str = ('business_code=' + data.business_code + '&cust_number=' + data.cust_number + '&clear_date=' + data.clear_date
//         + '&buisness_year=' + data.buisness_year + '&doc_id=' + data.doc_id + '&posting_date=' + data.posting_date + '&document_create_date=' + data.document_create_date
//         + '&due_in_date=' + data.due_in_date + '&invoice_currency=' + data.invoice_currency + '&document_type=' + data.document_type
//         + '&posting_id=' + data.posting_id + '&total_open_amount=' + data.total_open_amount + '&baseline_create_date=' + data.baseline_create_date
//         + '&cust_payment_terms=' + data.cust_payment_terms + '&invoice_id=' + data.invoice_id) ;

export const editData = async (data , checkedList) => {
    //console.log("at editdata",checkedList,data.invoice_currency,data.cust_payment_terms);
    
        let url="http://localhost:8080/HRCmyapp1/EditData?"+`invoice_currency=${data.invoice_currency}&cust_payment_terms=${data.cust_payment_terms}&sl_no=${checkedList}`;
        //console.log(url)
    let response = await axios.get(url);
    //console.log(response.status)
    return response;  
}

export const deleteData = async (checkedList) => {
    //console.log("at deletedata",checkedList)
    let url="http://localhost:8080/HRCmyapp1/DeleteData?"+`sl_no=${checkedList}`;
    //console.log(url);
    let response = await axios.get(url);
    //console.log(response.status)
    return response;
}

// export const searchData = async(data) => {
//     //console.log("at searchData", data);
//     let url="http://localhost:8080/HRCmyapp1/SearchData?"+`cust_number=$(data.cust_number)`;
//     //console.log(url);
//     let response = await axios.get(url);
//     //console.log(response.status)
//     return response;
// }

export const AdvSearchData = async(data) => {
    //console.log("at searchData", data);
    let url="http://localhost:8080/HRCmyapp1/AdvanceSearchData?"+`doc_id=${data.doc_id}&invoice_id=${data.invoice_id}&cust_number=${data.cust_number}&buisness_year=${data.buisness_year}`;
    console.log(url);
    let response = await axios.get(url);
    return response;
}