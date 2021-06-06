import react, { useState, useEffect } from "react";
import { Button, Grid, Input, makeStyles, Paper, Radio } from "@material-ui/core";
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
        //fontSize: 'x-large',
        //padding: 15,
        //margin: 15,
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

    },
    inputForm: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 15,
        fontSize: 25
    },
    radios: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    buttonFormEnv: {
        backgroundColor: 'blue',
        color: '#fff',
        borderRadius: 15,
        padding: 10,
        fontSize: '20px',
        cursor: 'pointer'
    },
    buttonFormLim: {
        backgroundColor: 'red',
        color: '#fff',
        borderRadius: 15,
        padding: 10,
        fontSize: '20px',
        cursor: 'pointer'
    },
    radios: {
        borderRadius: 15,
        padding: 10,
        backgroundColor: "#fff",
        fontSize: "large"
    }

}));


export default function Cadastrar(props) {
    const classes = useStyles();


    const [nome, SetNome] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [cargo, setCargo] = useState("");
    const [dep, setDep] = useState("");
    const [perfil, setPerfil] = useState("");



    var body = {
        nome: nome,
        email: email,
        telefone: tel,
        cargo: cargo,
        departamento: dep,
        perfil: perfil
    }

    const handleSubmit = (e) => {
        //e.preventDefault()
        apiUser.criar(body)
            .then(res => {
                console.log(res)
                alert(`Usuário adicionado: ${nome}`)
            })
            .catch(err => {
                console.log(err)
                alert(`Erro: ${err}`)
            })
    }

    const handleChange = (event) => {
        setPerfil(event.target.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Nome</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>
                            <Input required className={classes.inputForm} variant="outlined" placeholder="Nome" fullWidth={true} onChange={(e) => SetNome(e.target.value)} disableUnderline={true}/>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Email</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>
                            <Input required className={classes.inputForm} variant="outlined" placeholder="Email" fullWidth={true} onChange={(e) => setEmail(e.target.value)} disableUnderline={true}/>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Telefone</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>
                            <Input required className={classes.inputForm} variant="outlined" placeholder="Telefone" fullWidth={true} onChange={(e) => setTel(e.target.value)} disableUnderline={true}/>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Cargo</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>
                            <Input required className={classes.inputForm} variant="outlined" placeholder="Cargo" fullWidth={true} onChange={(e) => setCargo(e.target.value)} disableUnderline={true}/>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Departamento</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>
                            <Input required className={classes.inputForm} variant="outlined" placeholder="Departamento" fullWidth={true} onChange={(e) => setDep(e.target.value)} disableUnderline={true}/>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="space-between" alignItems="center" md={7}>
                    <Grid md={3}>
                        <Paper className={classes.paper}>Perfil</Paper>
                    </Grid>
                    <Grid md={8}>
                        <Paper className={classes.paperInfo} elevation={5}>
                            
                        <Grid container direction="row" justify="space-around" alignItems="center" md={12} >
                                <Grid container direction="row" justify="space-around" alignItems="center"  className={classes.radios}>
                                <Grid md={4}>
                                    <Radio
                                        className={classes.radio}
                                        checked={perfil === 'USU'}
                                        onChange={handleChange}
                                        value="USU"
                                        color="primary"
                                    />
                                    Usuario
                                </Grid>
                                <Grid md={4} >
                                    <Radio
                                        className={classes.radio}
                                        checked={perfil === 'GER'}
                                        onChange={handleChange}
                                        value="GER"
                                        color="primary"
                                    />
                                    Gerente
                                </Grid>
                                <Grid md={4} >
                                    <Radio
                                        className={classes.radio}
                                        checked={perfil === 'ADM'}
                                        onChange={handleChange}
                                        value="ADM"
                                        color="primary"
                                    />
                                    Administrador
                                </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container justify="space-around" md={12}>
                        <Grid md={2} className={classes.aaa}>
                            <Input type="submit" required className={classes.buttonFormEnv} variant="filled" placeholder="Cadastar" fullWidth={true} disableUnderline={true} />
                        </Grid>
                        <Grid md={2}>
                            <Input type="reset" required className={classes.buttonFormLim} variant="filled" placeholder="Limpar" fullWidth={true} disableUnderline={true} />
                        </Grid>

                    </Grid>
            </Grid>
            </form>

        </div>
    )
}