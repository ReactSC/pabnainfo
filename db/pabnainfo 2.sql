-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2020 at 07:55 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pabnainfo`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `label` varchar(40) NOT NULL,
  `avater` varchar(255) DEFAULT NULL,
  `thumb` varchar(255) DEFAULT NULL,
  `discription` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `label`, `avater`, `thumb`, `discription`) VALUES
(1, 'Doctor', NULL, 's', 'asfdgh,.trdtghdfgh//localhost/pabnainfo/api/view/categories.php\''),
(2, 'Developer', NULL, NULL, 'header(\'Access-Control-Allow-Origin: *\');');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `address` varchar(40) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `gender` varchar(5) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `open_time` int(21) NOT NULL DEFAULT current_timestamp(),
  `status` int(11) DEFAULT 0,
  `order_completed` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `address`, `city`, `gender`, `date_of_birth`, `phone`, `email`, `open_time`, `status`, `order_completed`) VALUES
(1, 'Sofiqul Islam', 'Tebunia', 'Pabna Sadar', 'Male', '2000-11-29', '01799008442', 'schoolwab@gmail.com', 45654434, 0, 0),
(2, 'Sofiqul Islam', 'Islam Ganti', 'Pabna Sadar', 'Male', '2020-03-17', '01799008442', 'schoolwab@gmail.com', 1519211809, 0, 0),
(3, 'Sofiqul Islam', 'Islam Ganti', 'Pabna Sadar', 'Male', '2020-03-17', '01799008442', 'schoolwab@gmail.com', 20200317, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `experiences`
--

CREATE TABLE `experiences` (
  `ex_id` int(15) NOT NULL,
  `ex_name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `experiences`
--

INSERT INTO `experiences` (`ex_id`, `ex_name`) VALUES
(1, 'Hart'),
(2, 'Brain');

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `url` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `name`, `url`) VALUES
(1, 'About', '/about'),
(2, 'FAQ', '/faq'),
(3, 'Contact', '/contact'),
(4, 'Worker', '/sp'),
(5, 'Ticket', '/ticket'),
(6, 'Dashboard', '/dashboard');

-- --------------------------------------------------------

--
-- Table structure for table `offices`
--

CREATE TABLE `offices` (
  `office_id` int(10) NOT NULL,
  `office_name` varchar(100) NOT NULL,
  `office_location` varchar(100) DEFAULT NULL,
  `office_open_time` time(6) DEFAULT NULL,
  `office_close_time` time(6) DEFAULT NULL,
  `office_offday` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `office_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `offices`
--

INSERT INTO `offices` (`office_id`, `office_name`, `office_location`, `office_open_time`, `office_close_time`, `office_offday`, `office_status`) VALUES
(1, 'Pabna Genarel Hospital', 'Pabna Sadar', '25:28:21.164000', '63:18:03.414000', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `spID` int(11) NOT NULL,
  `customerID` int(11) NOT NULL,
  `task` varchar(255) NOT NULL,
  `serial` int(11) NOT NULL,
  `time` date DEFAULT NULL,
  `status` varchar(11) DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `spID`, `customerID`, `task`, `serial`, `time`, `status`) VALUES
(1, 1, 1, 'Brain PRonlen', 0, '2020-03-11', 'pending'),
(2, 1, 2, 'Mantal', 0, '2020-03-26', 'pending'),
(3, 1, 1, 'Brain PRonlen', 0, '2020-03-11', 'pending'),
(4, 1, 2, 'Haga', 0, '2020-03-26', 'pending'),
(5, 1, 1, 'Korona', 0, '2020-03-28', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `service_providers`
--

CREATE TABLE `service_providers` (
  `id` int(15) NOT NULL,
  `name` varchar(40) NOT NULL,
  `about` varchar(5000) DEFAULT NULL,
  `category` varchar(40) NOT NULL,
  `sub_category` varchar(40) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `city` varchar(15) DEFAULT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `skills` varchar(225) DEFAULT NULL,
  `degree` varchar(100) DEFAULT NULL,
  `NID` int(20) DEFAULT NULL,
  `charge` int(15) DEFAULT 0,
  `avater` varchar(1000) DEFAULT NULL,
  `job_complete` int(15) DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `service_providers`
--

INSERT INTO `service_providers` (`id`, `name`, `about`, `category`, `sub_category`, `address`, `city`, `phone`, `email`, `skills`, `degree`, `NID`, `charge`, `avater`, `job_complete`, `status`) VALUES
(1, 'Sofiqul Islam', 'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.', 'Doctor', '', 'Pabna, Dhaka', 'Pabna', '01799008442', 'schoolwab@gmail.com', 'Happy', 'PHD', 56515661, 500, 'http://eop.pabnainfo.com/images/2.jpg', 0, 0),
(2, 'Md. Mithon Shaikh', 'I am Md. Mithon Shaikh', 'Developer', '', 'Ishwardi', 'Ishwardi', '0199854875', 'ri866942369@gmail.com', 'Phone', 'MBBS', 91155156, 250, 'sdf', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sp_experiences`
--

CREATE TABLE `sp_experiences` (
  `id` int(15) NOT NULL,
  `sp_id` int(15) NOT NULL,
  `ex_id` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sp_offices`
--

CREATE TABLE `sp_offices` (
  `id` int(11) NOT NULL,
  `sp_id` int(11) NOT NULL,
  `office_id` int(11) NOT NULL,
  `start_time` time(6) DEFAULT NULL,
  `close_time` time(6) DEFAULT NULL,
  `work_day` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `sub_cat_id` int(15) NOT NULL,
  `sub_cat_name` varchar(40) NOT NULL,
  `cat_id` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `role` varchar(50) DEFAULT NULL,
  `phone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `role`, `phone`) VALUES
(1, 'Sofiqul Islam', 'Admin', '01799008442'),
(2, 'Jubaer AHmad', 'Admin', '01788465');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experiences`
--
ALTER TABLE `experiences`
  ADD PRIMARY KEY (`ex_id`);

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offices`
--
ALTER TABLE `offices`
  ADD PRIMARY KEY (`office_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_providers`
--
ALTER TABLE `service_providers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sp_experiences`
--
ALTER TABLE `sp_experiences`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sp_offices`
--
ALTER TABLE `sp_offices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`sub_cat_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `experiences`
--
ALTER TABLE `experiences`
  MODIFY `ex_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `offices`
--
ALTER TABLE `offices`
  MODIFY `office_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `service_providers`
--
ALTER TABLE `service_providers`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sp_experiences`
--
ALTER TABLE `sp_experiences`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sp_offices`
--
ALTER TABLE `sp_offices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `sub_cat_id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
