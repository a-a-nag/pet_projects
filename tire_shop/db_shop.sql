-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Фев 26 2018 г., 12:20
-- Версия сервера: 5.6.21
-- Версия PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `db_shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
`cart_id` int(11) NOT NULL,
  `cart_id_products` int(11) NOT NULL,
  `cart_price` int(11) NOT NULL,
  `cart_count` int(11) NOT NULL,
  `cart_datetime` datetime NOT NULL,
  `cart_ip` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `cart`
--

INSERT INTO `cart` (`cart_id`, `cart_id_products`, `cart_price`, `cart_count`, `cart_datetime`, `cart_ip`) VALUES
(1, 1, 15000, 2, '2018-02-26 00:27:11', '127.0.0.1'),
(2, 2, 12000, 1, '2018-02-26 01:13:06', '127.0.0.1'),
(3, 3, 55000, 10, '2018-02-14 14:27:21', '127.0.0.2'),
(28, 5, 2965, 6, '2018-02-26 13:38:29', '::1'),
(29, 4, 13585, 3, '2018-02-26 13:38:31', '::1'),
(30, 3, 38288, 2, '2018-02-26 13:38:32', '::1');

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE IF NOT EXISTS `category` (
`id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `type`, `brand`) VALUES
(1, 'tire', 'Bridgestone'),
(2, 'tire', 'Continental'),
(3, 'tire', 'Nexen'),
(4, 'tire', 'Yokohama'),
(5, 'wiper', 'Alca'),
(6, 'wiper', 'Bosch'),
(7, 'wiper', 'Pilenga'),
(8, 'wiper', 'Unipoint'),
(13, 'battery', 'AFA'),
(14, 'battery', 'Bolk'),
(15, 'battery', 'Exide'),
(16, 'battery', 'Vita');

-- --------------------------------------------------------

--
-- Структура таблицы `table_products`
--

CREATE TABLE IF NOT EXISTS `table_products` (
`products_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `seo_words` text NOT NULL,
  `seo_description` text NOT NULL,
  `mini_description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `mini_features` text NOT NULL,
  `features` text NOT NULL,
  `datetime` datetime NOT NULL,
  `new` int(11) NOT NULL DEFAULT '0',
  `leader` int(11) NOT NULL DEFAULT '0',
  `sale` int(11) NOT NULL DEFAULT '0',
  `visible` int(11) NOT NULL DEFAULT '0',
  `count` int(11) NOT NULL DEFAULT '0',
  `type_tovara` varchar(255) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `vote` int(11) NOT NULL,
  `votes` float NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `table_products`
--

INSERT INTO `table_products` (`products_id`, `title`, `price`, `brand`, `seo_words`, `seo_description`, `mini_description`, `image`, `description`, `mini_features`, `features`, `datetime`, `new`, `leader`, `sale`, `visible`, `count`, `type_tovara`, `brand_id`, `vote`, `votes`) VALUES
(1, 'Шина Yokohama Geolandar I/T-S G073', 26297, 'Yokohama', '', '', 'Зимние шины Yokohama Geolandar I/T-S G073 созданы для полноприводных автомобилей 4х4, внедорожников и кроссоверов. Отличительная особенность данной модели от своих предшественниц Geolandar I/T G071 и Geolandar I/T G072 заключается в оптимизированных форме и пятне контакта.', '5837924.jpg', '', 'Диаметр, дюйм - 20\r\nСезонность - ЗИМА\r\nШипы - Нет\r\nИндекс скорости - Q\r\nВысота, % - 50\r\nШирина, мм - 285\r\nИндекс нагрузки - 112', '', '2018-02-01 15:27:21', 0, 0, 0, 1, 0, 'tire', 0, 1, 1),
(2, 'Yokohama PARADA SPEC X (PA02)', 18651, 'Yokohama', '', '', 'Летние шины Yokohama Parada Spec-X, отличающиеся агрессивным рисунком протектора, предназначены для мощных внедорожников - Chevy Tahoe, Hummer H2, Ford Expedition, Toyota Land Cruiser, Land Rover, Volvo XC-90 и других типично мужских автомобилей.С помощью Yokohama Parada Spec-X спортивно-утилитарным автомобилям можно придать исключительно респектабельный вид.', '5119967.jpg', '', 'Диаметр, дюйм - 20Сезонность - ЛЕТОИндекс скорости - VВысота, % - 45Ширина, мм - 295Индекс нагрузки - 114', '', '2018-02-01 15:50:34', 0, 0, 0, 1, 0, 'tire', 1, 1, 1),
(3, 'Бриджстоун 385/55R22.5 R168', 38288, 'Bridgestone', '', '', 'Выбирая грузовые шины Bridgestone R168 385/55R22.5 убедитесь в том, что размер 385/55R22.5 рекомендован к установке на ваш автомобиль. Разрешенные типоразмеры указаны в инструкции по эксплуатации вашего автомобиля.', '5837924.jpg', '', 'Ось - Прицепная\r\nДиаметр, дюйм - 22.5\r\nСезонность - ВСЕСЕЗОННАЯ\r\nИндекс скорости - K\r\nШирина, мм - 385\r\nИндекс нагрузки - 160', '', '2018-02-25 14:22:20', 0, 0, 0, 1, 0, 'tire', 1, 1, 1),
(4, 'Аккумулятор AFA 180 А/ч 680032 EN 1000', 13585, 'AFA', '', '', 'Аккумулятор AFA 180 А/ч 680032 EN 1000', '5668850.jpg', '', 'ПроизводительAFA\r\nГабариты, мм513x223x223\r\nТип крепленияВерхняя планка\r\nТип клеммT1\r\nЕмкость, А/ч180', '', '2018-02-26 08:17:21', 0, 0, 0, 1, 0, 'battery', 1, 1, 1),
(5, 'Bosch Aerotwin A 138 S', 2965, ' Bosch', '', '', 'The best solution for the winter season is the ICON beam wiper blade. By design, beam blades are not affected by snow and ice buildup. The bracketless design and tension springs help keep the blade flexible and provide superior wiping performance in all weather conditions.', '069954fa027.jpeg', '', 'Производитель:  Bosch Серия:  Aerotwin Спойлер:  Асимметричный Код потребителя:  A 138 S Альтернативное наименование:  A 138 ', '', '2018-02-07 00:26:19', 0, 0, 0, 1, 0, 'wiper', 0, 0, 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cart`
--
ALTER TABLE `cart`
 ADD PRIMARY KEY (`cart_id`);

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
 ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `table_products`
--
ALTER TABLE `table_products`
 ADD PRIMARY KEY (`products_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cart`
--
ALTER TABLE `cart`
MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT для таблицы `table_products`
--
ALTER TABLE `table_products`
MODIFY `products_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
