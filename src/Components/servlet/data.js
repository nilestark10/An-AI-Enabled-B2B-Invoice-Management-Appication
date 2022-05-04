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

// export const loadData = async(page_size) =>{
//     console.log("page size",page_size);
//     let url = "http://localhost:8080/HRCmyapp1/Fetch?"+`page=1&page_size=${page_size}`;
//     console.log("in load",url);
//     let response = await axios.get(url);
//     console.log("in loaddata",response);
//     let data = response.data.users;
//     return data;
// }

export const FetchData = async(page,page_size)=>{
    let url = "http://localhost:8080/HRCmyapp1/Fetch?"+`page=${page}&page_size=${page_size}`;
    console.log(url);
    let response = await axios.get(url);
    console.log("in fetchdata",response);
    let data = response.data.users;
    return data;
} 



export const FetchCount = async() =>{
    let url = "http://localhost:8080/HRCmyapp1/FetchCount";
    let response = await axios.get(url);
    console.log("count",response);
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
    // console.log(response.data);
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

export const BarChartData = async(data) =>{
    console.log("in data1",data);
    let url="http://localhost:8080/HRCmyapp1/AnalyticsView?"+`&clear_date1=${data.clear_date1}&clear_date2=${data.clear_date2}&due_in_date1=${data.due_in_date1}&due_in_date2=${data.due_in_date2}&baseline_create_date1=${data.baseline_create_date1}&baseline_create_date2=${data.baseline_create_date2}&invoice_currency=${data.invoice_currency}`;
    console.log("in data url",url);
    let response = await axios.get(url);
    console.log("in data response",response)
    return response;

}

export const PieChartData = async(data) =>{
    console.log("in data1",data);
    let url="http://localhost:8080/HRCmyapp1//PieData?"+`&clear_date1=${data.clear_date1}&clear_date2=${data.clear_date2}&due_in_date1=${data.due_in_date1}&due_in_date2=${data.due_in_date2}&baseline_create_date1=${data.baseline_create_date1}&baseline_create_date2=${data.baseline_create_date2}&invoice_currency=${data.invoice_currency}`;
    console.log("in data url",url);
    let response = await axios.get(url);
    console.log("in data response pie",response)
    return response;
}




export const slNoGetdata = async(checkedList) => {
    let url= "http://localhost:8080/HRCmyapp1/GetDataSlNo?"+`sl_no=${checkedList}`;
    console.log("in sl",url);
    let response = await axios.get(url);
    return response;
}

export const Predict = async(data , sl_no) => {
    let url="http://127.0.0.1:5000/get_prediction";
    data =parseInt(data);
    const dp = {"data":[data]}
    console.log(dp);
    let response = await axios.post(url,dp);
    // console.log("in data.js",response.data);
    // getting aging bucket from ml model;
    var aging_bucket=response.data[0].aging_bucket;
    let link="http://localhost:8080/HRCmyapp1/UpdateAgingBucket?"+`aging_bucket=${aging_bucket}&sl_no=${sl_no}`;
    var update = await axios.get(link);
    // var aging_bucket="NAN";
    // if(response.data.length==1){
    //     
        
    // }
    // else{
    //     var aging_bucket=null;
    //     let link="http://localhost:8080/HRCmyapp1/UpdateAgingBucket?"+`aging_bucket=${aging_bucket}&sl_no=${sl_no}`;
    //     var update = await axios.get(link);
    // }
    
    return update;  
}


