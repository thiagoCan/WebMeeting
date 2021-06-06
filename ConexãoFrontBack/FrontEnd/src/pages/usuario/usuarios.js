import React, { useState, useEffect } from "react";
import { Button, Grid, makeStyles, Modal } from "@material-ui/core";
import { DataGrid, GridToolbar  } from "@material-ui/data-grid";
import "./usuarios.css";
import apiUser from "../../services/api-user";
import Exibir from "../components/exibir";
import Editar from "../components/editar";
import Cadastrar from "../components/cadastrar";
import Excluir from "../components/excluir";


const useStyles = makeStyles({
    btnExibir: {
        backgroundColor: 'green',
        color: '#fff'
    },
    btnEditar: {
        backgroundColor: 'blue',
        color: '#fff'
    },
    btnExcluir: {
        backgroundColor: 'red',
        color: '#fff',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAdcionar: {
        backgroundColor: 'blue',
        color: '#fff',
        height: '60%',
        width: '30%',
        fontSize: 'large',
        marginTop: '3%',
        marginRight: '10%',
    }
});

export default function Usuarios(props) {
    const classes = useStyles();
    const [users, setUsers] = useState([])
    const [id, setId] = useState('')
    const [open, setOpen] = useState(false);
    const [openEx, setOpenEx] = useState(false);
    const [openEd, setOpenEd] = useState(false);
    const [openExc, setOpenExc] = useState(false);

    useEffect(() => {
        apiUser.listar()
        .then(res => {
            console.log(JSON.stringify(res.data))
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 200 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'telefone', headerName: 'Telefone', width: 130 },
        { field: 'cargo', headerName: 'Cargo', width: 130 },
        { field: 'departamento', headerName: 'Departamento', width: 130 },
        { field: 'perfil', headerName: 'Perfil', width: 130 },
        {
            field: 'exibir', headerName: 'Exibir', width: 130, renderCell: (params) => (
                <Button className={classes.btnExibir} onClick={() => { 
                    setId(params.id)
                    setOpenEx(true)
                    console.log(params.id) }}>Exibir</Button>
            )
        },
        {
            field: 'editar', headerName: 'Editar', width: 130, renderCell: (params) => (
                <Button className={classes.btnEditar} onClick={() => { 
                    setId(params.id);
                    setOpenEd(true);
                    console.log(params.id) }}>Editar</Button>
            )
        },
        {
            field: 'excluir', headerName: 'Excluir', width: 130, renderCell: (params) => (
                <Button className={classes.btnExcluir} onClick={() => { 
                    setId(params.id)
                    setOpenExc(true)
                 }}>Excluir</Button>
            )
        }
    ];


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpenEx(false);
        setOpenEd(false);
        setOpenExc(false)
    };

    return (
        <div className="principal">
            <Grid container direction="row" justify="center" md={12} sm={12}>
                <Grid container justify="center" md={6}>
                    <h1>Lista de Usuarios</h1>
                </Grid>
                <Grid container justify="flex-end" md={6}>
                    <Button className={classes.btnAdcionar} onClick={handleOpen}>Adicionar</Button>
                </Grid>

                <Grid item className="datagrid" md={12} sm={12}>
                    <DataGrid rows={users} columns={columns}  pageSize={15} disableColumnSelector={true} disableSelectionOnClick={true} components={{ Toolbar: GridToolbar, }}/>
                </Grid>
            </Grid>
            <Grid item className={classes.datgrid} md={12} sm={12} alignItems="center" justify="center">
                <Modal
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                >   
                    <Cadastrar className={classes.cadastrar} />
                </Modal>

                <Modal
                className={classes.modal}
                    open={openEx}
                    onClose={handleClose}
                >
                    <Exibir  id={id}/>
                </Modal>

                <Modal
                className={classes.modal}
                    open={openEd}
                    onClose={handleClose}
                >
                    <Editar  id={id}/>
                </Modal>

                <Modal
                className={classes.modal}
                    open={openExc}
                    onClose={handleClose}
                >
                    <Excluir  id={id}/>
                </Modal>
            </Grid>

        </div>
    )
}