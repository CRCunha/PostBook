-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 05/11/2019 às 11:51
-- Versão do servidor: 10.4.8-MariaDB
-- Versão do PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `postbook`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `Livros`
--

CREATE TABLE `Livros` (
  `titulo` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `capa` varchar(255) NOT NULL DEFAULT 'https://www.chavenova.com/Content/images/misc/ino-image.png',
  `tag` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `Livros`
--

INSERT INTO `Livros` (`titulo`, `id`, `capa`, `tag`) VALUES
('Java Script & JQuery', 1, 'https://media.merixstudio.com/uploads/javascript-and-jquery-book-cover.png', ''),
('Domain-Driven Design', 2, 'https://images-na.ssl-images-amazon.com/images/I/51OWGtzQLLL.jpg', ''),
('Código Limpo', 4, 'https://vanjota.files.wordpress.com/2017/03/g5lzk0i.png?w=1400', ''),
('UX Design', 5, 'https://miro.medium.com/max/580/0*BjVyXoRHN0nDOe3I.jpg', ''),
(' A Lenda de Ruff Ghanor: O Garoto-Cabra', 12, 'https://images-na.ssl-images-amazon.com/images/I/510HhUtzd2L.jpg', ''),
('O Poder da Ação', 15, 'http://t3.gstatic.com/images?q=tbn:ANd9GcTOGQMV4hF4GW_mjVa9czgu4AecHAK6R5ugIjnN9Nub0qLeM3l6', ''),
('A sutil arte de ligar o foda-se', 16, 'http://statics.livrariacultura.net.br/products/capas_lg/310/46725310.jpg', ''),
('Algoritmos e lógica de programação', 17, 'https://images-na.ssl-images-amazon.com/images/I/51gsJ-vDj2L._SX343_BO1,204,203,200_.jpg', ''),
('Harry Potter E O Prisioneiro De Azkaban', 18, 'http://statics.livrariacultura.net.br/products/capas_lg/626/46583626.jpg', ''),
('Breves Respostas P Grandes Questões', 19, 'https://cdn.culturagenial.com/imagens/81bhihmdq4l-cke.jpg', ''),
('Atenção Plena', 20, 'https://cdn.culturagenial.com/imagens/livro-atencao-plena-mindfulness-mark-williams-4526334-cke.jpg', ''),
('F*deu Geral', 21, 'https://images-na.ssl-images-amazon.com/images/I/41iKfemXJVL.jpg', ''),
('POR QUE FAZEMOS O QUE FAZEMOS?', 22, 'https://statics.livrariacultura.net.br/products/capas_lg/096/46331096.jpg', ''),
('Direito Administrativo Descomplicado', 23, 'https://images-na.ssl-images-amazon.com/images/I/81ZQ8JEnYIL.jpg', ''),
('A Riqueza da Vida Simples', 24, 'http://www.gustavocerbasi.com.br/wp-content/uploads/2016/07/livro-1.jpg', ''),
('The Loney', 25, 'https://i.dailymail.co.uk/i/pix/2016/07/04/16/35F22A7000000578-3673870-image-a-17_1467645858506.jpg', ''),
('It', 29, 'https://images-na.ssl-images-amazon.com/images/I/71dIjJTeOSL.jpg', 'Terror');

-- --------------------------------------------------------

--
-- Estrutura para tabela `Posts`
--

CREATE TABLE `Posts` (
  `tag` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `texto` varchar(1000) NOT NULL,
  `data` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `Posts`
--

INSERT INTO `Posts` (`tag`, `id`, `titulo`, `texto`, `data`) VALUES
('admin', 28, 'Post de Admin', 'Este é um post de Admin', '2019-10-31'),
('book', 29, ' Post Book', 'Este é um post Book', '2019-10-31'),
('comment', 30, 'Comment', 'Este é um Comment', '2019-10-31'),
('other', 31, 'Other Post', 'Este é um post qualquer', '2019-10-31'),
('admin', 32, 'Post dia 1', 'Teste de data post dia 01', '2019-11-01'),
('other', 33, 'Profile', 'Criar Tela de profile', '2019-11-01'),
('comment', 34, 'Post dia 2', 'Teste de post do dia 2', '2019-11-02'),
('admin', 35, 'Grupos', 'Criar Card Grupos', '2019-11-02'),
('admin', 36, 'Delete', 'Criar função delete para posts e livros', '2019-11-03'),
('admin', 37, 'Login e Register', 'Fazer o front para o login e register', '2019-11-05'),
('other', 38, 'Rotas Prontas', 'Todas as Rotas com algum conteudo para mostrar!', '2019-11-05');

-- --------------------------------------------------------

--
-- Estrutura para tabela `Users`
--

CREATE TABLE `Users` (
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `avatar` varchar(1250) NOT NULL DEFAULT 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png',
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `Livros`
--
ALTER TABLE `Livros`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `Livros`
--
ALTER TABLE `Livros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de tabela `Posts`
--
ALTER TABLE `Posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de tabela `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
