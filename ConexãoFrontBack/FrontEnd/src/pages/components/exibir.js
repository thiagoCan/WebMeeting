import { useState, useEffect } from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import apiUser from "../../services/api-user";


const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: '#aaa',
        width: '100%',
        color: 'black',
        fontSize: 'x-large',
        padding: 15,
        margin: 15,
        borderRadius: 15,
        textAlign: "center"
    },
    paperInfo: {
        backgroundColor: '#aaa',
        width: '100%',
        color: 'black',
        fontSize: 'x-large',
        padding: 15,
        margin: 15,
        borderRadius: 15
    },
    btnEditar: {
        backgroundColor: 'blue',
        width: '100%',
        color: '#fff',
        fontSize: "large",
        padding: 15,
        borderRadius: 15,
        '&:hover': {
            backgroundColor: '#aaa'
        }

    },
    btnExcluir: {
        backgroundColor: 'red',
        width: '100%',
        color: '#fff',
        fontSize: "large",
        padding: 15,
        borderRadius: 15,
        '&:hover': {
            backgroundColor: '#aaa'
        }

    },
    btnVoltar: {
        backgroundColor: 'green',
        width: '100%',
        color: '#fff',
        fontSize: "large",
        padding: 15,
        borderRadius: 15,
        '&:hover': {
            backgroundColor: '#aaa'
        }

    }

}));

export default function Exibir(props) {
    const classes = useStyles();

    const [info, setInfo] = useState({});
    const [id, setId] = useState('');
    setId(props.id)

    useEffect(() => {
        apiUser.pegarid(id)
            .then(res => {
                console.log(res)
                setInfo(res.data[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Nome</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>{info.nome}</Paper>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Email</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>{info.email}</Paper>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Telefone</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>{info.telefone}</Paper>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Cargo</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>{info.cargo}</Paper>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Departamento</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>{info.departamento}</Paper>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Perfil</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>{info.perfil}</Paper>
                    </Grid>
                </Grid>

               {/* <Grid container direction="row" justify="space-evenly" alignItems="center" md={6}>

                    <Grid item md={2}>
                    <Button className={classes.btnVoltar}>Voltar</Button>
                    </Grid>
    </Grid> */}
            </Grid>

        </div>
    )
}