import { useState } from "react";
import { Grid, Input, makeStyles, Radio } from "@material-ui/core";
import "./cadastrar.css";
import apiUser from "../../services/api-user";


const useStyles = makeStyles({
    divForm: {
        backgroundColor: '#aaa',
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
    inputForm: {
        backgroundColor: '#fff',
        //margin: 10,
        //padding: 10,
        borderRadius: 5,
        //fontSize: 25
    },
    radios: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    aaa:{
        cursor: 'pointer'
    }
});
export default function Cadastrar() {

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
        e.preventDefault()
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

            <div className={classes.divForm}>
                <form onSubmit={handleSubmit}>
                    <Grid alignItems="center" justify="center" md={12}>
                        <Grid container direction="row" justify="space-around" alignItems="center" md={12}>
                            <Grid item md={5}>
                                <Input required className={classes.inputForm} variant="outlined" placeholder="Nome" fullWidth={true} onChange={(e) => SetNome(e.target.value)} />
                                <br />
                            </Grid>

                            <Grid item md={5}>
                                <Input required className={classes.inputForm} variant="outlined" placeholder="Email" fullWidth={true} onChange={(e) => setEmail(e.target.value)} />
                                <br />
                            </Grid>
                        </Grid>

                        <Grid container direction="row" justify="space-around" alignItems="center" md={12} >
                            <Grid item md={5}>
                                <Input required className={classes.inputForm} variant="outlined" placeholder="Telefone" fullWidth={true} onChange={(e) => setTel(e.target.value)} />
                                <br />
                            </Grid>

                            <Grid item md={5}>
                                <Input required className={classes.inputForm} variant="outlined" placeholder="Cargo" fullWidth={true} onChange={(e) => setCargo(e.target.value)} />
                                <br />
                            </Grid>
                        </Grid>


                        <Grid container direction="row" justify="space-around" alignItems="center" md={12}>
                            <Grid item md={5}>
                                <Input required className={classes.inputForm} variant="outlined" placeholder="Departamento" fullWidth={true} onChange={(e) => setDep(e.target.value)} />
                                <br />
                            </Grid>

                            <Grid container direction="row" justify="space-around" alignItems="center" md={5} >
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

                </form>
            </div>

        </div>
    )
}