import apiUser from "../../services/api-user";

import { useState, useEffect } from "react";

import "./criar.css";


export default function Criar() {

    const [nome, setNome] = useState("");
    const [perfil, setPerfil] = useState("");
    const [li, setLi] = useState([]);

    var lista = []

    useEffect(() => {
        apiUser.listar()
        .then(res => {
            setLi(res.data);
            for(var k=0; k < li.length; k++) {
                lista.push(JSON.stringify(res.data[k]))
                console.log(lista)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    const Criar = (e) => {
        e.preventDefault();
        const body = {
            nome: nome,
            perfil: perfil
        }
        apiUser.criar(body)
            .then(res => {
                console.log(res)
                console.log("Usuario adicionado")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="principal">

            <form onSubmit={Criar}>
                <label htmlFor="nome">Nome </label>
                <input id="nome" required onChange={(e) => setNome(e.target.value)} />
                <br/><br/>
                <label htmlFor="pefil">Perfil </label>
                <input id="perfil" required onChange={(e) => setPerfil(e.target.value)} />
                <br/><br/>
                <input type="submit" placeholder="Enviar"/>
            </form>

            <textarea value={lista}/>
        </div>
    )
}