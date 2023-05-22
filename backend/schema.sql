-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zara` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`help`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`help` (
  `idhelp` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idhelp`))
ENGINE = InnoDB;

USE `zara` ;

-- -----------------------------------------------------
-- Table `zara`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clothesName` VARCHAR(45) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 27
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zara`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(225) NOT NULL,
  `isAdmin` TINYINT NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zara`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cart_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_cart_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_cart_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `zara`.`product` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_cart_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `zara`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO product (id, clothesName, image, price, category)
VALUES
    (1, 'OVERSIZED DRESS', 'https://media1.popsugar-assets.com/files/thumbor/45L-x5oI8dpNa_DqkIJm0iy_Zf4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/08/11/735/n/1922564/59635c5d0299b27e_netimg9s1bNj/i/Oversized-Dress-Zara-Atelier-Embroidered-Dress-Limited-Edition.jpg', 100, 'women'),
    (2, 'DRESS LONG', 'https://static.zara.net/photos///2023/V/0/1/p/2548/041/500/2/w/296/2548041500_1_1_1.jpg?ts=1678811417914', 150, 'women'),
    (3, 'JEANS FOR WOMEN', 'https://static.zara.net/photos///2023/V/0/1/p/6164/033/427/14/w/560/6164033427_1_1_1.jpg?ts=1677067803926', 100, 'women'),
    (4, 'BOY FRIEND JEAN', 'https://static.zara.net/photos///2023/V/0/1/p/6164/023/406/13/w/316/6164023406_2_1_1.jpg?ts=1677067778237', 120, 'women'),
    (5, 'HIGH-WAIST JEANS', 'https://static.zara.net/photos///2023/V/0/1/p/1889/033/427/18/w/560/1889033427_1_1_1.jpg?ts=1680686819403', 180, 'women'),
    (6, 'POPLIN DRESS', 'https://static.zara.net/photos///2023/V/0/1/p/2711/554/615/22/w/1920/2711554615_2_7_1.jpg?ts=1677499619522', 200, 'kids'),
    (7, 'GIRLY DRESS', 'https://static.zara.net/photos///2023/V/0/3/p/0794/606/713/108/w/284/0794606713_1_1_1.jpg?ts=1681204491435', 80, 'kids'),
    (8, 'CUTE DRESS', 'https://i.pinimg.com/736x/87/ed/8c/87ed8c7463a2c7f029ed60b79312febe.jpg', 80, 'kids'),
    (9, 'BOY JACKET', 'https://static.zara.net/photos///2022/I/0/3/p/3121/751/505/343/w/438/3121751505_1_1_1.jpg?ts=1664463803431', 50, 'kids'),
    (10, 'GIRL JACKET', 'https://hips.hearstapps.com/hmg-prod/images/hbz-zara-surplus-08-1570196277.jpg?resize=480:*', 80, 'kids'),
    (11, 'COTTON SET', 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F36%2Faf%2F36af713215f5118f698a0e9196e20e1c2d8c04a4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]', 60, 'kids'),
    (12, 'STRAIGHT FIT WASH JEANS', 'https://static.zara.net/photos///2023/V/0/3/p/6688/602/711/103/w/384/6688602711_1_1_1.jpg?ts=1683888404769', 100, 'kids'),
    (13, 'TECHNICAL TRENCH COAT', 'https://static.zara.net/photos///2023/V/0/2/p/5320/426/710/2/w/608/5320426710_1_1_1.jpg?ts=1679651728777', 400, 'men'),
    (14, 'WATER REPELLENT TOP COAT', 'https://static.zara.net/photos///2023/V/0/2/p/6518/401/710/2/w/608/6518401710_2_4_1.jpg?ts=1673974602643', 300, 'men'),
    (15, 'TRENCH COAT', 'https://static.zara.net/photos///2023/V/0/2/p/5854/401/401/2/w/365/5854401401_2_5_1.jpg?ts=1676474011860', 300, 'men'),
    (16, 'TIE DYE PRINT PARKA', 'https://static.zara.net/photos///2023/V/0/2/p/2553/430/707/2/w/750/2553430707_2_1_1.jpg?ts=1675340205369', 500, 'men'),
    (17, 'FLUID SHORTS', 'https://static.zara.net/photos///2023/V/0/2/p/2688/352/800/2/w/750/2688352800_1_1_1.jpg?ts=1684230321174', 100, 'men'),
    (18, 'VERTICAL STRIPED SHORTS', 'https://static.zara.net/photos///2023/I/0/2/p/1198/303/064/2/w/365/1198303064_2_4_1.jpg?ts=1684166671796', 100, 'men'),
    (19, 'EYEBROW GEL', 'https://static.zara.net/photos///2023/V/2/1/p/4130/220/970/2/w/750/4130220970_6_1_1.jpg?ts=1671194321439', 50, 'beauty'),
    (20, 'UNIVERSAL LIP GLOSS', 'https://static.zara.net/photos///2022/I/2/1/p/4130/344/163/2/w/453/4130344163_6_1_1.jpg?ts=1662557946376', 40, 'beauty'),
    (21, 'CULT SATIN LIP', 'https://static.zara.net/photos///2021/V/2/1/p/4130/306/122/2/w/750/4130306122_6_1_1.jpg?ts=1619772366760', 40, 'beauty'),
    (22, 'JELLY JOY LIP BALM', 'https://static.zara.net/photos///2023/V/2/1/p/4660/300/653/2/w/750/4660300653_6_1_1.jpg?ts=1674556725169', 30, 'beauty'),
    (23, 'NAIL POLISH', 'https://static.zara.net/photos///2022/I/2/1/p/4400/461/512/2/w/458/4400461512_6_1_1.jpg?ts=1664981582105', 20, 'beauty'),
    (24, 'Red NAIL POLISH', 'https://static.zara.net/photos///2022/I/2/1/p/4400/400/630/2/w/750/4400400630_2_1_1.jpg?ts=1654901541748', 20, 'beauty'),
    (25, 'EXTRA-LONG TRF JEANS', 'https://static.zara.net/photos///2023/V/0/1/p/6045/025/400/18/w/583/6045025400_1_1_1.jpg?ts=1682524673428', 200, 'women'),
    (26, 'EMBROIDERED MIDI DRESS', 'https://static.zara.net/photos///2023/V/0/1/p/2895/994/251/2/w/750/2895994251_1_1_1.jpg?ts=1680510371284', 300, 'women')