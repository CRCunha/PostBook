-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 24-Out-2019 às 12:46
-- Versão do servidor: 10.4.6-MariaDB
-- versão do PHP: 7.1.31

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
-- Estrutura da tabela `Livros`
--

CREATE TABLE `Livros` (
  `titulo` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `capa` varchar(255) NOT NULL DEFAULT 'https://www.chavenova.com/Content/images/misc/ino-image.png'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `Livros`
--

INSERT INTO `Livros` (`titulo`, `id`, `capa`) VALUES
('Código Limpo', 4, 'https://vanjota.files.wordpress.com/2017/03/g5lzk0i.png?w=1400'),
('UX Design', 5, 'https://miro.medium.com/max/580/0*BjVyXoRHN0nDOe3I.jpg'),
('Java Script & JQuery', 7, 'https://media.merixstudio.com/uploads/javascript-and-jquery-book-cover.png'),
(' A Lenda de Ruff Ghanor: O Garoto-Cabra', 12, 'https://images-na.ssl-images-amazon.com/images/I/510HhUtzd2L.jpg'),
('Domain-Driven Design', 14, 'https://images-na.ssl-images-amazon.com/images/I/51OWGtzQLLL.jpg'),
('O Poder da Ação', 15, 'http://t3.gstatic.com/images?q=tbn:ANd9GcTOGQMV4hF4GW_mjVa9czgu4AecHAK6R5ugIjnN9Nub0qLeM3l6'),
('A sutil arte de ligar o foda-se', 16, 'http://statics.livrariacultura.net.br/products/capas_lg/310/46725310.jpg'),
('Algoritmos e lógica de programação', 17, 'https://images-na.ssl-images-amazon.com/images/I/51gsJ-vDj2L._SX343_BO1,204,203,200_.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `Livros`
--
ALTER TABLE `Livros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `Livros`
--
ALTER TABLE `Livros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
