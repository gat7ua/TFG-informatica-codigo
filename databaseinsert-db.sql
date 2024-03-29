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
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1000026);
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `aeropuerto`
--

LOCK TABLES `aeropuerto` WRITE;
/*!40000 ALTER TABLE `aeropuerto` DISABLE KEYS */;
INSERT INTO `aeropuerto` VALUES (2000002,'Aeropuerto de Alicante',3000015,'ALC'),(2000003,'Aeropuerto de Madrid',3000016,'MAD'),(2000004,'Aeropuerto de Par├¡s-Charles de Gaulle',3000019,'CDG'),(2000005,'Aeropuerto de Valencia',3000017,'VAL'),(2000006,'Aeropuerto de la CIudad de Londres',3000018,'LCY'),(2000007,'Aeropuerto de Heathrow',3000018,'LHR'),(2000008,'Aeropuerto de Budapest Ferenc Liszt',3000020,'BUD'),(2000009,'Flughafen M├╝nchen Franz J. Strauss',3000021,'MUC');
/*!40000 ALTER TABLE `aeropuerto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `agente`
--

LOCK TABLES `agente` WRITE;
/*!40000 ALTER TABLE `agente` DISABLE KEYS */;
INSERT INTO `agente` VALUES (1000028);
/*!40000 ALTER TABLE `agente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `alojamiento`
--

LOCK TABLES `alojamiento` WRITE;
/*!40000 ALTER TABLE `alojamiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `alojamiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `autobus`
--

LOCK TABLES `autobus` WRITE;
/*!40000 ALTER TABLE `autobus` DISABLE KEYS */;
INSERT INTO `autobus` VALUES (4000015,'2023-06-26 12:20:00','01:40',55,0,0,0,0,0,0,0,8000001,8000005,5000008);
/*!40000 ALTER TABLE `autobus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ciudad`
--

LOCK TABLES `ciudad` WRITE;
/*!40000 ALTER TABLE `ciudad` DISABLE KEYS */;
INSERT INTO `ciudad` VALUES (3000015,'Alicante','Espa├▒a'),(3000016,'Madrid','Espa├▒a'),(3000017,'Valencia','Espa├▒a'),(3000018,'Londres','Reino Unido'),(3000019,'Paris','Francia'),(3000020,'Budapest','Hungr├¡a'),(3000021,'Munich','Alemania');
/*!40000 ALTER TABLE `ciudad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1000026),(1000028),(1000029),(1000030),(1000031),(1000032);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `crucero`
--

LOCK TABLES `crucero` WRITE;
/*!40000 ALTER TABLE `crucero` DISABLE KEYS */;
/*!40000 ALTER TABLE `crucero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `crucerocamarote`
--

LOCK TABLES `crucerocamarote` WRITE;
/*!40000 ALTER TABLE `crucerocamarote` DISABLE KEYS */;
/*!40000 ALTER TABLE `crucerocamarote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `crucerorecorrido`
--

LOCK TABLES `crucerorecorrido` WRITE;
/*!40000 ALTER TABLE `crucerorecorrido` DISABLE KEYS */;
/*!40000 ALTER TABLE `crucerorecorrido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `estacionautobus`
--

LOCK TABLES `estacionautobus` WRITE;
/*!40000 ALTER TABLE `estacionautobus` DISABLE KEYS */;
INSERT INTO `estacionautobus` VALUES (8000000,'Estacion de autobuses de Paris',3000019),(8000001,'Estaci├│n de Alicante',3000015),(8000002,'Estaci├│n de Valencia Sur',3000017),(8000005,'Estaci├│n de Valencia Norte',3000017),(8000006,'ZOB M├╝nchen',3000021);
/*!40000 ALTER TABLE `estacionautobus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `estaciontren`
--

LOCK TABLES `estaciontren` WRITE;
/*!40000 ALTER TABLE `estaciontren` DISABLE KEYS */;
INSERT INTO `estaciontren` VALUES (9000000,'Estacion central de Paris',3000019),(9000001,'Renfe Alicante',3000015),(9000002,'Hauptbanhof M├╝nchen',3000021),(9000003,'Puerta de Atocha',3000016);
/*!40000 ALTER TABLE `estaciontren` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lineapedido`
--

LOCK TABLES `lineapedido` WRITE;
/*!40000 ALTER TABLE `lineapedido` DISABLE KEYS */;
INSERT INTO `lineapedido` VALUES (10000000,4000003,100,1,2,NULL),(10000001,4000009,180,1,3,'B'),(10000001,4000016,109.5,2,1,'P'),(10000001,4000015,180,3,6,NULL),(10000002,4000012,420,1,2,'P'),(10000002,4000015,30,2,1,NULL),(10000003,4000005,250,1,5,NULL),(10000007,4000007,100,1,2,NULL),(10000009,4000008,80,1,1,'P'),(10000010,4000009,200,1,4,NULL),(10000011,4000003,60,1,1,'B'),(10000012,4000007,200,1,4,NULL),(10000013,4000005,160,1,2,'P'),(10000014,4000008,60,1,1,'B'),(10000015,4000004,60,1,1,'B'),(10000016,4000003,100,1,2,NULL),(10000016,4000018,30,2,2,NULL);
/*!40000 ALTER TABLE `lineapedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `mensaje`
--

LOCK TABLES `mensaje` WRITE;
/*!40000 ALTER TABLE `mensaje` DISABLE KEYS */;
INSERT INTO `mensaje` VALUES (11000005,'Suena genial!!!',1000030,12000003,'2023-06-26 19:25:19'),(11000004,'Pues a mi no me gusto nada, en fin me alegro por ti',1000026,12000004,'2023-06-26 19:25:46'),(11000005,'Vaya que divertido viaje si!',1000029,12000005,'2023-06-26 19:26:30'),(11000003,'Yo tambi├®n jajaajj',1000028,12000006,'2023-06-26 19:26:45'),(11000006,'Pues deber├¡as darle otra oportunidad!',1000030,12000008,'2023-06-26 22:17:35');
/*!40000 ALTER TABLE `mensaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `oferta`
--

LOCK TABLES `oferta` WRITE;
/*!40000 ALTER TABLE `oferta` DISABLE KEYS */;
INSERT INTO `oferta` VALUES (13000000,4000000,'2020-12-12','2020-12-15',1.25);
/*!40000 ALTER TABLE `oferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `oficinarent`
--

LOCK TABLES `oficinarent` WRITE;
/*!40000 ALTER TABLE `oficinarent` DISABLE KEYS */;
/*!40000 ALTER TABLE `oficinarent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (10000000,1000026,'X','2023-06-13 15:24:01'),(10000001,1000026,'X','2023-06-15 15:59:34'),(10000002,1000026,'X','2023-06-13 09:47:50'),(10000003,1000026,'X','2023-06-13 14:05:01'),(10000007,1000026,'X','2023-06-15 16:10:40'),(10000009,1000026,'X','2023-06-15 16:11:48'),(10000010,1000026,'X','2023-06-15 16:12:22'),(10000011,1000026,'X','2023-06-15 16:13:08'),(10000012,1000026,'X','2023-06-15 16:15:29'),(10000013,1000026,'X','2023-06-15 16:18:58'),(10000014,1000026,'X','2023-06-15 16:19:29'),(10000015,1000026,'X','2023-06-15 16:20:31'),(10000016,1000029,'P',NULL);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (4000000,50,65,0),(4000003,50,65,0),(4000004,50,65,0),(4000005,50,65,0),(4000007,50,65,0),(4000008,50,65,0),(4000009,50,65,0),(4000010,50,65,0),(4000012,75,75,0),(4000013,80,75,0),(4000014,100,75,0),(4000015,30,55,0),(4000016,50,190,0),(4000017,2,88,0),(4000018,15,130,0);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
INSERT INTO `proveedor` VALUES (5000000,'Ryanair','Irlanda'),(5000001,'Iberia','Espa├▒a'),(5000002,'Air Europa','Espa├▒a'),(5000003,'KLM Royal Dutch Airlines','Pa├¡ses Bajos'),(5000004,'British Airways','Reino Unido'),(5000005,'Flixbus','Alemania'),(5000006,'Renfe','Espa├▒a'),(5000007,'Deutsche Bahn','Alemania'),(5000008,'Alsa','Espa├▒a');
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
INSERT INTO `publicacion` VALUES (11000003,'Amo la paella','En mi viaje por Valencia prob├® diferentes paellas, estoy enamorado, volver├® la semana que viene.',1000029,'2023-06-26 18:10:13'),(11000004,'Viaje a Par├¡s','En mi viaje a Par├¡s descubr├¡ las maravillas que esta ciudad esconde. Lo disfrut├® mucho, repetir├¡a!',1000030,'2023-06-26 19:24:32'),(11000005,'Aventura!!','Me encanta ir de aventura!!! Mi ├║ltimo viaje fue un recorrido por el norte de ├üfirca. Viv├¡ intensos momentos a lo largo y ancho de la costa de Marruecoss, Argelia, T├║nez e incluso llegu├® a montar el camello! Fue un viaje incre├¡ble que me encantar├¡a revivir.',1000031,'2023-06-26 19:24:51'),(11000006,'DECEPCI├ôN','Jam├ís volver├® a Francia, Par├¡s me pareci├│n una ciudad sobrevalorada, las carreteras del pa├¡s son de pago y en general es todo muy caro. Decepcionado!',1000026,'2023-06-26 19:24:52'),(11000008,'DE VIAJE EN JAEN','Fui de viaje a Ja├®n con mis primos, lo pasamos estupendamente bien. Probamos un monton de comida t├¡pica. Sin duda repetir├¡a!',1000032,'2023-06-26 22:28:23');
/*!40000 ALTER TABLE `publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `puerto`
--

LOCK TABLES `puerto` WRITE;
/*!40000 ALTER TABLE `puerto` DISABLE KEYS */;
/*!40000 ALTER TABLE `puerto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `resenya`
--

LOCK TABLES `resenya` WRITE;
/*!40000 ALTER TABLE `resenya` DISABLE KEYS */;
/*!40000 ALTER TABLE `resenya` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `secuencias`
--

LOCK TABLES `secuencias` WRITE;
/*!40000 ALTER TABLE `secuencias` DISABLE KEYS */;
INSERT INTO `secuencias` VALUES ('id_aero',2000010),('id_ciud',3000022),('id_cruc',6000000),('id_esau',8000007),('id_estr',9000004),('id_mens',12000009),('id_ofer',13000001),('id_ofre',14000000),('id_pedi',10000017),('id_prod',4000019),('id_prov',5000009),('id_publ',11000009),('id_puer',7000000),('id_usua',1000033);
/*!40000 ALTER TABLE `secuencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (1000026,'0cfdfea133c300220ccb41ac21cf524aa863913882114dd9b3ad40a831932629b','2023-06-28 17:21:02'),(1000026,'1d7473d4687d2867e910db7552e4981924a78ee8052e3338850579652069d7424','2023-06-28 17:21:57'),(1000026,'13ce826044e6e461ca69b9a34ac7f421efb89dad4cd57ff9eb37da69862f884ea','2023-06-28 18:14:34'),(1000026,'188bc6cc70d24e4870dd7f29408f13b12aa0c146839e5f12d88c31445332cc960','2023-07-01 17:01:17'),(1000026,'1d13151ef91edd3d16a30b393522f4e6fd02893d6a1369e4546d09c9579a25c7e','2023-07-01 17:01:31'),(1000026,'112ce451c7251487a3888911fd1f6c540e02ca1b41690d89e16085897b36db811','2023-07-01 17:02:52'),(1000026,'138bbbdb0bb237c515b6fc03c6dfd890da67990261d06783e39eb55b39b0544cb','2023-07-02 17:41:25'),(1000026,'1dc04cfd2ad9c26febca6c01e50830b3a48fd7c1be4162000e51a072750878408','2023-07-12 19:27:26'),(1000026,'11ecbe25fef14fc600d4e7d10c5a9bb13b94367a45b5f6d8e5a92fd1bf93bed1c','2023-07-15 17:51:25'),(1000028,'063b615d530165d55a9957550f5c382969aa23b1a7aa4c13cdf8327cf4aa87aac','2023-07-15 20:40:00'),(1000026,'1dd43d6d0166c861908141b7699e093c052098801cabdf50fc51dd50759aaaa45','2023-07-15 20:40:34'),(1000029,'0c2c4865e2c7d949b62e6d76615a76dbf45a11f5c6d0ffc34171bad3727b1a446','2023-07-19 19:27:29'),(1000030,'05ca22948efa461a86748b931d39df63cb024d5a6b06bffab3689384c1525fa0f','2023-07-26 17:59:25'),(1000031,'05b0472dc297c49caabc613889cb6f7f920b800a4887d1ae6b33ec487a55a2492','2023-07-26 18:01:51'),(1000030,'0047501ce5ffd1b624cb88361e11099fa6a183f4721e2b8870645e419efcd4778','2023-07-26 18:35:48'),(1000032,'0e372bdcdb91d5478c6a7ecaa36233c1329f01034549a450b4508dc4030d8d4d4','2023-07-26 22:26:31'),(1000030,'0eba5c123d2f4b747ff380f71685bd06761ecb3ed8adc99bdfa875e0da2974316','2023-07-27 17:19:19'),(1000026,'170ce8679333528b20e6f004fb76f4fe12046308e42ec0ae4b1ee4b6f53d55e84','2023-07-27 17:30:05'),(1000028,'2a828ffaafd8fb203234ba9c6b4954108dd5e19f7370b0b571084e0cc6ca40340','2023-07-27 17:45:53'),(1000026,'1a27cb33aba92a5f8834d31effdc632a82efd48bfd6c637d022ec9f20e068e236','2023-07-27 17:53:50');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tren`
--

LOCK TABLES `tren` WRITE;
/*!40000 ALTER TABLE `tren` DISABLE KEYS */;
INSERT INTO `tren` VALUES (4000016,'2023-06-20 15:30:00','03:00',150,25,15,1.5,2.19,0,0,0,9000002,9000000,5000007),(4000018,'2023-06-28 10:50:00','02:55',100,20,10,3,5,0,0,0,9000003,9000001,5000006);
/*!40000 ALTER TABLE `tren` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1000026,'48775204R','Guillermo','Antequera','Tejado','gat7@alu.ua.es','12944f22333c049006e2bdbf7b2ea12fdc4569c21f044eb8c4ccf9b558a3e1f7','Calle la Pantomima'),(1000028,'12345678A','Pepe','Garcia','Rodriguez','pepito@gmail.com','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','Calle la calle'),(1000029,'12341233P','Juan','Garfi','Juanez','juansguarnizo@gmail.com','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','Calle xd'),(1000030,'','Lucia','Fer','','diablito@mail','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',''),(1000031,'','Ernesto','','','ernes','d2f483672c0239f6d7dd3c9ecee6deacbcd59185855625902a8b1c1a3bd67440',''),(1000032,'','Juan David','','','juanito@jun.es','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `vehiculoalq`
--

LOCK TABLES `vehiculoalq` WRITE;
/*!40000 ALTER TABLE `vehiculoalq` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehiculoalq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `vuelo`
--

LOCK TABLES `vuelo` WRITE;
/*!40000 ALTER TABLE `vuelo` DISABLE KEYS */;
INSERT INTO `vuelo` VALUES (4000003,'2023-06-23 12:45:00','02:20',50,10,5,1.2,1.6,0,0,0,2000002,2000003,5000000),(4000004,'2023-06-26 15:45:00','02:20',50,10,5,1.2,1.6,0,0,0,2000003,2000002,5000000),(4000005,'2023-06-23 14:45:00','02:20',50,10,5,1.2,1.6,0,0,0,2000002,2000003,5000000),(4000007,'2023-06-23 18:45:00','02:20',50,10,5,1.2,1.6,0,0,0,2000002,2000003,5000000),(4000008,'2023-06-23 20:45:00','02:20',50,10,5,1.2,1.6,0,0,0,2000002,2000003,5000000),(4000009,'2023-06-23 22:45:00','02:20',50,10,5,1.2,1.6,0,0,0,2000002,2000003,5000000),(4000010,'2023-06-23 10:45:00','02:20',50,10,5,1.2,1.6,0,0,0,2000002,2000003,5000000),(4000012,'2023-06-24 20:00:00','02:20',60,10,5,1.8,2.8,0,0,0,2000003,2000004,5000001),(4000013,'2023-10-15 10:20:00','03:30',50,20,5,1.8,2.5,0,0,0,2000008,2000007,5000002),(4000014,'2023-05-29 14:50:00','03:10',60,10,5,2,2.9,0,0,0,2000008,2000004,5000002),(4000017,'2023-05-30 02:57:00','00:01',8,0,80,3,81,0,0,0,2000003,2000003,5000006);
/*!40000 ALTER TABLE `vuelo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-29 17:59:05
