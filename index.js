const getFornecedor = require('./api/fornecedorService');
const input = require('./database/input');

setInterval(async () => {
  await getFornecedor(next());
}, 70000);

const next = () => {
  return input.shift();
}


