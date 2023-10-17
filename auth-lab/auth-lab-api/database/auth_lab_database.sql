CREATE DATABASE  IF NOT EXISTS `auth_lab_database` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `auth_lab_database`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: auth_lab_database
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Lavazza Crema E Aroma Whole Bean Coffee Blend',19.49,'No matter how you take your coffee, Lavazza has a blend and preparation to perfectly fit into your coffee ritual. Four generations of the Lavazza family have dedicated over 125 years to sourcing the best blends of coffee beans from all over the world to bring you an unmistakable taste and aroma that is uniquely Lavazza. Our Crema e Aroma whole bean coffee blend is no exception. A mix of Arabica varieties from Central and South America and African Robusta coffees create an intense, smooth medium roast. You’ll taste the mellow earthiness with every well-balanced sip. This blend is best used with an espresso machine or moka pot but also suitable with drip coffee maker and French press. Enjoy a premium experience where every small moment can be savored.'),(2,'Anker Soundcore Bluetooth Speaker',49.99,'Incredible Sound Loved by 20 Million+ People. Breathtaking stereo sound with deep bass is delivered with exceptional clarity and zero distortion by two high-sensitivity drivers and a patented bass port. Anker’s exclusive, long-life battery technology provides 24 hours of sublime music. Bluetooth 5.0 ensures instant pairing and maintains a strong connection up to 66 ft. This Bluetooth speaker has an in-house tuned digital signal processor that analyzes low frequencies to intensify the song’s bass in real-time.'),(3,'Gel Pens, 5 Pieces, 0.5mm Japanese Black Ink Pens Fine Point Smooth Writing Pens',14.99,'Are you looking for a pen that put you in a good mood? Are you looking for a pen for a reward? Are you looking for a pen as a gift? UIXJODO cute pen series is your best choice!'),(4,'Queen Size Sheet Set, 4 Piece Set, Hotel Luxury Bed Sheets',39.99,'If you’re looking for very soft sheets you have found them! They’re breathable, cool and super silky soft. The comfort of these sheets will have you coming back! They’re softer than egyptian cotton and organic cotton sheets! Best for any room in your house - bedroom, guest room, kids room, RV, vacation home. Great gift idea for men and women, Moms and Dads, Valentine’s - Mother’s - Father’s Day and Christmas. 2 pillow cases and a flat sheet and fitted sheet. Flat Sheet (102”x 90”) Fitted Sheet (80”x 60”) 2 Pillow Cases (20” x 30”).'),(5,'Flat Plug Power Bar with USB C, TESSAN 5 Feet Flat Extension Cord Indoor with 8 Multiple Outlets and 3 USB (1 USB C)',30.99,'3 side design that makes it easier to make the plugs not cover any outlet, and 8 AC outlets with 1.9 inches space in between each. Larger spacing makes it easier to use for all kinds of equipment. The compact design saves more space, suitable for the home, office and dorm room. TESSAN power strip flat plug could be easily hidden in behind furniture, bed and refrigerator, saving outlet space. The 5 foot flat cable is thinner than the standard round power bar to run under the carpet, which can keep unsightly cords hidden.'),(6,'NYX Professional Makeup, Epic Ink Liner, Liquid Eyeliner, Waterproof, Matte finish - Black',12.79,'Get the perfect long-lasting cat eye look with NYX Professional makeup Epic Ink eyeliner. Our ultra-precise tip is flexible and easy to use. Every stroke is unbelievably fluid for a defined finish. Control the thickness of your lines by pressing down just a touch. Fine and natural, broad and bold the look is always up to you. Complete your look with our full range of NYX Professional Makeup eye makeup products from eyeshadow palettes to mascara, eyeliners, concealers, setting sprays, and eyebrow products.'),(7,'Listerine Fresh Burst Antiseptic Mouthwash, 1L',5.47,'Protect your mouth from germs with Listerine Fresh Burst Antiseptic Mouthwash. The antiseptic mouthwash fights plaque, gingivitis, and bad breath. This product comes in a 1-litre bottle of antiseptics mouthwash in Fresh Burst flavour. Contains essential oils Menthol (mint), Thymol (thyme), and Eucalyptol (eucalyptus) to kill up to 99.9% of germs to prevent gingivitis, reduce plaque, and freshen breath. The refreshing flavour leaves your whole mouth feeling clean.'),(8,'The Legend of Zelda™: Tears of the Kingdom – Nintendo Switch',89.99,'An epic adventure across the land and skies of Hyrule awaits in the Legend of Zelda™: Tears of the Kingdom game for the Nintendo Switch™ system. The adventure is yours to create in a world fueled by your imagination. In this sequel to The Legend of Zelda: Breath of the Wild, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?'),(9,'Xbox Wireless Controller for Xbox Series X|S, Xbox One, and Windows Devices – Carbon Black',71.94,'Experience the modernized design of the Xbox Wireless Controller – Carbon Black, featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay. Stay on target with a hybrid D-pad and textured grip on the triggers, bumpers, and back case. Seamlessly capture and share content such as screenshots, recordings, and more with the new Share button. Use the Xbox Accessories app to remap buttons and create custom controller profiles for your favorite games. Includes Xbox Wireless and Bluetooth technology for wireless gaming on supported consoles, Windows 10 PCs, Android phones, and tablets.'),(10,'The Alchemist, Paperback, Deckle Edge, April 15 2014',21.99,'A special 25th anniversary edition of the extraordinary international bestseller, including a new Foreword by Paulo Coelho. Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations. Paulo Coelho’s masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago’s journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life’s path, and, most importantly, to follow our dreams.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `start_time` datetime(6) NOT NULL,
  `extended_time` datetime(6) DEFAULT NULL,
  `expiry_time` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` binary(60) NOT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('anna',0x243262243130244439463376685466424652374A745056344358756165334D4D6B4651752F504C4B6D4B776A586E73445431594F4D49543768722E65,'manager','Anna Brown'),('catherine',0x243262243130247334696D3047426E67734A4E4F6A326739334D4F57654B614670456A444E4F4E487A2F4E6A6A6D79545853537439664753482F7232,'customer','Catherine Dubois'),('emma',0x24326224313024617953464133543851575A6967656437396F3248386531785A4543534254696E74616E6C52796B6844667A422F2E47433472764965,'customer','Emma Page');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
