const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'webmeeting-db',
  password: 'postgres',
  port: 5432,
});


const getUserById = (id) => {
  return new Promise(function(resolve, reject) {
    //const id = parseInt(request.params.id)
    pool.query(`SELECT * FROM usuario WHERE id = $1`, [id], (error, results) => {
      if (error) {
        reject(console.log("erro"))
      }
      console.log("aqui")
      resolve(results.rows);
    })
  }) 
}


const getUser = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM usuario ORDER BY nome ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }


  const postUser = (body) => {
    return new Promise(function(resolve, reject) {
      const { nome, email, telefone, cargo, departamento, perfil } = body
      pool.query('INSERT INTO usuario (nome, email, telefone, cargo, departamento, perfil) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING *', [nome, email, telefone, cargo, departamento, perfil], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Novo usuario adicionado: ${results.rows[0].nome}`)
      })
    })
  }


  const deleteUser = (id) => {
    return new Promise(function(resolve, reject) {
      pool.query('DELETE FROM usuario WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`usuario deletado com id: ${id}`)
      })
    })
  }

  const updateUser = (body) => {
    const { nome, email, telefone, cargo, departamento, perfil, id } = body
    return new Promise(function(resolve, reject) {
      pool.query(`UPDATE usuario SET nome = $1, email = $2, telefone = $3, cargo = $4, departamento = $5, perfil =$6 WHERE id = $7`,[nome, email, telefone, cargo, departamento, perfil, id], (error, results) => {
        if(error) {
          reject(error)
        }
        resolve('Usuario atualizado com sucesso')
      })
    })
  }
  
  module.exports = {
    getUserById,
    getUser,
    postUser,
    deleteUser,
    updateUser
  }