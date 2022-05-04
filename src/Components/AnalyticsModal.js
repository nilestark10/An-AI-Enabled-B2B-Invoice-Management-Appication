import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { BarChartData, PieChartData } from "./servlet/data";

export default function AnalyticsModal(props) {

  // console.log("in modal",props.data);
  const [barRow, setBarRow] = React.useState([]);
  console.log("in row", barRow);
  const [pieRow, setPieRow] = React.useState([]);
  console.log("in row.1", pieRow);

  // console.
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false) };
  const barData = ({
    labels: barRow.map((data) => data.business_name),
    datasets: [
      {
        label: "No of customers",
        data: barRow.map((data) => data.cust_count),
        backgroundColor: ["#ffb0c1"],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Total open amount",
        data: barRow.map((data) => data.total_amount),
        backgroundColor: ["#99d0f5"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const pieData = ({
    labels: pieRow.map((data) => data.invoice_currency),
    datasets: [
      {
        label: "Invoice Currecy",
        data: pieRow.map((data) => data.count_currency),
        backgroundColor: ["#ffb0c1", "#99d0f5"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("in submit1", props.data);
    let barResponse = await BarChartData(props.data);
    let pieResponse = await PieChartData(props.data);
    console.log("in submit2.0", barResponse.data.users);
    console.log("in submit2.1", pieResponse);
    setBarRow(barResponse.data.users);
    setPieRow(pieResponse.data.users);
    handleOpen();

  }


  return (
    <>
      <Button className="edit" variant="outlined" color="secondary" onClick={submitHandler}>SUBMIT</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="chartmodal">
          <div classname="charts" >

            <div className="barchart">
              <BarChart chartData={barData} />
            </div>
            <div className="piechart">
              <PieChart chartData={pieData} />
            </div>

          </div>
          <div className="close" >
            <Button variant="outlined" style={{ color: "#000000",width:"70%"}} onClick={handleClose}>
              CLOSE
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}