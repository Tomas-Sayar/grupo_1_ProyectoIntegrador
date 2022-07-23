-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-07-2022 a las 07:22:26
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `carrot`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `brand` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `brand`) VALUES
(1, 'olibo'),
(2, 'vrink'),
(3, 'god bless you');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(1, 'new'),
(2, 'in-sale'),
(3, 'featured');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `image` varchar(200) NOT NULL,
  `category_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `discount`, `description`, `image`, `category_id`, `type_id`, `brand_id`) VALUES
(3, 'Mix Clásico Con Maní - 200 gr', '286', 13, 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque', 'frutosSecos/mix-frutos-secos-con-mani.jpg', 1, 2, 3),
(4, 'Mix Clásico Con Maní - 200 gr', '286', 13, 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque', 'frutosSecos/mix-frutos-secos-con-mani.jpg', 1, 2, 3),
(5, 'Mix Clásico Con Maní - 200 gr', '286', 13, 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoquemagnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum soci', 'frutosSecos/mix-frutos-secos-con-mani.jpg', 1, 2, 3),
(6, 'Mix Clásico Con Maní - 200 gr', '286', 13, 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque', 'frutosSecos/mix-frutos-secos-con-mani.jpg', 1, 2, 3),
(7, 'Mix Clásico Con Maní - 200 gr', '286', 13, 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque', 'frutosSecos/mix-frutos-secos-con-mani.jpg', 1, 2, 3),
(8, 'Mix Clásico Con Maní - 200 gr', '286', 13, 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque', 'frutosSecos/mix-frutos-secos-con-mani.jpg', 1, 2, 3),
(9, 'Mix Clásico Con Maní - 200 gr', '286', 13, 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque', 'frutosSecos/mix-frutos-secos-con-mani.jpg', 1, 2, 3),
(10, 'Mix Clásico Con Maní - 200 gr', '286', 13, 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque', 'frutosSecos/mix-frutos-secos-con-mani.jpg', 1, 2, 3),
(16, 'Tomas', '0', 123, 'ae1e12321312', 'products-1658553571208-category2.jpg', 2, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typeofusers`
--

CREATE TABLE `typeofusers` (
  `id` int(11) NOT NULL,
  `type` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `typeofusers`
--

INSERT INTO `typeofusers` (`id`, `type`) VALUES
(1, 'administrator'),
(2, 'mayorista'),
(3, 'minorista');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `type` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `types`
--

INSERT INTO `types` (`id`, `type`) VALUES
(1, 'leches'),
(2, 'cereales'),
(3, 'frutos-secos'),
(4, 'granolas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(75) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `adress` varchar(200) NOT NULL,
  `password` varchar(30) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `typeOfUser_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `dateOfBirth`, `adress`, `password`, `image`, `typeOfUser_id`) VALUES
(1, 'lucas', 'lulu', 'lulu@gmail.com', '2022-06-27', '', '$2a$10$nZKC2oexFdnTnXp7mV1Bt.W', 'users/default.jpg', 2),
(2, 'lucas', 'lulu', 'lulu@gmail.com', '2022-06-27', '', '$2a$10$nZKC2oexFdnTnXp7mV1Bt.W', 'users/default.jpg', 2),
(3, 'lucas', 'lulu', 'lulu@gmail.com', '2022-06-27', '', '$2a$10$nZKC2oexFdnTnXp7mV1Bt.W', 'users/default.jpg', 2),
(4, 'lucas', 'lulu', 'lulu@gmail.com', '2022-06-27', '', '$2a$10$nZKC2oexFdnTnXp7mV1Bt.W', 'users/default.jpg', 2),
(5, 'lucas', 'lulu', 'lulu@gmail.com', '2022-06-27', '', '$2a$10$nZKC2oexFdnTnXp7mV1Bt.W', 'users/default.jpg', 2),
(6, 'lucas', 'lulu', 'lulu@gmail.com', '2022-06-27', '', '$2a$10$nZKC2oexFdnTnXp7mV1Bt.W', 'users/default.jpg', 2),
(7, 'lucas', 'lulu', 'lulu@gmail.com', '2022-06-27', '', '$2a$10$nZKC2oexFdnTnXp7mV1Bt.W', 'users/default.jpg', 2),
(8, 'lucas', 'lulu', 'lulu@gmail.com', '2022-06-27', '', '$2a$10$nZKC2oexFdnTnXp7mV1Bt.W', 'users/default.jpg', 2),
(9, 'Tomas Sayar', 'Tommy', 'lautaro.t.sayar@gmail.com', '2022-07-26', '', '12345678', NULL, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `typeofusers`
--
ALTER TABLE `typeofusers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `typeofusers`
--
ALTER TABLE `typeofusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
