import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import FormDialog from "./modal/ClientModal";
import { DataGrid } from "@mui/x-data-grid";

const initialValue = { name: "", email: "", phone: "", dob: "",
gender:"", marital:"",   status: true,

};

function Client() {
    const [gridApi, setGridApi] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [tableData, setTableData] = useState(null);
    const [formData, setFormData] = useState(initialValue);

    function handleActiveValue(e) {
        setFormData({ ...formData, status: e });
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFormData(initialValue);
    };

    const url = `http://localhost:5000/api/client/`;
    //  const url = `http://frederickdumalawoffice.id/api/client/`;
    const columnDefs = [
        { headerName: "Id", field: "id" },
        { headerName: "NIK", field: "nik" },
        { headerName: "PasswordNumber", field: "password_number" },
        { headerName: "FirstName", field: "firstname" },
        { headerName: "LastName", field: "lastname" },
        { headerName: "PlaceBirth", field: "place_birth" },
        { headerName: "DateBirth", field: "date_birth" },
        { headerName: "Nationality", field: "nationality" },
        { headerName: "Gender", field: "gender" },
        { headerName: "Occupation", field: "occupation" },
        { headerName: "Address", field: "address" },
        { headerName: "Email", field: "email" },
        { headerName: "ContactPerson", field: "contact_person" },
        { headerName: "OfficeNumber", field: "office_number" },
        { headerName: "JoinDate", field: "join_date" },
        { headerName: "Marital", field: "marital" },
        { headerName: "Status", field: "status" },
        {
            headerName: "Actions",
            field: "id",
            cellRendererFramework: (params) => (
                <div>
                    <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)}>
                        Update
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.value)}>
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    const columns = [
        { headerName: "Id", field: "id", type: "number", width: 50 },
        { headerName: "NIK", field: "nik", type: "string", width: 150 },
        { headerName: "PasswordNumber", field: "password_number", type: "string", width: 100 },
        { headerName: "FirstName", field: "firstname", type: "string", width: 100 },
        { headerName: "LastName", field: "lastname", type: "string", width: 100 },
        { headerName: "PlaceBirth", field: "place_birth", width: 100 },
        { headerName: "DateBirth", field: "date_birth", width: 150 },
        { headerName: "Nationality", field: "nationality", width: 100 },
        { headerName: "Gender", field: "gender", width: 70 },
        { headerName: "Occupation", field: "occupation", width: 150 },
        { headerName: "Address", field: "address", width: 150 },
        { headerName: "Email", field: "email", width: 150 },
        { headerName: "ContactPerson", field: "contact_person", width: 100 },
        { headerName: "OfficeNumber", field: "office_number", width: 100 },
        { headerName: "JoinDate", field: "join_date", width: 100 },
        { headerName: "Marital", field: "marital", width: 100 },
        { headerName: "Status", field: "status", width: 110, valueGetter: (params) => (params.row.status == 1 ? "Active" : "Not Active") },
        {
            field: "action",
            headerName: "Actions",
            sortable: false,
            width: 170,
            headerAlign:"center",
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    const api = params.api;
                    const thisRow = {};

                    api.getAllColumns()
                        .filter((c) => c.field !== "__check__" && !!c)
                        .forEach((c) => (thisRow[c.field] = params.getValue(params.id, c.field)));

                    setFormData(thisRow, null, 4);
                    handleClickOpen();

                    // return alert(JSON.stringify(thisRow, null, 4));
                };

                // return <Button onClick={onClick} color="success" variant="outlined">Edit</Button>;
                return (
                    <>
                        <Button onClick={onClick}>Edit</Button><Button onClick={onClick}>Delete</Button>
                    </>
                );
            },
        },
    ];

    // calling getClient function for first time
    useEffect(() => {
        getClient();
    }, []);

    //fetching user data from server
    const getClient = () => {
        fetch(url)
            .then((resp) => resp.json())
            .then((resp) => setTableData(resp));
    };
    const onChange = (e) => {
        const { value, id } = e.target;
        // console.log(value,id)
        setFormData({ ...formData, [id]: value });
    };

    const handleGenderSelect = (e) => {
        const thisField = JSON.parse(JSON.stringify(e))
        setFormData({ ...formData, gender: thisField.value })
    }

    const handleMaritalSelect = (e) => {
        const thisField = JSON.parse(JSON.stringify(e))
        setFormData({ ...formData, marital: thisField.value })
    }

    const handleStatusSelect = (e) => {
        const thisField = JSON.parse(JSON.stringify(e))
        setFormData({ ...formData, status: thisField.value })
    }

    const onGridReady = (params) => {
        setGridApi(params);
    };

    // setting update row data to form data and opening pop up window
    const handleUpdate = (oldData) => {
        alert(JSON.stringify(oldData));
        // return alert(JSON.stringify(thisRow, null, 4));
        setFormData(oldData);
        handleClickOpen();
    };
    //deleting a user
    const handleDelete = (id) => {
        alert("Nilainya-> " + id);
        const confirm = window.confirm("Are you sure, you want to delete this row", id);
        if (confirm) {
            fetch(url + `/${id}`, { method: "DELETE" })
                .then((resp) => resp.json())
                .then((resp) => getClient());
        }
    };

    const handleFormSubmit = () => {
        if (formData.id) {
            //updating a client
            const confirm = window.confirm("Are you sure, you want to update this row ?");
            confirm &&
                fetch(url + `/${formData.id}`, {
                    method: "PUT",
                    body: JSON.stringify(formData),
                    headers: {
                        "content-type": "application/json",
                    },
                })
                    .then((resp) => resp.json())
                    .then((resp) => {
                        handleClose();
                        getClient();
                    });
        } else {
            // adding new client
            fetch(url, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "content-type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((resp) => {
                    handleClose();
                    getClient();
                });
        }
    };

    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: false,
        floatingFilter: false,
    };

    return (
        <div className="App">
            <h1 align="center">Client</h1>
            <Grid align="right">
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Create New Client
                </Button>
            </Grid>
            <div className="ag-theme-alpine-dark" style={{ height: "400px" }}>
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    pageSize={10}
                    // disableColumnMenu
                />
            </div>
            <FormDialog open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit}
            handleGenderSelect={handleGenderSelect}
            handleMaritalSelect={handleMaritalSelect}
            handleStatusSelect={handleStatusSelect}
            handleActiveValue={handleActiveValue}



            />
        </div>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Client, comparisonFn);
