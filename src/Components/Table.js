import React,{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme.js"
import getData from './servlet/data.js';

const columns = [
  { field: 'sl_no', headerName: 'ID', width: 70 },
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
];

export default function DataTable() {

  const [data,setData] = useState([]);

  useEffect(async () => {
    setData(await getData())

  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='table'>
        <DataGrid 
          rows={data}
          columns={columns}
          getRowId={(data) => data.sl_no}
          pageSize={10}
          checkboxSelection
          rowHeight={30}
        />
      </div>
    </ThemeProvider>
  );
}

