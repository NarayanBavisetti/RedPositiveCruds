import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
import Add from "./Add";

import Checkbox from "@material-ui/core/Checkbox";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 50,
    //  marginTop:"100px",
    //  marginBottom:"200px",
    margin: "100px auto 200px",
    width: "70%",
  },
});

export default function Display() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [openpopup, setOpenPopup] = useState(false);
  const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("/customers").then((res) => {
      setData(res.data);
    });
  }, []);

  const sendDetails = (e) => {
      e.preventDefault();
  }
  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add</Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Select</StyledTableCell>
              <StyledTableCell>S No.</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              {/* <StyledTableCell align="right">Calories</StyledTableCell> */}
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {data.map((item,index) => {
              return ( */}
            <StyledTableRow
            // key={item.name}
            >
              <StyledTableCell component="th" scope="row">
                <Checkbox
                onChange={handleChange}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </StyledTableCell>

              <StyledTableCell component="th" scope="row">
                {/* {index +1} */}sdv
              </StyledTableCell>
              <StyledTableCell align="left" component="th" scope="row">
                {/* {item.name} */}svd
              </StyledTableCell>
              {/* <StyledTableCell align="right">{item.name}</StyledTableCell> */}
              <StyledTableCell align="right">
                {/* {item.amount} */}dds
              </StyledTableCell>
              <StyledTableCell align="right">
                {/* <Link to={`/customers/${item._id}`}> */}
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                {/* </Link> */}
              </StyledTableCell>
              <StyledTableCell align="right">
                {/* <Link to={`/customers/${item._id}`}> */}
                <Button variant="contained" color="primary">
                  Delete
                </Button>
                {/* </Link> */}
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
            {/* );
            })} */}
          </TableBody>
        </Table>
      </TableContainer>
      <Add openpopup={openpopup} setOpenPopup={setOpenPopup}  />
      {/* title={title} setTitle={setTitle} number={number} email={email} hobbies={hobbies} */}
      {checked === true ? <Button onClick={sendDetails}>Send</Button> : null}
      <Button><Link to="/all">All Users</Link></Button>
    </div>
  );
}
