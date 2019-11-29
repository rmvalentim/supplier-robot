const api = require('../api/axios');
const store = require('../database/dao');

const getFornecedor = async (cnpj) => {
    try {        
        const { data } = await api.get(cnpj);
        
        const fornecedor = {
                cnpj: data.cnpj,
                nome: data.nome,
                fantasia: data.fantasia,
                telefone: data.telefone,
                situacao: data.situacao,
                bairro: data.bairro,
                logradouro: data.logradouro,
                numero: data.numero,
                cep: data.cep,
                municipio: data.municipio,
                uf: data.uf,
                natureza_juridica: data.natureza_juridica,
                status: data.status,
                tipo: data.tipo,
                complemento: data.complemento,
                email: data.email};

        await store(fornecedor);
    } catch(err) {
        console.log(err);
    } finally {
        console.log('Fornecedor cadastrado com sucesso!');
    }
}

module.exports = getFornecedor;