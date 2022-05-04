import React,{useEffect} from 'react';
import useState from "react-usestateref";
import { DataGrid} from '@mui/x-data-grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme.js"
import {FetchCount} from './servlet/data.js';

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

  const[rowCount,setRowCount]=React.useState();
  
  useEffect(async()=>{
       let response = await FetchCount(); 
       setRowCount(response.data.users[0].user_count);

  });

  let tableData = (props.searchItem?props.data.filter(e=>String(e.cust_number).startsWith(props.searchItem)):props.data);

  return (
    <ThemeProvider theme={theme}>
      <div className='table'>
        <DataGrid 
          rows={tableData}
          columns={columns}
          getRowId={(data) => data.sl_no}
          initialState={{
            pagination: { page: 0}
          }}
          checkboxSelection
          onSelectionModelChange={(id)=>{props.onChecked(id)}}
          rowHeight={30}
          pageSize={props.pageSize}
          onPageSizeChange={(e)=>{
            console.log("on page size change",e);
            console.log("on page ",props.page);
            props.loadPage(props.page,e);
            }}
          rowsPerPageOptions={[5,10, 20,30,50,100]}
          paginationMode='server'
          rowCount = {rowCount}
          onPageChange ={(e)=>{
            props.loadPage(e+1,props.pageSize);
           
          }}
        
        
          
        />
      </div>
    </ThemeProvider>
  );
}
