import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import FormDialog from "./modal/Temp_ConsultModal";
import { DataGrid } from "@mui/x-data-grid";

const initialValue = { name: "", email: "", phone: "", dob: "",
};

function ConsultTransaction() {
    const [gridApi, setGridApi] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [tableData, setTableData] = useState(null);
    const [formData, setFormData] = useState(initialValue);

    // function handleActiveValue(e) {
    //     setFormData({ ...formData, status: e });
    // }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFormData(initialValue);
    };

    const url = `http://localhost:5000/api/temp_consult/`;
    // const url = `http://frederickdumalawoffice.id/api/users/`;
    const columnDefs = [
        { headerName: "User Id", field: "userid" },
        { headerName: "No Transaction", field: "no_transaction" },
        { headerName: "PIC", field: "PIC" },
        { headerName: "Transaction Date", field: "transaction_date" },
        {
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
        { headerName: "User Id", field: "userid", width: "350", headerAlign:"center" },
        { headerName: "No Transaction", field: "no_transaction", width: "350", headerAlign:"center" },
        { headerName: "PIC", field: "PIC", width: "350", headerAlign:"center" },
        { headerName: "Transaction Date", field: "transaction_date", width: "400", headerAlign:"center" },
        {
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

    // calling getUsers function for first time
    useEffect(() => {
        gettemp_consult();
    }, []);

    //fetching user data from server
    const gettemp_consult = () => {
        fetch(url)
            .then((resp) => resp.json())
            .then((resp) => setTableData(resp));
    };
    const onChange = (e) => {
        const { value, id } = e.target;
        // console.log(value,id)
        setFormData({ ...formData, [id]: value });
    };

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
                .then((resp) => gettemp_consult());
        }
    };

    const handleFormSubmit = () => {
        if (formData.id) {
            //updating a user
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
                        gettemp_consult();
                    });
        } else {
            // adding new user
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
                    gettemp_consult();
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
            <h1 align="center">Temporary Consultation</h1>
            <Grid align="right">
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Add Consultation
                </Button>
            </Grid>
            <div className="ag-theme-alpine-dark" style={{ height: "400px" }}>
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    pageSize={5}
                    // disableColumnMenu
                />
            </div>
            <FormDialog open={open} handleClose={handleClose}
            data={formData} onChange={onChange}
            handleFormSubmit={handleFormSubmit}
            // handleActiveValue={handleActiveValue}

             />
        </div>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(ConsultTransaction, comparisonFn);
