-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: agencia
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `id_usua` int NOT NULL,
  PRIMARY KEY (`id_usua`),
  CONSTRAINT `administrador_FK` FOREIGN KEY (`id_usua`) REFERENCES `usuario` (`id_usua`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `aeropuerto`
--

DROP TABLE IF EXISTS `aeropuerto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aeropuerto` (
  `id_aero` int NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_ciud` int NOT NULL,
  `cod_iata` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id_aero`),
  UNIQUE KEY `aeropuerto_un` (`cod_iata`),
  KEY `aeropuerto_FK` (`id_ciud`),
  CONSTRAINT `aeropuerto_FK` FOREIGN KEY (`id_ciud`) REFERENCES `ciudad` (`id_ciud`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `agente`
--

DROP TABLE IF EXISTS `agente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agente` (
  `id_usua` int NOT NULL,
  PRIMARY KEY (`id_usua`),
  CONSTRAINT `agente_FK` FOREIGN KEY (`id_usua`) REFERENCES `usuario` (`id_usua`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `alojamiento`
--

DROP TABLE IF EXISTS `alojamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alojamiento` (
  `id_prod` int NOT NULL,
  `cod_aloj` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Codigo de alojamiento: ''HO'' hotel, ''HS'' hostal, ''AL'' albergue, ''AP'' apartamento',
  `num_camas` int NOT NULL,
  `num_aseos` int DEFAULT NULL,
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `id_ciud` int NOT NULL,
  PRIMARY KEY (`id_prod`),
  KEY `alojamiento_FK` (`id_ciud`),
  CONSTRAINT `alojamiento_FK` FOREIGN KEY (`id_ciud`) REFERENCES `ciudad` (`id_ciud`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `alojamiento_FK_1` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `autobus`
--

DROP TABLE IF EXISTS `autobus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autobus` (
  `id_prod` int NOT NULL,
  `fecha` datetime NOT NULL,
  `duracion` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `num_asi_tur` int NOT NULL,
  `num_asi_buss` int NOT NULL DEFAULT '0',
  `num_asi_prim` int NOT NULL DEFAULT '0',
  `porc_buss` float NOT NULL DEFAULT '0',
  `porc_prim` float NOT NULL DEFAULT '0',
  `ocup_asi_tur` int NOT NULL DEFAULT '0',
  `ocup_asi_buss` int NOT NULL DEFAULT '0',
  `ocup_asi_prim` int NOT NULL DEFAULT '0',
  `esta_salida` int NOT NULL,
  `esta_llegad` int NOT NULL,
  `id_prov` int NOT NULL,
  PRIMARY KEY (`id_prod`),
  KEY `autobus_FK_1` (`esta_salida`),
  KEY `autobus_FK_2` (`esta_llegad`),
  KEY `autobus_FK_3` (`id_prov`),
  CONSTRAINT `autobus_FK` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `autobus_FK_1` FOREIGN KEY (`esta_salida`) REFERENCES `estacionautobus` (`id_esau`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `autobus_FK_2` FOREIGN KEY (`esta_llegad`) REFERENCES `estacionautobus` (`id_esau`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `autobus_FK_3` FOREIGN KEY (`id_prov`) REFERENCES `proveedor` (`id_prov`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ciudad`
--

DROP TABLE IF EXISTS `ciudad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudad` (
  `id_ciud` int NOT NULL,
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pais` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id_ciud`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `id_usua` int NOT NULL,
  PRIMARY KEY (`id_usua`),
  CONSTRAINT `cliente_FK` FOREIGN KEY (`id_usua`) REFERENCES `usuario` (`id_usua`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `crucero`
--

DROP TABLE IF EXISTS `crucero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crucero` (
  `id_cruc` int NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `descripcion` varchar(80) NOT NULL,
  `id_prov` int NOT NULL,
  `bandera` varchar(20) NOT NULL,
  PRIMARY KEY (`id_cruc`),
  KEY `crucero_FK` (`id_prov`),
  CONSTRAINT `crucero_FK` FOREIGN KEY (`id_prov`) REFERENCES `proveedor` (`id_prov`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `crucerocamarote`
--

DROP TABLE IF EXISTS `crucerocamarote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crucerocamarote` (
  `id_prod` int NOT NULL,
  `id_cruc` int NOT NULL,
  `tipo_camarote` varchar(20) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `num_camas` int NOT NULL,
  `num_aseos` int NOT NULL,
  PRIMARY KEY (`id_prod`),
  KEY `crucerocamarote_FK` (`id_cruc`),
  CONSTRAINT `crucerocamarote_FK` FOREIGN KEY (`id_cruc`) REFERENCES `crucero` (`id_cruc`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `crucerocamarote_FK_1` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `crucerorecorrido`
--

DROP TABLE IF EXISTS `crucerorecorrido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crucerorecorrido` (
  `id_cruc` int NOT NULL,
  `id_puer` int NOT NULL,
  `num_orden` int NOT NULL,
  `llegada` time DEFAULT NULL,
  `salida` time DEFAULT NULL,
  PRIMARY KEY (`id_cruc`,`num_orden`),
  KEY `crucerorecorrido_FK_1` (`id_puer`),
  CONSTRAINT `crucerorecorrido_FK` FOREIGN KEY (`id_cruc`) REFERENCES `crucero` (`id_cruc`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `crucerorecorrido_FK_1` FOREIGN KEY (`id_puer`) REFERENCES `puerto` (`id_puer`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `estacionautobus`
--

DROP TABLE IF EXISTS `estacionautobus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estacionautobus` (
  `id_esau` int NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_ciud` int NOT NULL,
  PRIMARY KEY (`id_esau`),
  KEY `estacionautobus_FK` (`id_ciud`),
  CONSTRAINT `estacionautobus_FK` FOREIGN KEY (`id_ciud`) REFERENCES `ciudad` (`id_ciud`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `estaciontren`
--

DROP TABLE IF EXISTS `estaciontren`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estaciontren` (
  `id_estr` int NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_ciud` int NOT NULL,
  PRIMARY KEY (`id_estr`),
  KEY `estaciontren_FK` (`id_ciud`),
  CONSTRAINT `estaciontren_FK` FOREIGN KEY (`id_ciud`) REFERENCES `ciudad` (`id_ciud`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lineapedido`
--

DROP TABLE IF EXISTS `lineapedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lineapedido` (
  `id_pedi` int NOT NULL,
  `id_prod` int NOT NULL,
  `importe` float NOT NULL,
  `linea` int NOT NULL,
  `unidades` int NOT NULL,
  `categoria` varchar(1) DEFAULT NULL COMMENT 'null: turista o defecto, ''B'': bussiness, ''P'': primera',
  PRIMARY KEY (`id_pedi`,`linea`),
  KEY `lineapedido_FK_1` (`id_prod`),
  CONSTRAINT `lineapedido_FK` FOREIGN KEY (`id_pedi`) REFERENCES `pedido` (`id_pedi`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lineapedido_FK_1` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mensaje`
--

DROP TABLE IF EXISTS `mensaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensaje` (
  `id_publ` int NOT NULL,
  `texto` varchar(120) NOT NULL,
  `id_usua` int NOT NULL,
  `id_mens` int NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id_mens`),
  KEY `mensaje_FK` (`id_publ`),
  KEY `mensaje_FK_1` (`id_usua`),
  CONSTRAINT `mensaje_FK` FOREIGN KEY (`id_publ`) REFERENCES `publicacion` (`id_publ`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mensaje_FK_1` FOREIGN KEY (`id_usua`) REFERENCES `usuario` (`id_usua`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `oferta`
--

DROP TABLE IF EXISTS `oferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta` (
  `id_ofer` int NOT NULL,
  `id_prod` int NOT NULL,
  `fecha_desde` date NOT NULL,
  `fecha_hasta` date NOT NULL,
  `descuento` float NOT NULL,
  PRIMARY KEY (`id_ofer`),
  KEY `oferta_FK` (`id_prod`),
  CONSTRAINT `oferta_FK` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `oficinarent`
--

DROP TABLE IF EXISTS `oficinarent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oficinarent` (
  `id_ofre` int NOT NULL,
  `nombre` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_ciud` int NOT NULL,
  PRIMARY KEY (`id_ofre`),
  KEY `oficinarent_FK` (`id_ciud`),
  CONSTRAINT `oficinarent_FK` FOREIGN KEY (`id_ciud`) REFERENCES `ciudad` (`id_ciud`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id_pedi` int NOT NULL,
  `id_usua` int NOT NULL,
  `estadoPedido` varchar(1) NOT NULL DEFAULT 'P' COMMENT 'P: pendiente de pago, C: comprado, D: devuelto, X: cancelado',
  `fechaMovimiento` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_pedi`),
  KEY `pedido_FK` (`id_usua`),
  CONSTRAINT `pedido_FK` FOREIGN KEY (`id_usua`) REFERENCES `cliente` (`id_usua`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `pedidousuarios`
--

DROP TABLE IF EXISTS `pedidousuarios`;
/*!50001 DROP VIEW IF EXISTS `pedidousuarios`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `pedidousuarios` AS SELECT 
 1 AS `id_usua`,
 1 AS `email`,
 1 AS `id_pedi`,
 1 AS `estadoPedido`,
 1 AS `fechaMovimiento`,
 1 AS `id_prod`,
 1 AS `importe`,
 1 AS `linea`,
 1 AS `unidades`,
 1 AS `categoria`,
 1 AS `precio_unitario`,
 1 AS `tipo`,
 1 AS `descr`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id_prod` int NOT NULL,
  `precio_unitario` float NOT NULL,
  `uds_disponibles` int NOT NULL,
  `uds_ocup` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_prod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedor` (
  `id_prov` int NOT NULL,
  `nombre` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sede` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id_prov`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `publicacion`
--

DROP TABLE IF EXISTS `publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicacion` (
  `id_publ` int NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `texto` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_usua` int NOT NULL,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id_publ`),
  KEY `publicacion_FK` (`id_usua`),
  CONSTRAINT `publicacion_FK` FOREIGN KEY (`id_usua`) REFERENCES `usuario` (`id_usua`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `puerto`
--

DROP TABLE IF EXISTS `puerto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `puerto` (
  `id_puer` int NOT NULL,
  `nombre` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id_ciud` int NOT NULL,
  PRIMARY KEY (`id_puer`),
  KEY `puerto_FK` (`id_ciud`),
  CONSTRAINT `puerto_FK` FOREIGN KEY (`id_ciud`) REFERENCES `ciudad` (`id_ciud`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resenya`
--

DROP TABLE IF EXISTS `resenya`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resenya` (
  `id_prod` int NOT NULL,
  `texto` varchar(120) NOT NULL,
  `puntuacion` int NOT NULL,
  `id_usua` int NOT NULL,
  PRIMARY KEY (`id_prod`,`id_usua`),
  KEY `resenya_FK_1` (`id_usua`),
  CONSTRAINT `resenya_FK` FOREIGN KEY (`id_prod`) REFERENCES `alojamiento` (`id_prod`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `resenya_FK_1` FOREIGN KEY (`id_usua`) REFERENCES `cliente` (`id_usua`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `secuencias`
--

DROP TABLE IF EXISTS `secuencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `secuencias` (
  `nombre_id` varchar(20) NOT NULL,
  `sequ_id` bigint NOT NULL,
  UNIQUE KEY `nombre_id` (`nombre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tokens` (
  `id_usua` int NOT NULL,
  `token` varchar(100) DEFAULT NULL,
  `fecha_expira` datetime DEFAULT NULL,
  KEY `tokens_FK` (`id_usua`),
  CONSTRAINT `tokens_FK` FOREIGN KEY (`id_usua`) REFERENCES `usuario` (`id_usua`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tren`
--

DROP TABLE IF EXISTS `tren`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tren` (
  `id_prod` int NOT NULL,
  `fecha` datetime NOT NULL,
  `duracion` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `num_asi_tur` int NOT NULL,
  `num_asi_buss` int NOT NULL DEFAULT '0',
  `num_asi_prim` int NOT NULL DEFAULT '0',
  `porc_buss` float NOT NULL DEFAULT '0',
  `porc_prim` float NOT NULL DEFAULT '0',
  `ocup_asi_tur` int NOT NULL DEFAULT '0',
  `ocup_asi_buss` int NOT NULL DEFAULT '0',
  `ocup_asi_prim` int NOT NULL DEFAULT '0',
  `esta_salida` int NOT NULL,
  `esta_llegad` int NOT NULL,
  `id_prov` int NOT NULL,
  PRIMARY KEY (`id_prod`),
  KEY `tren_FK_1` (`esta_salida`),
  KEY `tren_FK_2` (`esta_llegad`),
  KEY `tren_FK_3` (`id_prov`),
  CONSTRAINT `tren_FK` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tren_FK_1` FOREIGN KEY (`esta_salida`) REFERENCES `estaciontren` (`id_estr`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tren_FK_2` FOREIGN KEY (`esta_llegad`) REFERENCES `estaciontren` (`id_estr`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tren_FK_3` FOREIGN KEY (`id_prov`) REFERENCES `proveedor` (`id_prov`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usua` int NOT NULL,
  `nif` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `apellido1` varchar(20) DEFAULT NULL,
  `apellido2` varchar(20) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_usua`),
  UNIQUE KEY `usuario_un` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `usuariocomple`
--

DROP TABLE IF EXISTS `usuariocomple`;
/*!50001 DROP VIEW IF EXISTS `usuariocomple`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `usuariocomple` AS SELECT 
 1 AS `id_usua`,
 1 AS `nif`,
 1 AS `nombre`,
 1 AS `apellido1`,
 1 AS `apellido2`,
 1 AS `email`,
 1 AS `password`,
 1 AS `direccion`,
 1 AS `rol`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `vehiculoalq`
--

DROP TABLE IF EXISTS `vehiculoalq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehiculoalq` (
  `id_prod` int NOT NULL,
  `num_plazas` int NOT NULL,
  `num_puertas` int NOT NULL,
  `num_maletas` int NOT NULL,
  `tipo_cambio` varchar(10) NOT NULL,
  `tipo_vehic` varchar(20) NOT NULL,
  `modelo` varchar(20) NOT NULL,
  `km_incluidos` int NOT NULL DEFAULT '400',
  `tari_km_extra` float NOT NULL DEFAULT '0',
  `hora_ini_base` time NOT NULL,
  `hora_fin_base` time NOT NULL,
  `tari_ini_dif` float NOT NULL DEFAULT '0',
  `tari_fin_dif` float NOT NULL DEFAULT '0',
  `edad_minima` int NOT NULL DEFAULT '25',
  `tari_edad_dif` float NOT NULL DEFAULT '0',
  `tari_ofic_dev_dif` float NOT NULL DEFAULT '0',
  `ofic_recogida` int NOT NULL,
  `ofic_devoluci` int NOT NULL,
  `id_prov` int NOT NULL,
  PRIMARY KEY (`id_prod`),
  KEY `vehiculoalq_FK_1` (`ofic_recogida`),
  KEY `vehiculoalq_FK_2` (`ofic_devoluci`),
  KEY `vehiculoalq_FK_3` (`id_prov`),
  CONSTRAINT `vehiculoalq_FK` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vehiculoalq_FK_1` FOREIGN KEY (`ofic_recogida`) REFERENCES `oficinarent` (`id_ofre`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vehiculoalq_FK_2` FOREIGN KEY (`ofic_devoluci`) REFERENCES `oficinarent` (`id_ofre`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vehiculoalq_FK_3` FOREIGN KEY (`id_prov`) REFERENCES `proveedor` (`id_prov`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vuelo`
--

DROP TABLE IF EXISTS `vuelo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vuelo` (
  `id_prod` int NOT NULL,
  `fecha` datetime NOT NULL,
  `duracion` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Formato ''HH:MM''',
  `num_asi_tur` int NOT NULL,
  `num_asi_buss` int NOT NULL DEFAULT '0',
  `num_asi_prim` int NOT NULL DEFAULT '0',
  `porc_buss` float NOT NULL DEFAULT '0',
  `porc_prim` float NOT NULL DEFAULT '0',
  `ocup_asi_tur` int NOT NULL DEFAULT '0',
  `ocup_asi_buss` int NOT NULL DEFAULT '0',
  `ocup_asi_prim` int NOT NULL DEFAULT '0',
  `aero_salida` int NOT NULL,
  `aero_llegad` int NOT NULL,
  `id_prov` int NOT NULL,
  PRIMARY KEY (`id_prod`),
  KEY `vuelo_FK_1` (`aero_salida`),
  KEY `vuelo_FK_2` (`aero_llegad`),
  KEY `vuelo_FK_3` (`id_prov`),
  CONSTRAINT `vuelo_FK` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id_prod`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vuelo_FK_1` FOREIGN KEY (`aero_salida`) REFERENCES `aeropuerto` (`id_aero`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vuelo_FK_2` FOREIGN KEY (`aero_llegad`) REFERENCES `aeropuerto` (`id_aero`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vuelo_FK_3` FOREIGN KEY (`id_prov`) REFERENCES `proveedor` (`id_prov`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Final view structure for view `pedidousuarios`
--

/*!50001 DROP VIEW IF EXISTS `pedidousuarios`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`guillermo`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `pedidousuarios` AS select `u`.`id_usua` AS `id_usua`,`u`.`email` AS `email`,`p`.`id_pedi` AS `id_pedi`,`p`.`estadoPedido` AS `estadoPedido`,`p`.`fechaMovimiento` AS `fechaMovimiento`,`l`.`id_prod` AS `id_prod`,`l`.`importe` AS `importe`,`l`.`linea` AS `linea`,`l`.`unidades` AS `unidades`,`l`.`categoria` AS `categoria`,`p2`.`precio_unitario` AS `precio_unitario`,`aux`.`tipo` AS `tipo`,`aux`.`descr` AS `descr` from ((((`usuario` `u` join `pedido` `p`) join `lineapedido` `l`) join `producto` `p2`) join (select 'V' AS `tipo`,`v`.`id_prod` AS `id_prod`,concat(concat(concat(concat(concat('Vuelo de ',`c`.`nombre`),' a '),`c2`.`nombre`),' - '),convert(date_format(`v`.`fecha`,'%d/%m/%Y - %H:%i') using utf8mb4)) AS `descr` from ((((`vuelo` `v` join `aeropuerto` `a3`) join `ciudad` `c`) join `aeropuerto` `a4`) join `ciudad` `c2`) where ((`a3`.`id_aero` = `v`.`aero_salida`) and (`a4`.`id_aero` = `v`.`aero_llegad`) and (`c`.`id_ciud` = `a3`.`id_ciud`) and (`c2`.`id_ciud` = `a4`.`id_ciud`)) union select 'A' AS `tipo`,`a`.`id_prod` AS `id_prod`,concat(concat(`a`.`nombre`,' en '),`c`.`nombre`) AS `concat(concat(a.nombre, ' en '), c.nombre)` from (`alojamiento` `a` join `ciudad` `c`) where (`c`.`id_ciud` = `a`.`id_ciud`) union select 'T' AS `tipo`,`t`.`id_prod` AS `id_prod`,concat(concat(concat(concat(concat('Tren de ',`c`.`nombre`),' a '),`c2`.`nombre`),' - '),convert(date_format(`t`.`fecha`,'%d/%m/%Y - %H:%i') using utf8mb4)) AS `descr` from ((((`tren` `t` join `estaciontren` `e`) join `ciudad` `c`) join `estaciontren` `e2`) join `ciudad` `c2`) where ((`e`.`id_estr` = `t`.`esta_salida`) and (`e2`.`id_estr` = `t`.`esta_llegad`) and (`c`.`id_ciud` = `e`.`id_ciud`) and (`c2`.`id_ciud` = `e2`.`id_ciud`)) union select 'B' AS `tipo`,`b`.`id_prod` AS `id_prod`,concat(concat(concat(concat(concat('Bus de ',`c`.`nombre`),' a '),`c2`.`nombre`),' - '),convert(date_format(`b`.`fecha`,'%d/%m/%Y - %H:%i') using utf8mb4)) AS `descr` from ((((`autobus` `b` join `estacionautobus` `e3`) join `ciudad` `c`) join `estacionautobus` `e4`) join `ciudad` `c2`) where ((`e3`.`id_esau` = `b`.`esta_salida`) and (`e4`.`id_esau` = `b`.`esta_llegad`) and (`c`.`id_ciud` = `e3`.`id_ciud`) and (`c2`.`id_ciud` = `e4`.`id_ciud`))) `aux`) where ((`u`.`id_usua` = `p`.`id_usua`) and (`p`.`id_pedi` = `l`.`id_pedi`) and (`p2`.`id_prod` = `l`.`id_prod`) and (`aux`.`id_prod` = `p2`.`id_prod`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `usuariocomple`
--

/*!50001 DROP VIEW IF EXISTS `usuariocomple`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`guillermo`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `usuariocomple` AS select `u`.`id_usua` AS `id_usua`,`u`.`nif` AS `nif`,`u`.`nombre` AS `nombre`,`u`.`apellido1` AS `apellido1`,`u`.`apellido2` AS `apellido2`,`u`.`email` AS `email`,`u`.`password` AS `password`,`u`.`direccion` AS `direccion`,ifnull(`rol`.`t`,'CL') AS `rol` from (`usuario` `u` left join (select `ad`.`id_usua` AS `id_ad`,'AD' AS `t` from `administrador` `ad` union select `ag`.`id_usua` AS `id_ad`,'AG' AS `t` from `agente` `ag`) `rol` on((`rol`.`id_ad` = `u`.`id_usua`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-29 18:04:16
