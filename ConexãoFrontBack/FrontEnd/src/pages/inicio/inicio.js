import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Criar from "../usuario/criar";

import "./inicio.css";

export default function Inicio() {
    return (
        <Router>
        <div>
            <Grid
            className="grid"
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                md={3}
            >
                <Grid container direction="column" justify="space-between" alignItems="center" md={12} className="frame">
                    <Grid item direction="row" justify="space-between" alignItems="center">
                        <h3><i>IACIT</i></h3>
                    </Grid>
                    <Grid item direction="row" justify="space-between" alignItems="center">
                        <a>Cadastro de Usuário</a>
                    </Grid>
                    <Grid item direction="row" justify="space-between" alignItems="center">
                        <a>Cadastramento de Usuários</a>
                    </Grid>
                    <Grid item direction="row" justify="space-between" alignItems="center">
                        <a>Lista de Usuário</a>
                    </Grid>
                    <Grid item direction="row" justify="space-between" alignItems="center">
                        <a>Gerar ata de Reunião</a>
                    </Grid>
                    <Grid item direction="row" justify="space-between" alignItems="center">
                        <a>Adicionar Revisão de Ata</a>
                    </Grid>
                    <Grid item direction="row" justify="space-between" alignItems="center">
                        <a>Revisões de Ata</a>
                    </Grid>
                    <Grid item direction="row" justify="space-between" alignItems="center">
                        <a>Monitorar Ata de Reunião</a>
                    </Grid>
                    <hr/>

                    <Grid item direction="row" justify="space-between" alignItems="center">
                        <Link to="/cadastrar" > Log Out</Link>
                    </Grid>
                    
                </Grid>
            </Grid>
        </div>
        </Router>
    )
}