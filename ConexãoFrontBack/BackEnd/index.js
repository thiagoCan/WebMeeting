const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

const model = require('./model')

app.use(cors()); //para aceitar requisição de outros domínios
app.use(express.json())

app.get('/pegarid/:id', (req, res) => {
  try {
    model.getUserById(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
  console.log("foi")
  }
  catch(e) { 
    console.log(e)
  }
})

app.get('/listar', (req, res) => {
  try {
  model.getUser()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })}
  catch(e) {
    console.log(e)
  }
})

app.post('/novo', (req, res) => {
  model.postUser(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/deletar/:id', (req, res) => {
  model.deleteUser(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.put('/atualizar', (req, res) => {
  model.updateUser(req.body)
  .then(response => {
    res.status(200).send(response);
    console.log("atualizado")
  })
  .catch(error => {
    res.status(500).send(error);
    console.log("nao atualizado")
  })
})




app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})