import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { InputSwitch } from "primereact/inputswitch";

// import DialogContentText from '@material-ui/core/DialogContentText';

// const switchValue = [
//     { label: "Active", value: 1 },
//     { label: "Not Active", value: 0 },
// ];

export default function FormDialog({ open, handleClose, data, onChange, handleFormSubmit }) {
    const { id, userid, no_transaction, PIC, transaction_date } = data;

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{id ? "Update user" : "Create new user"}</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField id="userid" value={userid} onChange={(e) => onChange(e)} placeholder="Enter User Id" label="User Id" variant="outlined" margin="dense" fullWidth />
                        <TextField id="no_transaction" value={no_transaction} onChange={(e) => onChange(e)} placeholder="Enter No Transaction" label="No Transaction" variant="outlined" margin="dense" fullWidth />
                        <TextField id="PIC" value={PIC} onChange={(e) => onChange(e)} placeholder="Enter PIC" label="PIC" variant="outlined" margin="dense" fullWidth />
                        <TextField id="transaction_date" value={transaction_date} onChange={(e) => onChange(e)} placeholder="Enter Transaction Date" label="Transaction Date" variant="outlined" margin="dense" fullWidth />
                        {/* <h6>Status: </h6>
                        <InputSwitch checked={status == 1 ? true : false}
                        onChange={(e) => handleActiveValue(e.value)} /> */}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" variant="outlined">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={() => handleFormSubmit()} variant="contained">
                        {id ? "Update" : "Submit"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
