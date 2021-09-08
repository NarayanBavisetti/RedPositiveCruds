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
import { Link, useHistory } from "react-router-dom";
import Add from "./Add";

import Checkbox from "@material-ui/core/Checkbox";
import Edit from "./Edit";

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
  const history = useHistory();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");

  const onSubmit = async () => {
    const data = { name, number, email, hobbies };
    setName('');
    setEmail('');
    setHobbies('');
    setNumber('');
    setOpenPopup(false);
    await axios.post("/add", data)

  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [openpopup, setOpenPopup] = useState(false);
  const [openeditpopup, setEditOpenPopup] = useState(false);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(async () => {
    await axios.get("/users").then((res) => {
      setData(res.data);
    });
  }, []);

  const sendDetails = (e) => {
    e.preventDefault();
  };
  async function deleteUser(id) {
    await axios.delete(`delete/${id}`);

  }
  async function editUser(item) {
    // console.log(item);
    setData1(item);
    setEditOpenPopup(true);
    //  item.name = name ;
    //  item.number = number;
    //  item.hobbies = hobbies;
    //  item.email = email;

    // await axios.delete(`delete/${id}`);
  }

  return (
    <div>
      <TableContainer>
        <Button onClick={() => setOpenPopup(true)}>Add</Button>
        {checked === true ? <Button onClick={sendDetails}>Send</Button> : null}
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Select</StyledTableCell>
              <StyledTableCell>S No.</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Hobbies</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => {
              return (
                <StyledTableRow key={item.name}>
                  <StyledTableCell component="th" scope="row">
                    <Checkbox
                      onChange={handleChange}
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="left" component="th" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.number}</StyledTableCell>
                  <StyledTableCell align="right">{item.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.hobbies}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => editUser(item)}
                    >
                      Edit
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => deleteUser(item._id)}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Add
        openpopup={openpopup}
        setOpenPopup={setOpenPopup}
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        email={email}
        setEmail={setEmail}
        hobbies={hobbies}
        setHobbies={setHobbies}
        onSubmit={onSubmit}
      />
      <Edit
        data1={data1}
        openeditpopup={openeditpopup}
        setEditOpenPopup={setEditOpenPopup}
        setName={setName}
        setNumber={setNumber}
        setEmail={setEmail}
        setHobbies={setHobbies}
        onSubmit={onSubmit}
      />
    </div>
  );
}
