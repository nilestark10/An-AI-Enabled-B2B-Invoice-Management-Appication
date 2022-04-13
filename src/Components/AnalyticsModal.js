import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { UserData } from "./Data";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { Analytics } from "./servlet/data";

export default function AnalyticsModal(props) {

  // console.log("in modal",props.data);
  const[row , setRow] = React.useState([]);
  console.log("in row",row);
  // console.
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userData = ({
    labels: row.map((data) => data.business_name),
    datasets: [
      {
        label: "No of customers",
        data: row.map((data) => data.cust_count),
        backgroundColor: ["#ffb0c1"],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Total open amount",
        data: row.map((data) => data.total_amount),
        backgroundColor: ["#99d0f5"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const submitHandler = async(e) => {
    e.preventDefault();
    console.log("in submit1",props.data);
    let response = await Analytics(props.data);
    console.log("in submit2",response.data.users);
    setRow(response.data.users);

    handleOpen();

  }


  return (
    <div>
        <Button
          className="edit"
          variant="outlined"
          color="primary"
          onClick={submitHandler}
        >
          SUBMIT
        </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="chartmodal">
          <div classname="stats" >
            <div style={{ width: 500 }}>
              <BarChart chartData={userData} />
            </div>
            {/* <div style={{ width: 500 }}>
              <PieChart chartData={userData} />
            </div> */}
          </div>

          <div className="btn">
            <Button className="add" variant="outlined" onClick={handleClose}>
              CLOSE
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}