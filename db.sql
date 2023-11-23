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
  `org_name` varchar(50) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'tomymiron','tomymiron@gmail.com','tomas miron','1128797312','hashedPass',NULL,NULL,'...',NULL),(2,'mileraschellaa','mileraschella@gmail.com','milena raschella','','otherHashedPass',NULL,NULL,'profile.img',NULL),(3,'pepito123','pepito123@gmail.com','pepito rodriguez','12345678','$2a$10$z4jKeS8KFub3jtPK6fZZ7O28sS1mQmrr.EQ247zwsLA9OCFttGVpa',NULL,NULL,'112320231000.jpg',NULL);
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
/*!50003 DROP PROCEDURE IF EXISTS `new_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_user`(
	in new_username varchar(45),
    in new_email varchar(50),
    in new_fullname varchar(45),
    in new_phone varchar(45),
    in new_password varchar(200),
    in new_orgName varchar(50),
    in new_cbu varchar(45),
    in new_img varchar(55),
    in new_placeName varchar(45),
    in new_locationText varchar(125),
    in new_locationCords POINT
)
BEGIN
	DECLARE placeId INT;

	if(new_placeName = null or new_placeName = "") then
		insert into users (username, email, fullname, phone, password, org_name, cbu, img, placeId)
		values(new_username, new_email, new_fullname, new_phone, new_password, null, null, new_img, null);
	else
		insert into places (name, location_text, location_cords) values (new_placeName, new_locationText, new_locationCords);
    	SET placeId = LAST_INSERT_ID();
        
        insert into users (username, email, fullname, phone, password, org_name, cbu, img, placeId)
		values(new_username, new_email, new_fullname, new_phone, new_password, new_orgName, new_cbu, new_img, placeId);
    end if;
    
    
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-23 20:01:51
