-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 25-Nov-2019 às 12:27
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
-- Estrutura da tabela `Donations`
--

CREATE TABLE `Donations` (
  `titulo` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL DEFAULT ' Anonymous',
  `estado` varchar(255) NOT NULL,
  `capa` varchar(2555) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `Donations`
--

INSERT INTO `Donations` (`titulo`, `numero`, `nome`, `estado`, `capa`, `id`) VALUES
('Código Limpo', 984694379, '\r\nAnonymous', 'Usado', 'http://statics.livrariacultura.net.br/products/capas_lg/223/2874223.jpg', 6),
('HTML 5 em Ação', 984694379, '\r\nAnonymous', 'Velho', 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575223994.jpg', 7),
('Abundância', 984319169, '\r\nAnonymous', 'Novo', 'https://images-na.ssl-images-amazon.com/images/I/51a7AgufuKL.jpg', 8),
('Algoritmos e lógica de programação', 984319169, '\r\nAnonymous', 'Usado', 'https://images-na.ssl-images-amazon.com/images/I/61nQMuYi8pL.jpg', 9),
('O Codificador LImpo', 984694379, '\r\nAnonymous', 'Novo', 'https://images-na.ssl-images-amazon.com/images/I/91Ac4mS5riL.jpg', 10),
('Microsoftw C# 2013', 984319169, '\r\nAnonymous', 'Usado', 'https://images-na.ssl-images-amazon.com/images/I/41Dcwjbrh4L.jpg', 11),
('Git e GitHub', 984694379, 'Cristian Cunha', 'Novo', 'https://cdn.shopify.com/s/files/1/0155/7645/products/git-github-featured_large.png?v=1416318040', 14),
('Direto ao Ponto', 948694379, 'Cristian Cunha', 'Velho', 'https://cdn.shopify.com/s/files/1/0155/7645/products/eBook-Direto-ao-Ponto_large.jpg?v=1464960251', 15);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Livros`
--

CREATE TABLE `Livros` (
  `titulo` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `capa` varchar(255) NOT NULL DEFAULT 'https://www.chavenova.com/Content/images/misc/ino-image.png',
  `tag` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `Livros`
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
('A Riqueza da Vida Simples', 24, 'http://www.gustavocerbasi.com.br/wp-content/uploads/2016/07/livro-1.jpg', ''),
('The Loney', 25, 'https://i.dailymail.co.uk/i/pix/2016/07/04/16/35F22A7000000578-3673870-image-a-17_1467645858506.jpg', ''),
('It', 29, 'https://images-na.ssl-images-amazon.com/images/I/71dIjJTeOSL.jpg', 'Terror'),
('Jogos Vorazes', 30, 'https://images-na.ssl-images-amazon.com/images/I/61zBhzjS4LL.jpg', 'Ficção'),
('Viagens de Gulliver', 31, 'https://img.wook.pt/images/as-viagens-de-gulliver-jonathan-swift/MXwxMDAxNzUyMXw1NjA1ODkxfDEzODM1MjMyMDAwMDA=/250x', 'Ficção'),
('Escândalos Privados ', 32, 'http://2.bp.blogspot.com/-kogMmM8_7ss/U5d97ReMtHI/AAAAAAAAT0Q/YCuwpa4whfM/s1600/Escandalos+privados.jpg', 'Romance'),
('Trilhas do Fazer', 36, 'https://images-na.ssl-images-amazon.com/images/I/41IfteH1VML.jpg', 'Ciências'),
('Não Nascemos Prontos', 37, 'https://images-na.ssl-images-amazon.com/images/I/41PNziCZmPL.jpg', 'Ciências'),
('Todas as Coisas Belas', 38, 'https://www.lelivross.com/wp-content/uploads/2019/08/Baixar-Livro-Todas-as-Coisas-Belas-Matthew-Quick-em-Pdf-Epub-e-Mobi-ou-Ler-Online-370x568.jpg', 'Romance'),
('A Sorte do Agora', 39, 'https://images-na.ssl-images-amazon.com/images/I/518j8F0ib-L._SX344_BO1,204,203,200_.jpg', 'Romance'),
('O Papai é Pop', 40, 'http://imagens.lelivros.love/2016/10/Baixar-Livro-O-Papai-e-Pop-Marcos-Piangers-em-PDF-ePub-e-Mobi-ou-ler-online.jpg', 'Ficção'),
('O Menino Malukinho', 41, 'http://imagens.lelivros.love/2016/09/Baixar-Livro-O-Menino-Maluquinho-Ziraldo-em-PDF-ePub-e-Mobi-ou-ler-online-370x551.jpg', 'Comédia'),
('Assassins Creed Renascença', 42, 'http://imagens.lelivros.love/2014/01/Download-Renascenca-Assassins-Creed-Vol-1-Oliver-Bowden-em-ePub-mobi-e-PDF-370x551.jpg', 'Ação'),
('Diablo A Orden', 43, 'https://img.ibxk.com.br/2019/01/07/07190438863348.jpg?w=1040', 'Ficção'),
('Em Chamas', 44, 'https://images-na.ssl-images-amazon.com/images/I/71qdfpDnomL.jpg', 'Terror'),
('Manual da Produção de Jogos Digitais', 45, 'https://images-na.ssl-images-amazon.com/images/I/41NM-9y73ZL._SX348_BO1,204,203,200_.jpg', 'Programação'),
('A Guerra dos Consoles', 46, 'https://img.ibxk.com.br/2019/01/07/07185926025347.jpg?w=1040', 'Programação'),
('Batalha do Apocalipse', 47, 'http://1.bp.blogspot.com/-SXtRumdDqV0/T1n9s8zmRhI/AAAAAAAACHA/6pkei9oUoBw/s1600/A+Batalha+do+Apocalipse.jpg', 'Ficção'),
('A Cabana', 48, 'https://images-na.ssl-images-amazon.com/images/I/91eXvRufnFL.jpg', 'Ficção'),
('Os Filhos do Tempo', 49, 'https://chaienesantosescritor.files.wordpress.com/2014/07/cropped-1078358_494222510671459_1813865214_n.jpg', 'Ficção'),
('O Código da Vinci', 50, 'https://http2.mlstatic.com/livros-de-ficco-o-codigo-da-vinci-dan-brown-frete-gratis-D_NQ_NP_980741-MLB28780915572_112018-F.jpg', 'Ficção'),
('O Ladrão de Raios', 51, 'https://http2.mlstatic.com/livros-ficco-mitologia-romances-biografias-D_NQ_NP_656814-MLB27912923456_082018-F.jpg', 'Ficção'),
('A Fada', 52, 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_7d82ff14740e56e9ec6fd0adae96ed69ddfe9f3e.jpg', 'Crônica'),
('Guerreiros da Tempestade', 53, 'https://statics.livrariacultura.net.br/products/capas_lg/142/46329142.jpg', 'Crônica'),
('O Imperador das Lâminas', 54, 'https://images-na.ssl-images-amazon.com/images/I/51tvYd3qs5L._SX331_BO1,204,203,200_.jpg', 'Crônica'),
('A Providência do Fogo', 55, 'https://image.isu.pub/170720143025-a930cf036346b20399ae41d210f7a1d5/jpg/page_1_thumb_large.jpg', 'Crônica'),
('O Cálice de Fogo ', 56, 'https://i.pinimg.com/originals/12/01/b3/1201b30bd2d1b6016b75a62a0717f7b3.png', 'Ficção'),
('Voo Fantasma', 57, 'https://http2.mlstatic.com/vo-fanstasma-6-livros-acosuspense7-livros-novos--D_NQ_NP_751304-MLB26105967444_102017-F.jpg', 'Ação'),
('O Aprendiz', 58, 'https://rotinadoleitor.com.br/wp-content/uploads/2018/08/10-livros-de-acao-e-aventura-que-voce-precisa-ler-5-202x300.jpg', 'Ficção'),
('O Nome do Vento', 59, 'https://rotinadoleitor.com.br/wp-content/uploads/2018/08/10-livros-de-acao-e-aventura-que-voce-precisa-ler-2-209x300.jpg', 'Ficção'),
('A Queda dos Reinos', 60, 'http://3.bp.blogspot.com/-AhDkLXd3_94/Ua_Crv7cjRI/AAAAAAAANZs/r21aR3JrgsU/s1600/A+queda+dos+reinos.jpg', 'Ficção'),
('O Mago de Batalha', 61, 'https://m.media-amazon.com/images/I/81FLEXiFOKL._AC_UL436_.jpg', 'Ficção'),
('Battlefil o Russo', 62, 'http://www.gamefm.com.br/wp-content/uploads/2012/07/the-russian.jpg', 'Ação'),
('Guerra Mundial Z', 63, 'https://rotinadoleitor.com.br/wp-content/uploads/2018/08/10-livros-de-acao-e-aventura-que-voce-precisa-ler-1-201x300.png', 'Ficção'),
('O Instituto', 64, 'http://imagens.lelivros.love/2019/09/baixar-livro-o-instituto-stephen-king-em-epub-mobi-pdf-ou-ler-online-174x270.jpg', 'Ficção'),
('Nada é por Acaso', 65, 'https://images-na.ssl-images-amazon.com/images/I/81woI2DhxNL.jpg', 'Romance'),
('O Ultimo dos Magos', 66, 'https://rotinadoleitor.com.br/wp-content/uploads/2018/08/10-livros-de-acao-e-aventura-que-voce-precisa-ler-4-199x300.jpg', 'Ficção'),
('O Varador de Almas', 67, 'http://redeglobo.globo.com/platb/files/2470/2014/08/O-Devorador-de-Almas.jpg', 'Ficção'),
('Pecado Sombrio', 69, 'https://images-na.ssl-images-amazon.com/images/I/51ezQMXuQOL.jpg', 'Romance'),
('The Summoning', 70, 'http://lojasaraiva.vteximg.com.br/arquivos/ids/652674/1004709857.jpg?v=636966503929330000', 'Ficção'),
('O TEOREMA KATHERINE', 71, 'https://www.intrinseca.com.br/upload/livros/O%20Teorema%20Katherine_g.jpg', 'Ficção'),
('REFÉM DA OBSESSÃO', 72, 'https://editoranovoconceito.com.br/wp-content/uploads/2019/06/9788581632391.jpg', 'Ficção'),
('harry potter ea criança amaldiçoada', 73, 'https://images-na.ssl-images-amazon.com/images/I/510y5gnHWaL._SX346_BO1,204,203,200_.jpg', 'Ficção'),
('a seleção', 75, 'https://img.wook.pt/images/a-selecao-kiera-cass/MXwxNjAxNjE3N3wxMTU1MzQwOXwxNDEzMjQxMjAwMDAw/250x', 'Romance'),
('o ultimo desejo ', 76, 'https://images-na.ssl-images-amazon.com/images/I/511dqSSiUCL.jpg', 'Ficção'),
('cai o pano', 77, 'https://www.lpm.com.br/livros/imagens/cai_o_pano_14x21_9788525432988_hd.jpg', 'Ficção'),
('assassinato no expresso do oriente  ', 78, 'http://statics.livrariacultura.net.br/products/capas_lg/260/42274260.jpg', 'Romance'),
('rose madder', 79, 'http://statics.livrariacultura.net.br/products/capas_lg/904/42150904.jpg', 'Terror'),
('iluminado', 80, 'https://images-na.ssl-images-amazon.com/images/I/51gewmYeKUL.jpg', 'Terror'),
('Abundância', 81, 'https://images-na.ssl-images-amazon.com/images/I/51a7AgufuKL.jpg', 'Programação'),
('o ultimo samurai', 83, 'https://img.wook.pt/images/o-ultimo-samurai-helen-dewitt/MXw0MTIwN3w3MTI3NHwxMzgzNTIzMjAwMDAw/250x', 'Ação'),
('alem da honra', 86, 'https://images-na.ssl-images-amazon.com/images/I/61eSPbt0aWL.jpg', 'Ação'),
('Código do Bushido', 87, 'https://images-na.ssl-images-amazon.com/images/I/41OyPQIfkxL.jpg', 'Ação'),
('As Crônicas de Gelo e Fogo', 88, 'http://imagens.lelivros.love/2013/02/Download-A-Guerra-dos-Tronos-George-R.R.-Martin-em-eupb-mobi-e-pdf.jpg', 'Ficção'),
('Adônis Irmãos da Máfia', 89, 'https://imagens.elivros.info/Erika-Martins/Baixar-Livro-Adonis-Irmaos-da-Mafia-Vol-1-Erika-Martins-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg', 'Ficção'),
('Um Crime Quase Perfeito ', 90, 'https://www.topleituras.com/livros/crime-quase-perfeito-ilustrado-romance-policial-literatura-portuguesa-livro-1-39af-capa.webp', 'Ficção'),
('Aprendendo Inteligência', 91, 'https://images-na.ssl-images-amazon.com/images/I/41La0s9KlhL.jpg', 'Ciências'),
('Orientação a Objetos e SOLID para Ninjas', 92, 'https://cdn.shopify.com/s/files/1/0155/7645/products/oo-solid-sumario-featured_large.png?v=1430310678', 'Programação'),
('Lógica de Programação', 93, 'https://cdn.shopify.com/s/files/1/0155/7645/products/programacao-featured_large.png?v=1411490523', 'Programação'),
('PHP e MySQL', 94, 'https://cdn.shopify.com/s/files/1/0155/7645/products/cover_large.jpg?v=1477073475', 'Programação'),
('GraphQL', 95, 'https://cdn.shopify.com/s/files/1/0155/7645/products/p_8cd7ee16-3e38-4583-94aa-2f9c21750802_large.jpg?v=1556308954', 'Programação'),
('Primeiros passos com Node.js', 96, 'https://cdn.shopify.com/s/files/1/0155/7645/products/A9gNBliLeLHKixKHk4vm7GHXPqyOGTLwmaxbQbpHd5A_large.jpg?v=1498158325', 'Programação'),
('APIs Node.js', 97, 'https://cdn.shopify.com/s/files/1/0155/7645/products/zGb75MbYhQ0_Rc954-y3OZOq9O169BSqY0WslUDTmBk_size_mode_3_size_1024x768_large.jpeg?v=1453497826', 'Programação'),
('Node.js', 98, 'https://cdn.shopify.com/s/files/1/0155/7645/products/node-ebook-atualizado_large.jpg?v=1516282095', 'Programação'),
('Ruby', 99, 'https://cdn.shopify.com/s/files/1/0155/7645/products/ruby-featured_large.png?v=1411567284', 'Programação'),
('Vue.js', 100, 'https://cdn.shopify.com/s/files/1/0155/7645/products/eBook-Vue_large.jpg?v=1492717370', 'Programação'),
('Progressive Web Apps', 101, 'https://cdn.shopify.com/s/files/1/0155/7645/products/aEqPKxA4VUIMcHNjYFHdKwfTqWB70NGgvn15jJrXlAM_large.jpg?v=1522973294', 'Programação'),
('https://cdn.shopify.com/s/files/1/0155/7645/products/EeWu4o4nvz9o71nSFnXAhPmu4BiMyGP7x5Pz0tJU3dk_large.jpg?v=1469752875', 102, 'https://cdn.shopify.com/s/files/1/0155/7645/products/EeWu4o4nvz9o71nSFnXAhPmu4BiMyGP7x5Pz0tJU3dk_large.jpg?v=1469752875', 'Ciências'),
('Gestão de Produtos', 103, 'https://cdn.shopify.com/s/files/1/0155/7645/products/eBook-Gestao-Produtos_c1f1bc3e-bfe9-4895-b1cd-bcb953c46760_large.jpg?v=1502143769', 'Ciências'),
('Ambientes com Docker', 104, 'https://cdn.shopify.com/s/files/1/0155/7645/products/docker-featured_large.png?v=1443938715', 'Programação'),
('Git e GitHub', 105, 'https://cdn.shopify.com/s/files/1/0155/7645/products/git-github-featured_large.png?v=1416318040', 'Programação');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Posts`
--

CREATE TABLE `Posts` (
  `tag` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `texto` varchar(1000) NOT NULL,
  `data` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `Posts`
--

INSERT INTO `Posts` (`tag`, `id`, `titulo`, `texto`, `data`) VALUES
('admin', 68, 'Book Donation', 'Sistema de Book Donation em funcionamento! ', '2019-11-13'),
('admin', 72, 'Book Donation', 'Excluir Doação', '2019-11-13'),
('admin', 73, 'Home Page', 'Home Page \"Finalizada\"', '2019-11-14'),
('admin', 74, 'Login', 'Fixar o Front do Login', '2019-11-14'),
('admin', 75, 'Perfil', 'Criar a page de Perfil', '2019-11-14'),
('admin', 76, 'Donations', 'Reformular Donations UI/UX', '2019-11-14'),
('admin', 77, 'registro ', 'arrumar o registro ', '2019-11-14');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Users`
--

CREATE TABLE `Users` (
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `avatar` varchar(1250) NOT NULL DEFAULT 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png',
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `Users`
--

INSERT INTO `Users` (`nome`, `email`, `senha`, `avatar`, `id`) VALUES
('Teste', 'teste@teste.com', 'teste', 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png', 9),
('Cristian Raffi', 'teste@teste', 'teste', 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png', 13),
('Sniper Leonel', 'sniperleonel@gmail.com', 'sniper', 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png', 14),
('Peil', 'peil@peil.com', 'peil', 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png', 15),
('Carinha lá', 'teste@teste', 'teste', 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png', 16),
('carolina', 'carolroluz@hotmail.com', 'amordaminhavida', 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png', 17),
('', '', '', 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png', 18),
('asdasd', 'asdasD@sadasd', 'sadasdasd', 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png', 19);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `Donations`
--
ALTER TABLE `Donations`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `Livros`
--
ALTER TABLE `Livros`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `Donations`
--
ALTER TABLE `Donations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `Livros`
--
ALTER TABLE `Livros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT de tabela `Posts`
--
ALTER TABLE `Posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de tabela `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
