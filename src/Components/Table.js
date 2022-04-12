import React,{useState,useEffect} from 'react';
import { DataGrid, GridFilterInputValue } from '@mui/x-data-grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme.js"
import { getData , addData } from './servlet/data.js';

const columns = [
  { field: 'sl_no', headerName: 'Sl no', width: 70 },
  { field: 'business_code', headerName: 'Buisness Code', width: 130 },
  { field: 'cust_number', headerName: 'Customer Number', width: 130 },
  { field: 'clear_date', headerName: 'Clear Date', width: 110 },
  { field: 'buisness_year', headerName: 'Buisness Year', width: 110 },
  { field: 'doc_id', headerName: 'Document ID', width: 110 },
  { field: 'posting_date', headerName: 'Posting Date', width: 110 },
  { field: 'document_create_date', headerName: 'Document Create Date', width: 130 },
  { field: 'due_in_date', headerName: 'Due Date', width: 110 },
  { field: 'invoice_currency', headerName: 'Invoice Currency', width: 110 },
  { field: 'document_type', headerName: 'Document Type', width: 110 },
  { field: 'posting_id', headerName: 'Posting ID', width: 110 },
  { field: 'total_open_amount', headerName: 'Total Open Amount', width: 110 },
  { field: 'baseline_create_date', headerName: 'Baseline Create Date', width: 110 },
  { field: 'cust_payment_terms', headerName: 'Customer Payment Terms', width: 110 },
  { field: 'invoice_id', headerName: 'Invoice ID', width: 110 },
  { field: 'aging_bucket', headerName: 'Aging Bucket', width: 110 },
];

export default function DataTable(props) {

  // let searchedItem = props.item;
  // //console.log("search"+ searchedItem);
  // const[data,setData]=useState(props.searchQuery?props.data.filter(e=>e.cust_number==props.searchQuery):props.data)
  // let oneQueryData = (props.doc_id?props.data.filter(e=>String(e.doc_id).startsWith(props.doc_id)):props.data);
  // let twoQueryData = (props.invoice_id?oneQueryData.filter(e=>String(e.invoice_id).startsWith(props.invoice_id)):oneQueryData);
  // let threeQueryData = (props.cust_number?twoQueryData.filter(e=>String(e.cust_number).startsWith(props.cust_number)):twoQueryData);
  // let fourQueryData = (props.buisness_year?threeQueryData.filter(e=>String(e.buisness_year).startsWith(props.buisness_year)):threeQueryData);
  // console.log("in table",props.seacrhData);
  let tableData = (props.searchItem?props.data.filter(e=>String(e.cust_number).startsWith(props.searchItem)):props.data);

  return (
    <ThemeProvider theme={theme}>
      <div className='table'>
        <DataGrid 
          rows={tableData}
          columns={columns}
          getRowId={(data) => data.sl_no}
          //pageSize={10}
          checkboxSelection
          rowHeight={30}
          onSelectionModelChange={(id)=>{props.onChecked(id)
          //console.log(id)
        }}
          
        />
      </div>
    </ThemeProvider>
  );
}

