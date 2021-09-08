import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React from "react";

export default function Add(props) {
  return (
    <div>
      <Dialog open={props.openpopup}>
        <DialogTitle>
          <div>title</div>
          <button onClick={() => props.setOpenPopup(false)}>X</button>
        </DialogTitle>
        <DialogContent>
          <TextField
            className="feilds"
            label="Full Name"
            type="text"
            color="white"
            onChange={(e) =>
             props.setName(e.target.value)
            }
            value={props.name}
          />
          <TextField
            className="feilds"
            label="Number"
            type="number"
            color="white"
            onChange={(e) =>
              props.setNumber(e.target.value)
            }
            value={props.number}
          />
          <TextField
            className="feilds"
            label="E-mail"
            type="email"
            color="white"
            onChange={(e) =>
              props.setEmail(e.target.value )
            }
            value={props.email}
          />
          <TextField
            className="feilds"
            label="Hobbies"
            type="text"
            color="white"
            onChange={(e) =>
              props.setHobbies(e.target.value)
            }
            value={props.hobbies}
          />
          <Button onClick={props.onSubmit}>Save</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
