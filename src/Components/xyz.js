import  React,{useState,useEffect} from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const datagridSx = {
  borderRadius: 2,
  '& div[data-rowIndex][role="row"]': {
    color: "white"
  },
  "& .MuiDataGrid-columnHeaders": {
    color: "white",
    fontSize: 16,
    height:20
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    textOverflow: "clip",
    whiteSpace: "break-spaces",
    lineHeight: 1
},
".css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root":{
  color:"white",
},
".css-zylse7-MuiButtonBase-root-MuiIconButton-root.Mui-disabled":{
  color:"white",
},
".css-rtrcn9-MuiTablePagination-root":{
  color:"white",
},
".css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root":{
  color:"white",
},
}

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
]

function MainTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:8080/HRCInternship/ReceiveData")
        .then((data) => data.json)
        .then((data) => setTableData(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log(tableData);

  return (
    <div style={{ height: 450, width: '100%', background: "#29414f", color: "white", }}>
        <DataGrid
          sx={datagridSx}
          rows={tableData}
          columns={columns}
          getRowId={(tableData) => tableData.sl_no}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
  );
}

export default MainTable;