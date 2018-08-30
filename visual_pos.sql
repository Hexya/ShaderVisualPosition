-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 25, 2018 at 01:22 PM
-- Server version: 5.7.21
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `visual_pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `com_id` int(11) NOT NULL,
  `usr_id` int(11) NOT NULL,
  `usr_name` varchar(255) NOT NULL,
  `sh_id` int(11) NOT NULL DEFAULT '0',
  `com_value` varchar(255) NOT NULL,
  `com_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`com_id`, `usr_id`, `usr_name`, `sh_id`, `com_value`, `com_date`) VALUES
(1, 12, 'hexya', 24, 'hola chica', '2018-07-04'),
(38, 118, 'Vegita', 41, 'pink', '2018-08-24'),
(43, 112, 'Gotenks', 45, 'Nice picture', '2018-08-24'),
(44, 115, 'Frieza', 43, 'I like this dark color !', '2018-08-24'),
(46, 115, 'Frieza', 45, 'So bad..', '2018-08-24'),
(47, 115, 'Frieza', 38, 'So dark jaja', '2018-08-24'),
(48, 115, 'Frieza', 18, 'Yeah !', '2018-08-24'),
(49, 119, 'Bardock', 42, 'Blood for brave !', '2018-08-24');

-- --------------------------------------------------------

--
-- Table structure for table `liked_img`
--

CREATE TABLE `liked_img` (
  `li_id` int(11) NOT NULL,
  `li_usr_id` int(11) NOT NULL,
  `li_img_id` int(11) NOT NULL,
  `li_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `liked_img`
--

INSERT INTO `liked_img` (`li_id`, `li_usr_id`, `li_img_id`, `li_status`) VALUES
(8, 110, 12, 1),
(9, 110, 10, 1),
(12, 110, 29, 1),
(13, 110, 36, 0),
(21, 110, 38, 1),
(29, 110, 35, 0),
(30, 110, 28, 0),
(31, 110, 26, 0),
(32, 110, 24, 1),
(33, 112, 43, 1),
(34, 112, 35, 1),
(35, 118, 45, 0),
(36, 114, 45, 1),
(37, 114, 43, 1),
(38, 112, 45, 1),
(39, 112, 42, 0),
(40, 115, 45, 0),
(41, 115, 43, 1),
(42, 115, 42, 1),
(43, 115, 36, 1),
(44, 115, 35, 1),
(45, 115, 24, 1),
(46, 115, 18, 1),
(47, 119, 45, 1),
(48, 119, 42, 1);

-- --------------------------------------------------------

--
-- Table structure for table `shaders`
--

CREATE TABLE `shaders` (
  `sh_id` int(11) NOT NULL,
  `usr_id` int(11) NOT NULL,
  `usr_name` varchar(255) NOT NULL,
  `sh_country` varchar(255) NOT NULL,
  `sh_state` varchar(255) NOT NULL,
  `sh_city` varchar(255) NOT NULL,
  `sh_latitude` varchar(255) NOT NULL,
  `sh_longitude` varchar(255) NOT NULL,
  `sh_media` varchar(255) NOT NULL,
  `sh_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shaders`
--

INSERT INTO `shaders` (`sh_id`, `usr_id`, `usr_name`, `sh_country`, `sh_state`, `sh_city`, `sh_latitude`, `sh_longitude`, `sh_media`, `sh_date`) VALUES
(18, 110, 'Hexya', 'France', 'Paris', 'Paris', '48.8763', '2.3183', '1530711000.jpg', '2018-07-04 13:30:00'),
(24, 110, 'Hexya', 'France', 'Val d\'Oise', 'Taverny', '49.0254', '2.2169', '1530778444.jpg', '2018-07-05 08:14:04'),
(26, 110, 'Hexya', 'France', 'Hauts-de-Seine', 'Châtillon', '48.8024', '2.2935', '1530801148.jpg', '2018-07-05 14:32:28'),
(28, 110, 'Hexya', 'France', 'Garonne', 'Bordeaux', '44.837789', '-0.57918', '1530801811.jpg', '2018-07-05 14:43:31'),
(32, 110, 'Hexya', 'Fance', 'Paris', 'Drancy', '117', '200', '1530814259.jpg', '2018-07-05 18:10:59'),
(33, 110, 'Hexya', 'France', 'Paris', 'Saint Denis', '48.9333', '2.3667', '1530814332.jpg', '2018-07-05 18:12:12'),
(34, 110, 'Hexya', 'States', 'Californie', 'Las Vegas', '36.1699412', '-115.13982959999998', '1530814371.jpg', '2018-07-05 18:12:51'),
(35, 110, 'Hexya', 'France', 'Garonne\r\n', 'Bordeaux', '44.837789', '2.287592000000018', '1530814419.jpg', '2018-07-05 18:13:39'),
(36, 110, 'Hexya', 'States', 'San Francisco', 'Californie', '37.7749295', '-122.41941550000001', '1530814592.jpg', '2018-07-05 18:16:32'),
(38, 110, 'Hexya', 'Belgique', 'Liège', 'Liège', '50.6325574', '-122.41941550000001', '1530814719.jpg', '2018-07-05 18:18:39'),
(40, 114, 'Bulma', 'France', 'Seine-Saint-Denis', 'Épinay-sur-Seine', '48.9535', '2.3151', '1535016568.jpg', '2018-08-23 09:29:28'),
(41, 112, 'Gotenks', 'France', 'Seine-Saint-Denis', 'Épinay-sur-Seine', '48.9535', '2.3151', '1535016738.jpg', '2018-08-23 09:32:18'),
(42, 112, 'Gotenks', 'France', 'Seine-Saint-Denis', 'Épinay-sur-Seine', '48.9535', '2.3151', '1535016794.jpg', '2018-08-23 09:33:14'),
(43, 112, 'Gotenks', 'France', 'Seine-Saint-Denis', 'Épinay-sur-Seine', '48.9535', '2.3151', '1535016850.jpg', '2018-08-23 09:34:10'),
(45, 112, 'Gotenks', 'France', 'Seine-Saint-Denis', 'Épinay-sur-Seine', '48.9535', '2.3151', '1535016932.jpg', '2018-08-23 09:35:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `media` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `media`) VALUES
(110, 'Hexya', 'db5498b36e1009f078144ff218de820e', '5b39f9efe1dda728722_tool_512x512.jpg'),
(112, 'Gotenks', '9f5a44a734ac9e43b5968d0f3b71d69b', '5b3b6224675adgoten.png'),
(114, 'Bulma', '9f5a44a734ac9e43b5968d0f3b71d69b', '5b71f225da10cbulma019.jpg'),
(115, 'Frieza', '9f5a44a734ac9e43b5968d0f3b71d69b', '5b7ea3a7e5420Frieza.jpg'),
(116, 'Beerus', '9f5a44a734ac9e43b5968d0f3b71d69b', '5b7ea3c59f705Beerus.jpg'),
(117, 'Gohan', '9f5a44a734ac9e43b5968d0f3b71d69b', '5b7ea3d95590eGohan.png'),
(118, 'Vegita', '9f5a44a734ac9e43b5968d0f3b71d69b', '5b7ea3f4c8ebdVegita.png'),
(119, 'Bardock', '9f5a44a734ac9e43b5968d0f3b71d69b', '5b7ea40803a5bBardock.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`com_id`);

--
-- Indexes for table `liked_img`
--
ALTER TABLE `liked_img`
  ADD PRIMARY KEY (`li_id`);

--
-- Indexes for table `shaders`
--
ALTER TABLE `shaders`
  ADD PRIMARY KEY (`sh_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `com_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `liked_img`
--
ALTER TABLE `liked_img`
  MODIFY `li_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `shaders`
--
ALTER TABLE `shaders`
  MODIFY `sh_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
