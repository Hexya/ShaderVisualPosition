-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 05, 2018 at 06:46 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

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
(1, 110, 11, 1),
(7, 110, 18, 1),
(8, 110, 12, 1),
(9, 110, 10, 1),
(10, 110, 11, 0),
(11, 110, 11, 1),
(12, 110, 29, 1);

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
(38, 110, 'Hexya', 'Belgique', 'Liège', 'Liège', '50.6325574', '-122.41941550000001', '1530814719.jpg', '2018-07-05 18:18:39');

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
(1, 'admin', 'admin', ''),
(110, 'Hexya', 'db5498b36e1009f078144ff218de820e', '5b39f9efe1dda728722_tool_512x512.jpg'),
(112, 'Goten', '9f5a44a734ac9e43b5968d0f3b71d69b', '5b3b6224675adgoten.png'),
(113, 'Reerg', '9316c41c790de3ddc6934c36d5f5becb', '');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `liked_img`
--
ALTER TABLE `liked_img`
  MODIFY `li_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `shaders`
--
ALTER TABLE `shaders`
  MODIFY `sh_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
