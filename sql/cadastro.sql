-- Base de dados

CREATE DATABASE cadastro;

--Estrutura da tabela `fornecedor`

CREATE TABLE `fornecedor` (
  `codigo_interno` varchar(255) DEFAULT NULL,
  `cnpj` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `fantasia` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `situacao` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) DEFAULT NULL,
  `logradouro` varchar(255) DEFAULT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `cep` varchar(255) DEFAULT NULL,
  `municipio` varchar(255) DEFAULT NULL,
  `uf` varchar(255) DEFAULT NULL,
  `natureza_juridica` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;