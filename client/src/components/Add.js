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
            // onChange={(e) =>
            //   setUserData({ ...userData, firstName: e.target.value })
            // }
            // value={userData["firstName"]}
          />
          <TextField
            className="feilds"
            label="Number"
            type="number"
            color="white"
            // onChange={(e) =>
            //   setUserData({ ...userData, firstName: e.target.value })
            // }
            // value={userData["firstName"]}
          />
          <TextField
            className="feilds"
            label="E-mail"
            type="email"
            color="white"
            // onChange={(e) =>
            //   setUserData({ ...userData, firstName: e.target.value })
            // }
            // value={userData["firstName"]}
          />
          <TextField
            className="feilds"
            label="Hobbies"
            type="text"
            color="white"
            // onChange={(e) =>
            //   setUserData({ ...userData, firstName: e.target.value })
            // }
            // value={userData["firstName"]}
          />
          <Button>Save</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
