-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2020 at 12:53 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `survey`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_table`
--

CREATE TABLE `admin_table` (
  `admin_id` int(20) NOT NULL,
  `admin_name` varchar(40) NOT NULL,
  `admin_password` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_table`
--

INSERT INTO `admin_table` (`admin_id`, `admin_name`, `admin_password`) VALUES
(44, 'xyz', '123'),
(45, 'abc', '345');

-- --------------------------------------------------------

--
-- Table structure for table `question_table`
--

CREATE TABLE `question_table` (
  `id` int(20) NOT NULL,
  `question1` varchar(80) NOT NULL,
  `question2` varchar(80) NOT NULL,
  `question3` varchar(80) NOT NULL,
  `question4` varchar(80) NOT NULL,
  `question5` varchar(80) NOT NULL,
  `question6` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question_table`
--

INSERT INTO `question_table` (`id`, `question1`, `question2`, `question3`, `question4`, `question5`, `question6`) VALUES
(1, 'Overall, how satisfied or dissatisfied were you with the amount of courses avail', 'How satisfied or dissatisfied were you with the content of the course?', 'How satisfied or dissatisfied were you with the online interaction you had with ', 'How satisfied/dissatisfied were you with the responsiveness of the platform ?', 'How satisfied or dissatisfied were you with the video quality of the course?', 'How satisfied or dissatisfied were you with the online interaction you had with ');

-- --------------------------------------------------------

--
-- Table structure for table `survey_table`
--

CREATE TABLE `survey_table` (
  `input_id` int(30) NOT NULL,
  `user_id` int(30) NOT NULL,
  `question1` int(10) NOT NULL,
  `question2` int(10) NOT NULL,
  `question3` int(10) NOT NULL,
  `question4` int(10) NOT NULL,
  `question5` int(10) NOT NULL,
  `question6` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `survey_table`
--

INSERT INTO `survey_table` (`input_id`, `user_id`, `question1`, `question2`, `question3`, `question4`, `question5`, `question6`) VALUES
(66, 123, 3, 3, 2, 4, 5, 4),
(67, 124, 4, 3, 2, 5, 4, 3),
(68, 125, 4, 2, 5, 2, 3, 4),
(69, 123, 2, 3, 1, 2, 4, 5),
(70, 123, 2, 3, 1, 2, 4, 5),
(71, 123, 2, 3, 1, 2, 4, 5),
(72, 123, 2, 3, 1, 2, 4, 5),
(73, 124, 2, 3, 1, 2, 4, 5),
(74, 124, 2, 3, 4, 4, 3, 3),
(75, 124, 2, 3, 4, 4, 4, 4),
(76, 124, 2, 3, 4, 4, 4, 4),
(77, 123, 2, 3, 1, 2, 4, 5),
(78, 123, 2, 3, 1, 2, 4, 5),
(79, 123, 2, 3, 1, 2, 4, 5),
(80, 124, 2, 3, 4, 4, 3, 3),
(81, 124, 2, 3, 4, 4, 3, 3),
(83, 124, 1, 0, 0, 0, 0, 0),
(84, 124, 1, 0, 0, 0, 0, 0),
(85, 123, 2, 3, 1, 2, 4, 5),
(86, 123, 2, 3, 1, 2, 4, 5),
(87, 123, 3, 3, 2, 4, 5, 4),
(96, 123, 3, 3, 2, 4, 5, 4),
(98, 123, 3, 3, 2, 4, 5, 4),
(100, 123, 3, 3, 2, 4, 5, 4),
(104, 123, 3, 3, 2, 4, 5, 4),
(105, 123, 3, 3, 2, 4, 5, 4),
(106, 123, 3, 3, 2, 4, 5, 4),
(107, 123, 3, 3, 2, 4, 5, 4),
(108, 123, 3, 3, 2, 4, 5, 4),
(109, 123, 3, 3, 2, 4, 5, 4),
(110, 123, 3, 3, 2, 4, 5, 4),
(112, 123, 3, 3, 2, 4, 5, 4);

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

CREATE TABLE `user_table` (
  `user_id` int(30) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`user_id`, `username`, `password`) VALUES
(123, 'john', 'john123'),
(124, 'smith', 'smith124'),
(125, 'ram', 'ram125');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_table`
--
ALTER TABLE `admin_table`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `question_table`
--
ALTER TABLE `question_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey_table`
--
ALTER TABLE `survey_table`
  ADD PRIMARY KEY (`input_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_table`
--
ALTER TABLE `admin_table`
  MODIFY `admin_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `question_table`
--
ALTER TABLE `question_table`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `survey_table`
--
ALTER TABLE `survey_table`
  MODIFY `input_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `user_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `survey_table`
--
ALTER TABLE `survey_table`
  ADD CONSTRAINT `survey_table_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_table` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
