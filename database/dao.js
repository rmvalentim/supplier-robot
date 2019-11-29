const connection = require('./db');

const store = async (fornecedor) => {
    try {
    //connection.connect();
    
    connection.query({
        sql: 'INSERT INTO fornecedor VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        timeout: 40000, 
      },
      [0,
        fornecedor.cnpj,
        fornecedor.nome,
        fornecedor.fantasia,
        fornecedor.telefone,
        fornecedor.situacao,
        fornecedor.bairro,
        fornecedor.logradouro,
        fornecedor.numero,
        fornecedor.cep,
        fornecedor.municipio,
        fornecedor.uf,
        fornecedor.natureza_juridica,
        fornecedor.status,
        fornecedor.tipo,
        fornecedor.complemento,
        fornecedor.email]
    );
    
    //connection.end();
    } catch (err) {
        console.log(err);
    }
}

module.exports = store;