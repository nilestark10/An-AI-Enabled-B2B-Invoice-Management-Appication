import React, { useEffect } from 'react';
import useState from 'react-usestateref';
import ActionButtons from './Components/Actionbuttons';
import MyAppBar from './Components/Appbar';
import "./CSS/App.css"

import DataTable from './Components/Table';
import Footer from './Components/footer';
import { getData } from './Components/servlet/data';
import { propsToClassKey } from '@mui/styles';

function DashBoard() {

    const [data, setData,userefData] = useState([]);
    const [checkedRow, setCheckedRow, useref] = useState(0);
    const [selectRows, setSlectRows] = useState([]);
    const [searchItem,setSearchItem] = useState(null);
    const [searchDocId , setSearchDocId] = React.useState(null);
    const [searchInvoiceId , setSearchInvoiceId] = React.useState(null);
    const [searchCustNum , setSearchCustNum] = React.useState(null);
    const [searchBusinessYear , setSearchBusinessYear ] = React.useState(null);
    
 
    useEffect(async () => {
        if(userefData.current.length==0)
        setData(await getData())

    }, []);
    
    

    var selectedList = 0;
    // var s =data.filter( d => d.id === selectRows[0])
    // //console.log(s); 
    // setName(s[0].name) 
    // setEmail(s[0].email)


    return (
        <>
            <MyAppBar />
            <ActionButtons 
            searchData ={(e)=>{
                console.log("in dash",e)
                setData(e)
                
            }}  
            searchItem={(e) => { setSearchItem(e)}}
            // searchDocId={(e) => { setSearchDocId(e)}}
            // searchInvoiceId={(e) => { setSearchInvoiceId(e)}}
            // searchCustNum={(e) => { setSearchCustNum(e)}}
            // searchBusinessYear={(e) => { setSearchBusinessYear(e)}}

                checkedlist={useref.current} modalSuccessFn={async (e) => {
                    if (e) {
                        setData(await getData());
                        // //console.log("sitem" +searchItem);
                    }

                }} />
            <DataTable data={userefData.current}  searchItem={searchItem} doc_id={searchDocId} invoice_id={searchInvoiceId} cust_number={searchCustNum} buisness_year={searchBusinessYear} onChecked={(e) => {
                if (e) {
                    // //console.log("before set", e);
                    selectedList = [e];
                    // //console.log("selected list" + selectedList)
                    setCheckedRow(e);
                    // //console.log("after set", useref.current);
                    // var s =data.filter( e => e.id === selectRows[0])
                    // //console.log("selected row",s); 
                    // setName(s[0].name) 
                    // setEmail(s[0].email) 

                }
            }}



            />
            <Footer />
        </>
    );


}

export default DashBoard

// onClickSearchFn = {(e)=>{
    
//     setSearchDocId(e.row.doc_id==""?null:e.row.doc_id)
//     setSearchInvoiceId(e.row.invoice_id==""?null:e.row.invoice_id)
//     setSearchCustNum(e.row.cust_number==""?null:e.row.cust_number)
//     setSearchBusinessYear(e.row.buisness_year==""?null:e.row.buisness_year)
//  }}  