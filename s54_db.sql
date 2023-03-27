-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 192.168.0.200
-- Létrehozás ideje: 2023. Már 27. 09:39
-- Kiszolgáló verziója: 10.5.17-MariaDB-log
-- PHP verzió: 8.0.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `s54_db`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `auto_alkatresz_kateg`
--

CREATE TABLE `auto_alkatresz_kateg` (
  `alkatresz_id` int(11) NOT NULL,
  `komp_tipus` int(11) NOT NULL,
  `komp_marka` int(11) NOT NULL,
  `alkatresz_gyarto` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `alkatresz_nev` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `alkatresz_cikkszam` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `alkatresz_ar` int(11) NOT NULL,
  `alkatresz_kep` varchar(100) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `auto_alkatresz_kateg`
--

INSERT INTO `auto_alkatresz_kateg` (`alkatresz_id`, `komp_tipus`, `komp_marka`, `alkatresz_gyarto`, `alkatresz_nev`, `alkatresz_cikkszam`, `alkatresz_ar`, `alkatresz_kep`) VALUES
(1, 1, 2, 'A.Z. Meisteteile', 'Vízhűtő', '10400737', 39000, '21.jpg'),
(2, 2, 3, 'Nissens', 'Intercooler', '10401505', 52000, '22.jpg'),
(3, 3, 1, 'Vag Group', 'Izzítógyertya', '216618', 8000, '23.jpg'),
(4, 4, 5, 'Luk', 'Kuplung készlet', '293967', 195000, '24.jpg'),
(5, 5, 4, 'Continental', 'Vezérműszíj készlet', '10496731', 72000, '25.jpg'),
(6, 6, 6, 'Brembo', 'Féktárcsa', '09.C506.33 ', 275000, '26.jpg'),
(7, 7, 7, 'Ate', 'Fékbetét', '19010RNBA01', 52000, '27.jpg'),
(8, 8, 8, 'Hella', 'Vízhűtő', '10890780', 26000, '28.jpg'),
(9, 9, 9, 'A.Z. MEISTERTEILE ', 'Turbófeltöltő', '876922', 260000, '29.jpg'),
(10, 10, 10, 'Febi', 'Vezérműlánc készlet', '10513390', 410000, '30.jpg'),
(11, 11, 11, 'Gates', 'Termosztát', '380934', 10000, '31.jpg'),
(12, 12, 12, 'Meat & Doria', 'Befecskendező szelep', '71289652', 38000, '32.jpg'),
(13, 13, 13, 'Nissens', 'Vízhűtő', '10371914', 197000, '33.jpg'),
(14, 14, 14, 'Payen', 'Hengerfej tömítés készlet', '697920', 119000, '34.jpg'),
(15, 15, 15, 'Skf', 'Vezérműszíj készlet', '10655458', 170000, '35.jpg'),
(16, 16, 1, 'Valeo', 'Generátor', '10895369', 120000, '36.jpg'),
(17, 17, 2, 'GLYCO', 'Hajtókarcsapágy', '292172', 45000, '37.jpg'),
(18, 18, 3, 'Bendix', 'Kuplung munkahenger', '11198078', 66000, '38.jpg'),
(19, 19, 4, 'Topran', 'Vízhűtő', '700661', 32000, '39.jpg'),
(20, 20, 6, 'Pittatore', 'Vezérműtengely', '791049', 172000, '40.jpg'),
(42, 26, 2, 'Textar', 'Hátsó fék betét', '2470303 ', 160000, '44.jpg'),
(43, 1, 2, 'Teszt', 'Teszt', 'Hfj', 56, ''),
(44, 26, 2, 'Jdbdjd', 'Djdndjd', 'Ndjxjxjx', 727282, 'b5808e85-a980-4c3d-bbd2-b133b4ea4548.jpeg'),
(45, 26, 2, 'Nyndbs', 'Fbhfhc', 'Bdjd', 6262, '27feccd8-9a3c-4e66-a5e0-15ea6a9fb6bf.jpeg');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `auto_marka`
--

CREATE TABLE `auto_marka` (
  `marka_id` int(11) NOT NULL,
  `Auto_marka` varchar(100) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `auto_marka`
--

INSERT INTO `auto_marka` (`marka_id`, `Auto_marka`) VALUES
(1, 'Skoda'),
(2, 'BMW'),
(3, 'AUDI'),
(4, 'Volkswagen'),
(5, 'VOLVO'),
(6, 'Alfa Romeo'),
(7, 'Honda'),
(8, 'Peugeot'),
(9, 'Opel'),
(10, 'Nissan'),
(11, 'Toyota'),
(12, 'Ford'),
(13, 'Mercedes-Benz'),
(14, 'Subaru'),
(15, 'Citroen');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `auto_tipus`
--

CREATE TABLE `auto_tipus` (
  `autotipus_id` int(11) NOT NULL,
  `marka_id` int(11) NOT NULL,
  `típus` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `evjarat` int(11) NOT NULL,
  `auto_uzemanyag` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `auto_motor_meret` int(11) NOT NULL,
  `auto_tipus_kep` varchar(100) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `auto_tipus`
--

INSERT INTO `auto_tipus` (`autotipus_id`, `marka_id`, `típus`, `evjarat`, `auto_uzemanyag`, `auto_motor_meret`, `auto_tipus_kep`) VALUES
(1, 2, '320i', 2001, 'benzin', 2171, '1.jpg'),
(2, 3, 'A3', 2010, 'dízel', 1896, '2.jpg'),
(3, 1, 'Octavia', 2012, 'dízel', 1598, '3.jpg'),
(4, 5, 'S70 turbo', 2000, 'benzin', 2435, '4.jpg\n'),
(5, 4, 'Golf VII', 2017, 'benzin', 1395, '5.jpg'),
(6, 6, 'Gulia qv', 2017, 'benzin', 2891, '6.jpg'),
(7, 7, 'Civic ix cupe', 2020, 'benzin', 2354, '7.jpg'),
(8, 8, '206', 2001, 'dízel', 1398, '8.jpg'),
(9, 9, 'Astra', 2002, 'dízel', 2171, '9.jpg'),
(10, 10, '370Z NISMO', 2022, 'benzin', 3696, '10.jpg'),
(11, 11, 'GR 86 ', 2022, 'Benzin', 2387, '11.jpg'),
(12, 12, 'Focus', 2012, 'Ethanol', 1798, '12.jpg'),
(13, 13, 'Cl 63 AMG', 2010, 'Benzin', 6208, '13.jpg'),
(14, 14, 'Impreza TURBO', 1995, 'Benzin', 1994, '14.jpg'),
(15, 15, 'C8', 2007, 'Benzin', 2946, '15.jpg'),
(16, 1, 'Fabia', 2000, 'benzin', 1395, '16.jpg'),
(17, 2, '540i', 1994, 'benzin', 3982, '17.jpg'),
(18, 3, 'S6', 2008, 'benzin', 5198, '18.jpg'),
(19, 4, 'Vento', 1995, 'benzin', 1781, '19.jpg'),
(20, 6, '75', 1991, 'benzin', 2959, '20.jpg'),
(24, 2, 'M4', 2014, 'Benzin', 2979, '41.jpg'),
(25, 2, '316Ci', 1995, 'Benzin', 1596, '42.jpg'),
(26, 2, 'M3 Touring', 2022, 'Benzin', 2993, '43.jpg');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `erdekel`
--

CREATE TABLE `erdekel` (
  `erdekel_id` int(11) NOT NULL,
  `alkatresz_id` int(11) NOT NULL,
  `hozzaszolas` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `datum` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `erdekel`
--

INSERT INTO `erdekel` (`erdekel_id`, `alkatresz_id`, `hozzaszolas`, `datum`) VALUES
(13, 1, 'imrem89@gmail.com', '2023-02-03');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `auto_alkatresz_kateg`
--
ALTER TABLE `auto_alkatresz_kateg`
  ADD PRIMARY KEY (`alkatresz_id`),
  ADD KEY `komp_tipus` (`komp_tipus`);

--
-- A tábla indexei `auto_marka`
--
ALTER TABLE `auto_marka`
  ADD PRIMARY KEY (`marka_id`);

--
-- A tábla indexei `auto_tipus`
--
ALTER TABLE `auto_tipus`
  ADD PRIMARY KEY (`autotipus_id`),
  ADD KEY `marka_id` (`marka_id`);

--
-- A tábla indexei `erdekel`
--
ALTER TABLE `erdekel`
  ADD PRIMARY KEY (`erdekel_id`),
  ADD KEY `erdekel_alkatresz` (`alkatresz_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `auto_alkatresz_kateg`
--
ALTER TABLE `auto_alkatresz_kateg`
  MODIFY `alkatresz_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT a táblához `auto_marka`
--
ALTER TABLE `auto_marka`
  MODIFY `marka_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT a táblához `auto_tipus`
--
ALTER TABLE `auto_tipus`
  MODIFY `autotipus_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT a táblához `erdekel`
--
ALTER TABLE `erdekel`
  MODIFY `erdekel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `auto_alkatresz_kateg`
--
ALTER TABLE `auto_alkatresz_kateg`
  ADD CONSTRAINT `auto_alkatresz_kateg_ibfk_1` FOREIGN KEY (`komp_tipus`) REFERENCES `auto_tipus` (`autotipus_id`);

--
-- Megkötések a táblához `auto_tipus`
--
ALTER TABLE `auto_tipus`
  ADD CONSTRAINT `auto_tipus_ibfk_1` FOREIGN KEY (`marka_id`) REFERENCES `auto_marka` (`marka_id`);

--
-- Megkötések a táblához `erdekel`
--
ALTER TABLE `erdekel`
  ADD CONSTRAINT `erdekel_alkatresz` FOREIGN KEY (`alkatresz_id`) REFERENCES `auto_alkatresz_kateg` (`alkatresz_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
