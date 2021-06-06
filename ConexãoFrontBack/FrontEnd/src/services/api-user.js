import api from "./api";


const pegarid = (id) => {
    return api.get(`/pegarid/${id}`)
}

const criar = (body) => {
    return api.post("/novo", body)
}


const listar = () => {
    return api.get("/listar")
}

const deletar = (id) => {
    return api.delete(`/deletar/${id}`)
}

const atualizar = (body) => {
    return api.put("/atualizar", body)
}
const apiUser = {
    pegarid,
    criar,
    listar,
    deletar,
    atualizar
}

export default apiUser;