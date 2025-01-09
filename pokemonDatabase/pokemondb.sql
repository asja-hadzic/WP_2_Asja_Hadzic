-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2025 at 07:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pokemondb`
--

-- --------------------------------------------------------

--
-- Table structure for table `card`
--

CREATE TABLE `card` (
  `id` int(25) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `rating` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `card`
--

INSERT INTO `card` (`id`, `title`, `description`, `image`, `price`, `rating`) VALUES
(1, 'PSA Authentic Pikachu-HOLO', 'This card features the iconic Pikachu in a stunning holographic design, capturing the essence of one of the most beloved Pokémon in the franchise. The \"PSA Authentic\" label confirms that this card has been professionally graded and is in top condition.', 'https://zardocards.com/cdn/shop/files/891736f0-4c49-44be-9010-b0d0a4ad2055.jpg?v=1731945617', 1165.00, 'PSA 10'),
(2, 'Base Set Unlimited Booster Pack ', 'Base Set Unlimited Booster Pack is a Booster Packcard from the Pokemon Sealed Product Pokemon set. This is a PokePack. The Pokemon (Pocket Monsters) franchise begain back in 1995 as a CCG by Satoshi Tajiri. ', 'https://zardocards.com/cdn/shop/files/base-set-unlimited-booster-pack-pokemon-card-zardocards-437986.jpg?v=1715044497&width=500', 1005.00, 'Legendary'),
(3, 'Chinese Base Set Unlimited Booster Pack', 'Chinese Base Set Unlimited Booster Pack is a Pack from the Pokemon Non-English Sealed Product Pokemon set. This is a Sealed Pack. The Pokemon (Pocket Monsters) franchise begain back in 1996 as a video game by Satoshi Tajiri.', 'https://zardocards.com/cdn/shop/files/main_1641480963-1999-Pokemon-Chinese-Booster-Pack-with-11-Cards-PristineAuction.com-removebg-preview.png?v=1729524717&width=300', 689.00, 'Legendary'),
(4, 'Shadowless Base Set Booster Pack', 'The Shadowless Base Set Booster Pack is a highly sought-after collectible item from the original Pokémon TCG release. Released in 1999, this pack comes from the first-ever base set of Pokémon cards.This rare booster pack from the Base Set is \"shadowless,\" meaning it lacks the shadow on the right side of the Pokémon\'s image, making it a highly sought-after item for collectors.', 'https://zardocards.com/cdn/shop/files/s-l640-removebg-preview.png?v=1729524379&width=400', 287.00, 'Epic'),
(5, 'Guardians Rising Booster ', 'Visit Alola for Pokémon fun, from the beaches to the mountain peaks—and discover new traditions and new challenges! This booster pack from the Guardians Rising expansion features powerful Alola-region Pokémon and introduces exciting new mechanics, offering a great addition to any collection.', 'https://zardocards.com/cdn/shop/files/guardians-rising-booster-pack-zardocards-146580.png?v=1714961512&width=200', 751.00, 'PSA 10'),
(6, 'The XY Steam Siege Sleeved Booster Pack', 'The XY Steam Siege Sleeved Booster Pack is a captivating product from the XY series of the Pokémon Trading Card Game, released in 2016. This sleeved booster pack from the Steam Siege expansion contains the possibility of pulling Steel and Fairy-type Pokémon, ideal for collectors looking for unique variants and competitive play.', 'https://zardocards.com/cdn/shop/files/fe256949-bb07-4e4e-880e-c659b2a2bac4.png?v=1728317905&width=500', 1458.00, 'Legendary'),
(7, 'The Celestial Storm 3 Cards Pack', 'The Celestial Storm 3 Cards Pack is a compact and intriguing product from the Sun & Moon series of the Pokémon Trading Card Game, released in 2018. Unlike traditional booster packs that typically contain 10 cards, this 3-card pack is perfect for Pokémon enthusiasts.', 'https://zardocards.com/cdn/shop/files/Captured_ecran2024-11-14a16.27.52.png?v=1731619678&width=300', 463.00, 'PSA 10'),
(8, 'Houndstone Test Print - Holo', 'The CGC 5 Houndstone Test Print - Holo is a rare and highly collectible Pokémon card that features a test print version of Houndstone, a Pokémon introduced in the Scarlet & Violet series. This card is notable for its special status as a test print, meaning it was produced in limited quantities and as part of early runs or experiments before the final print run. The Holo version of the card is especially striking, with shimmering effects that highlight the unique design. ', 'https://zardocards.com/cdn/shop/files/img455.jpg?v=1731712776&width=800', 2578.00, 'CGC 5'),
(9, 'FA/Celebi Myth. & Leg. DRM.SHN.COLL', 'The PSA 10 FA/Celebi Mythical & Legendary Dream Shiny Collection is an extraordinary Pokémon card that stands out in the Mythical & Legendary Dream Shiny Collection. Graded a perfect PSA 10 by the Professional Sports Authenticator (PSA), this card represents the pinnacle of Pokémon card collecting. A PSA 10 grade indicates that the card is in mint condition, with flawless centering, sharp corners, and no visible defects.', 'https://zardocards.com/cdn/shop/files/94276f75-03bb-4f46-84dc-07b471cb3f28.jpg?v=1734364262&width=800', 980.00, 'PSA 10'),
(10, 'Deoxys EX-Holo Emerald ', 'The PSA 9 Deoxys EX-Holo Emerald is a highly prized Pokémon card from the EX-Holo Emerald set, which is part of the iconic EX series released in 2005. Graded a PSA 9, this card is in excellent condition, with only minor imperfections preventing it from achieving the perfect PSA 10 grade. The PSA 9 designation indicates that the card has been well-preserved and retains its stunning visual appeal.', 'https://zardocards.com/cdn/shop/files/img865_5f58b556-3c99-4412-b50f-a0f156b6433b.jpg?v=1733164822&width=800', 2310.00, 'PSA 9'),
(11, 'Hitmonchan Holo R Square Cut', 'The BGS 4.5 Hitmonchan Holo R Square Cut is a rare and intriguing Pokémon card that has garnered significant attention from collectors due to its unique features and graded condition. This card is graded BGS 4.5 by Beckett Grading Services (BGS), meaning that it is in fair condition with notable imperfections, which could include surface wear, edges, or corners that detract from its overall visual appeal. ', 'https://zardocards.com/cdn/shop/files/img687.jpg?v=1733435254&width=800', 490.00, 'BGS 4.5'),
(12, 'Ampharos-HOLO', 'The PSA 8 Ampharos-Holo is a valuable and sought-after card for Pokémon collectors, offering both nostalgic appeal and lasting popularity. Graded PSA 8, the card is considered to be in excellent condition, showing only minimal wear that prevents it from achieving a perfect grade. This makes it an attractive option for collectors who appreciate cards with a history.', 'https://zardocards.com/cdn/shop/files/img855_cc8ffb60-8129-4c13-8f80-723fc8fbf179.jpg?v=1733164704&width=800', 762.00, 'PSA 8'),
(13, 'Sneasel EX-Holo Ruby & Sapphire', 'The PSA 10 Sneasel EX-Holo Ruby & Sapphire is a prestigious and highly sought-after Pokémon card from the Ruby & Sapphire set, which was part of the EX series released in 2002. Graded PSA 10, this card represents the pinnacle of card condition, receiving the highest grade possible from the Professional Sports Authenticator (PSA). A PSA 10 grade indicates that the card is in pristine, gem mint condition.', 'https://zardocards.com/cdn/shop/files/img763_a8b7392e-b1eb-41a3-987a-91332667ffc6.jpg?v=1733162982&width=800', 654.00, 'PSA 10'),
(14, 'Dustox EX-Holo Legend Maker ', 'The PSA 10 Dustox EX-Holo Legend Maker is an exceptional and highly collectible Pokémon card from the Legend Maker set, released in 2006 as part of the EX series. Graded PSA 10, this card is in pristine, gem mint condition, meaning it has received the highest possible grade from the Professional Sports Authenticator (PSA), indicating flawless quality with no imperfections.', 'https://zardocards.com/cdn/shop/files/img782.jpg?v=1733095066&width=800', 2896.00, 'PSA 10'),
(15, 'EX Dragon Booster Pack', 'EX Dragon Booster Pack is a Booster Pack card from the Pokémon Sealed Product series, specifically from the EX Dragon set. This set was part of the EX series, which introduced a range of new mechanics and Pokémon cards that revolutionized the game at the time. The EX Dragon set was released in 2003, featuring Dragon-type Pokémon and some of the most powerful and iconic cards of that era.', 'https://zardocards.com/cdn/shop/files/img393.jpg?v=1714667243&width=800', 540.00, 'PSA 10'),
(16, 'The Detective Pikachu Japanese Booster Pack', 'The Detective Pikachu Japanese Booster Pack is a unique and highly collectible Pokémon TCG product released in 2019 to coincide with the Detective Pikachu movie. This pack offers fans and collectors the chance to experience the world of Detective Pikachu through a special set of cards, featuring beloved Pokémon characters as they appeared in the live-action film.', 'https://zardocards.com/cdn/shop/files/40033f50-6f0e-41ae-9c5e-6ddf10500ac6.png?v=1735590863&width=500', 25.00, 'PSA 10'),
(17, 'The Basic Psychic Energy - 207/165 - Gold Secret Rare', 'The Basic Psychic Energy - 207/165 - Gold Secret Rare is an extraordinary and rare card from the Sword & Shield series of the Pokémon Trading Card Game. As a Secret Rare, it is part of a select group of cards that are produced in limited quantities and feature unique, premium designs that make them highly coveted by collectors.This particular card features the iconic Psychic Energy in a stunning gold foil design. ', 'https://zardocards.com/cdn/shop/files/6542c5c7-866f-43e1-a835-02694a9312c7.png?v=1734986207&width=500', 32.00, 'Legendary'),
(18, 'Shiny Mega Gardevoir-EX', 'Gear up for new ways to battle! Seize power with Shiny Mega Gardevoir-EX and battle it out! The XY: Steam Siege expansion, the 70th expansion of the Pokémon Trading Card Game, brings exciting new mechanics, dual-type Pokémon, and powerful cards that push players to explore new battling strategies. One of the standout cards in this set is the Shiny Mega Gardevoir-EX, a powerful Mega Evolution that adds both aesthetic beauty and strategic value to any deck. ', 'https://zardocards.com/cdn/shop/files/e5f76888-0adc-4c0f-9ec8-84e9481b14b7.png?v=1735309221&width=500', 1165.00, 'Legendary'),
(19, 'The Jolteon 135/165 Reverse Holo Poké Ball Japanese', 'The Jolteon 135/165 Reverse Holo Poké Ball Japanese is a highly coveted card from the Sun & Moon series, specifically from the SM8b: Tag Team GX All Stars set, which was released in Japan. This card features Jolteon, one of the iconic Eeveelutions, known for its Electric-type abilities and lightning-fast attacks.The card has a stunning Reverse Holo foil pattern that covers the entire card, except for the artwork of Jolteon. ', 'https://zardocards.com/cdn/shop/files/206b2c6d-8b65-4e99-a051-cd67c316f193.png?v=1734471806&width=500', 149.00, '135/165'),
(20, 'The Skarmory 128/128 Japanese Holo Rare Base Expansion Pack', 'The Skarmory 128/128 Japanese Holo Rare Base Expansion Pack is a distinguished and rare card from the Expedition Base Set, released in Japan in 2001. This set, part of the e-Card series, introduced the e-Reader functionality, which allowed players to scan special barcodes on cards to unlock additional features and information in the game. The Skarmory 128/128 is one of the key cards from this set, making it highly sought after by collectors and fans.', 'https://zardocards.com/cdn/shop/files/c1597e47-3762-423a-8ba0-da5b149be875.png?v=1734470597&width=500', 287.00, '128/128'),
(21, 'Sword & Shield Chilling Reign Sleeved Pack\r\n', 'The Sword & Shield Chilling Reign set is a major expansion in the Pokémon Trading Card Game (TCG), released in June 2021. As part of the Sword & Shield series, this set brings exciting new mechanics, powerful cards, and beloved Pokémon from the Galar region and beyond. Chilling Reign is the eighth main set in the Sword & Shield series, and it draws inspiration from the Galar region\'s environment.', 'https://zardocards.com/cdn/shop/files/6ba1bf90-571e-46cf-855d-71430038347c.png?v=1728317973&width=500', 20.00, 'Basic');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `first-name` varchar(25) NOT NULL,
  `last-name` varchar(50) NOT NULL,
  `username` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `first-name`, `last-name`, `username`, `email`, `password`, `role`) VALUES
(2, 'asja', 'hadzic', 'kristina', 'kristina@gmail.com', 'kristina123', 'user'),
(3, 'admin', 'admin', 'admin', 'admin@gmail.com', 'adminadmin', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `card`
--
ALTER TABLE `card`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
