import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
// import Autocomplete from '@mui/material/Autocomplete';
import { render } from "react-dom";
import { useState } from "react";
import Select from "react-select";
// import Switch from "@mui/material/switch";
import { InputSwitch } from "primereact/inputswitch";

const genderOptions = [
    { label: "Man", value: "Man" },
    { label: "Women", value: "Women" },
];

const blood_typeOptions = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "O", value: "O" },
    { label: "AB", value: "AB" },
];

const religionOptions = [
    { label: "Christian", value: "Christian" },
    { label: "Catholic", value: "Catholic" },
    { label: "Islam", value: "Islam" },
    { label: "Buddha", value: "Buddha" },
    { label: "Hindu", value: "Hindu" },
    { label: "Confucius", value: "Confucius" },
];

const maritalOptions = [
    { label: "Married", value: "Married" },
    { label: "Single", value: "Single" },
];

// const switchValue = [
//     { label: "Active", value: 1 },
//     { label: "Not Active", value: 0 },
// ];

export default function FormDialog({ open, handleClose, data, onChange, handleFormSubmit, handleGenderSelect, handleBloodTypeSelect, handleReligionSelect, handleMaritalSelect, handleActiveValue }) {
    const { id, nik, name, place_birth, date_birth, email, gender, blood_type, address, rt, rw, village, districts, religion, marital, occupation, citizen, phone_number, status } = data;
    //  const [status, setSwitchValue2] = useState(false);

    // function handleActiveValue(e)
    // {

    //     setSwitchValue2(e)
    // }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{id ? "Update Employee" : "Create New Employee"}</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField id="nik" value={nik} onChange={(e) => onChange(e)} placeholder="Enter nik" label="NIK" variant="outlined" margin="dense" fullWidth />
                        <TextField id="name" value={name} onChange={(e) => onChange(e)} placeholder="Enter Name" label="Name" variant="outlined" margin="dense" fullWidth />
                        <TextField id="place_birth" value={place_birth} onChange={(e) => onChange(e)} placeholder="Enter placebirth" label="PlaceBirth" variant="outlined" margin="dense" fullWidth />
                        <TextField id="date_birth" value={date_birth} onChange={(e) => onChange(e)} placeholder="Enter birthdate" label="DateBirth" variant="outlined" margin="dense" fullWidth />
                        <TextField id="email" value={email} onChange={(e) => onChange(e)} placeholder="Enter email" label="Email" variant="outlined" margin="dense" fullWidth />
                        {/* <TextField id="gender" value={gender} onChange={(e) => onChange(e)} placeholder="Enter Gender" label="Gender" variant="outlined" margin="dense" fullWidth /> */}
                        {/* <Autocomplete disablePortal id="combo-box-demo" options={gender_selection} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="-- Select Gender --" />} /> */}
                        <Select
                            id="gender"
                            options={genderOptions}
                            defaultValue={{
                                value: gender,
                                label: gender,
                            }}
                            placeholder="-- Select Gender --"
                            onChange={(e) => handleGenderSelect(e)}
                        />
                        {/* <TextField id="blood_type" value={blood_type} onChange={(e) => onChange(e)} placeholder="Enter Blood type" label=" " variant="outlined" margin="dense" fullWidth /> */}
                        <Select
                            id="blood_type"
                            options={blood_typeOptions}
                            defaultValue={{
                                value: blood_type,
                                label: blood_type,
                            }}
                            placeholder="-- Select Blood Type --"
                            onChange={(e) => handleBloodTypeSelect(e)}
                        />
                        <TextField id="address" value={address} onChange={(e) => onChange(e)} placeholder="Enter Address" label="Address" variant="outlined" margin="dense" fullWidth />
                        <TextField id="rt" value={rt} onChange={(e) => onChange(e)} placeholder="Enter RT" label="RT" variant="outlined" margin="dense" fullWidth />
                        <TextField id="rw" value={rw} onChange={(e) => onChange(e)} placeholder="Enter RW" label="RW" variant="outlined" margin="dense" fullWidth />
                        <TextField id="village" value={village} onChange={(e) => onChange(e)} placeholder="Enter Village" label="Village" variant="outlined" margin="dense" fullWidth />
                        <TextField id="districts" value={districts} onChange={(e) => onChange(e)} placeholder="Enter Districts" label="Districts" variant="outlined" margin="dense" fullWidth />
                        {/* <TextField id="religion" value={religion} onChange={(e) => onChange(e)} placeholder="Enter Religion" label="Religion" variant="outlined" margin="dense" fullWidth /> */}
                        <Select
                            id="religion"
                            options={religionOptions}
                            defaultValue={{
                                value: religion,
                                label: religion,
                            }}
                            placeholder="-- Select Religion --"
                            onChange={(e) => handleReligionSelect(e)}
                        />
                        {/* <TextField id="marital" value={marital} onChange={(e) => onChange(e)} placeholder="Enter Marital" label="Marital" variant="outlined" margin="dense" fullWidth /> */}
                        <Select
                            id="marital"
                            options={maritalOptions}
                            defaultValue={{
                                value: marital,
                                label: marital,
                            }}
                            placeholder="-- Select Marital --"
                            onChange={(e) => handleMaritalSelect(e)}
                        />
                        <TextField id="occupation" value={occupation} onChange={(e) => onChange(e)} placeholder="Enter Occupation" label="Occupation" variant="outlined" margin="dense" fullWidth />
                        <TextField id="citizen" value={citizen} onChange={(e) => onChange(e)} placeholder="Enter Citizen" label="Citizen" variant="outlined" margin="dense" fullWidth />
                        <TextField id="phone_number" value={phone_number} onChange={(e) => onChange(e)} placeholder="Enter PhoneNumber" label="PhoneNumber" variant="outlined" margin="dense" fullWidth />

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
