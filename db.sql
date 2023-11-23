-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: wepark
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `available`
--

DROP TABLE IF EXISTS `available`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `available` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` int NOT NULL,
  `vehiclestype_id` int NOT NULL,
  `id_place` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKavailable_IDplaces_idx` (`id_place`),
  KEY `FKavailable_IDvehiclestypes_idx` (`vehiclestype_id`),
  CONSTRAINT `FKavailable_IDplaces` FOREIGN KEY (`id_place`) REFERENCES `places` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKavailable_IDvehiclestypes` FOREIGN KEY (`vehiclestype_id`) REFERENCES `vehiclestypes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `available`
--

LOCK TABLES `available` WRITE;
/*!40000 ALTER TABLE `available` DISABLE KEYS */;
/*!40000 ALTER TABLE `available` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `places`
--

DROP TABLE IF EXISTS `places`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `places` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `location_text` varchar(125) NOT NULL,
  `location_cords` point NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `places`
--

LOCK TABLES `places` WRITE;
/*!40000 ALTER TABLE `places` DISABLE KEYS */;
/*!40000 ALTER TABLE `places` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `fullname` varchar(45) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `password` varchar(200) NOT NULL,
  `org_name` varchar(50) NOT NULL,
  `cbu` varchar(45) DEFAULT NULL,
  `img` varchar(55) DEFAULT NULL,
  `placeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `phonenumber_UNIQUE` (`phone`),
  UNIQUE KEY `cbu_UNIQUE` (`cbu`),
  UNIQUE KEY `img_UNIQUE` (`img`),
  KEY `FKusers_IDplaces_idx` (`placeId`),
  CONSTRAINT `FKusers_IDplaces` FOREIGN KEY (`placeId`) REFERENCES `places` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehiclestypes`
--

DROP TABLE IF EXISTS `vehiclestypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehiclestypes` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(220) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehiclestypes`
--

LOCK TABLES `vehiclestypes` WRITE;
/*!40000 ALTER TABLE `vehiclestypes` DISABLE KEYS */;
INSERT INTO `vehiclestypes` VALUES (1,'car','Medium or regular size vehicle'),(2,'motorbike','Small vehicle'),(3,'bike','Small vehicle'),(4,'pickup','Large and big vehicle');
/*!40000 ALTER TABLE `vehiclestypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'wepark'
--

--
-- Dumping routines for database 'wepark'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-22 15:45:00
