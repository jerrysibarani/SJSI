import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import Select from "react-select";
import { InputSwitch } from "primereact/inputswitch";


const genderOptions = [
    { label: "Man", value: "Man" },
    { label: "Women", value: "Women" },
];

const maritalOptions = [
    { label: "Married", value: "Married" },
    { label: "Single", value: "Single" },
];

const statusOptions = [
    { label: "Active", value: 1 },
    { label: "Not Active", value: 0 },
];

export default function FormDialog({ open, handleClose, data, onChange, handleFormSubmit, handleGenderSelect, handleMaritalSelect, handleStatusSelect, handleActiveValue}) {
    const { id, nik, password_number, firstname, lastname, place_birth, date_birth, nationality, gender, occupation, address, email, contact_person, office_number, join_date, marital, status } = data;

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{id ? "Update Client" : "Create New Client"}</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField id="nik" value={nik} onChange={(e) => onChange(e)} placeholder="Enter nik" label="NIK" variant="outlined" margin="dense" fullWidth />
                        <TextField id="password_number" value={password_number} onChange={(e) => onChange(e)} placeholder="Enter passwordnumber" label="PasswordNumber" variant="outlined" margin="dense" fullWidth />
                        <TextField id="firstname" value={firstname} onChange={(e) => onChange(e)} placeholder="Enter firstname" label="FirstName" variant="outlined" margin="dense" fullWidth />
                        <TextField id="lastname" value={lastname} onChange={(e) => onChange(e)} placeholder="Enter lastname" label="LastName" variant="outlined" margin="dense" fullWidth />
                        <TextField id="place_birth" value={place_birth} onChange={(e) => onChange(e)} placeholder="Enter placebirth" label="PlaceBirth" variant="outlined" margin="dense" fullWidth />
                        <TextField id="date_birth" value={date_birth} onChange={(e) => onChange(e)} placeholder="Enter date_birth" label="DateBirth" variant="outlined" margin="dense" fullWidth />
                        <TextField id="nationality" value={nationality} onChange={(e) => onChange(e)} placeholder="Enter nationality" label="Nationality" variant="outlined" margin="dense" fullWidth />
                        {/* <TextField id="gender" value={gender} onChange={(e) => onChange(e)} placeholder="Enter gender" label="Gender" variant="outlined" margin="dense" fullWidth /> */}
                        <Select id="gender" options={genderOptions}
                            defaultValue={{
                                value: gender,
                                label: gender,
                            }}
                            placeholder="-- Select Gender --"
                            onChange={(e) => handleGenderSelect(e)}
                        />
                        <TextField id="occupation" value={occupation} onChange={(e) => onChange(e)} placeholder="Enter occupation" label="Occupation" variant="outlined" margin="dense" fullWidth />
                        <TextField id="address" value={address} onChange={(e) => onChange(e)} placeholder="Enter address" label="Address" variant="outlined" margin="dense" fullWidth />
                        <TextField id="email" value={email} onChange={(e) => onChange(e)} placeholder="Enter email" label="Email" variant="outlined" margin="dense" fullWidth />
                        <TextField id="contact_person" value={contact_person} onChange={(e) => onChange(e)} placeholder="Enter contactperson" label="ContactPerson" variant="outlined" margin="dense" fullWidth />
                        <TextField id="office_number" value={office_number} onChange={(e) => onChange(e)} placeholder="Enter officenumber" label="OfficeNumber" variant="outlined" margin="dense" fullWidth />
                        <TextField id="join_date" value={join_date} onChange={(e) => onChange(e)} placeholder="Enter joindate" label="JoinDate" variant="outlined" margin="dense" fullWidth />
                        {/* <TextField id="marital" value={marital} onChange={(e) => onChange(e)} placeholder="Enter marital" label="Marital" variant="outlined" margin="dense" fullWidth /> */}
                        <Select id="marital" options={maritalOptions}
                            defaultValue={{
                                value: marital,
                                label: marital,
                            }}
                            placeholder="-- Select Marital --"
                            onChange={(e) => handleMaritalSelect(e)}
                        />
                        {/* <TextField id="status" value={status} onChange={(e) => onChange(e)} placeholder="Enter status" label="status" variant="outlined" margin="dense" fullWidth /> */}
                        <h6>Status: </h6>
                        <InputSwitch checked={status == 1 ? true : false}
                        onChange={(e) => handleActiveValue(e.value)} />
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
