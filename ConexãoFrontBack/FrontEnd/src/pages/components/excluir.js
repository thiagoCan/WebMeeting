import { useState, useEffect } from "react";
import { Button, Grid, Paper, makeStyles } from "@material-ui/core";
import apiUser from "../../services/api-user";


const useStyles = makeStyles({
    info: {
        backgroundColor: "#aaa",
        color: "#fff",
        borderRadius: 15,
        textAlign: "center"
    },
    btnSim: {
        backgroundColor: "red",
        width: "100%",
        color: "#fff",
        borderRadius: 15,
        '&:hover': {
            backgroundColor: "#aaa"
        }
    },
    btnNao: {
        backgroundColor: "blue",
        width: "100%",
        color: "#fff",
        borderRadius: 15,
        '&:hover': {
            backgroundColor: "#aaa"
        }
    }
})

export default function Excluir(props) {
    const classes = useStyles();
    const [nome, setNome] = useState("")

    useEffect(() => {
        apiUser.pegarid(props.id)
        .then(res => {
            setNome(res.data[0].nome)
        })
        .catch(err => console.log(err))
    },[])

    const Apaga = () => {
        apiUser.deletar(props.id)
        .then(res => {
            console.log(res)
            alert(`Usuário ${nome} deletado.`)
        })
        .catch(err => {
            alert(`Não foi possível excluir o usuário ${nome}\nErro: ${err}`)
        })
    }

    return (
        <div>
            <h1>
                <Grid container direction="row" justify="center" alignItems="center" md={12}>
                    <Grid justify="center" alignItems="center" md={12}>
                        <Paper className={classes.info}>Tem certeza que deseja excluir o usuário: {nome}</Paper>
                    </Grid>

                    <Grid container direction="row" justify="space-around" alignItems="center" md={12}>
                    <Grid md={3}>
                        <Button onClick={Apaga} className={classes.btnSim}>Excluir</Button>
                    </Grid>
                    <Grid md={3}>
                        <Button  className={classes.btnNao}>Cancelar</Button>
                    </Grid>
                    </Grid>
                </Grid>
            </h1>
        </div>
    )
}