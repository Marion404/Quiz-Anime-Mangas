-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 01 fév. 2023 à 09:40
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `quizz`
--

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `question` varchar(255) NOT NULL,
  `choix1` varchar(255) NOT NULL,
  `choix2` varchar(255) NOT NULL,
  `choix3` varchar(255) NOT NULL,
  `resultat` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `image` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `questions`
--

INSERT INTO `questions` (`question`, `choix1`, `choix2`, `choix3`, `resultat`, `id`, `image`) VALUES
('Lequel de ces chevaliers du zodiaque existe réellement?', 'Le chevalier du canard.', 'Le chevalier du perroquet.', 'Le chevalier de pégase.', 'Le chevalier de pégase.', 1, 'seiya.jpg'),
('Dans Jojo\'s Bizarre Adventure, de quelle forme est la tâche de naissance des Joestar?', 'Une étoile.', 'Un triangle.', 'Un cercle.', 'Une étoile.', 2, 'joestar birthmark.jpg'),
('Dans Soul Eater, qui est le père de Death the kid?', 'Le chevalier du canard.', 'Un noble.', 'Le dieu de la mort (Un shinigami).', 'Le dieu de la mort (Un shinigami).', 3, 'lord death shinigami.jpg'),
('Dans quelle saison de SNK Carla Jäeger meurt-elle?', 'La saison 3.', 'La saison 1.', 'Elle ne meurt jamais.', 'La saison 1.', 4, 'carla jaeger.jpg'),
('Quel est le métier du père de Gon dans Hunter x Hunter?', 'Il est chevalier, du canard.', 'Il est pilote de course.', 'Il est hunter et se passionne pour les fouilles archéologiques.', 'Il est hunter et se passionne pour les fouilles archéologiques.', 5, 'ging.jpg'),
('Qui a vaincu goku dans dragon ball pour la première fois?', 'Un moine.', 'Le tueur taopaïpaï.', 'Tortue génial.', 'Le tueur taopaïpaï.', 6, 'tao paï paï.jpg'),
('Qui a vaincu Minos dans les chevaliers du zodiaque?', 'Seiya.', 'Hyoga.', 'Personne, il est mort dans la dimension qui est réservée aux dieux.', 'Personne, il est mort dans la dimension qui est réservée aux dieux.', 8, 'griffon minos.jpg'),
('Qui est amoureux de Ichigo Kurosaki dans bleach?', 'Orihime Inoue.', 'Rukia Kuchiki.', 'Rangiku Madarame.', 'Orihime Inoue.', 9, 'orihime inoue.jpg'),
('Contre qui Yugi Muto a perdu en duel dans Yu Gi Oh?', 'Yami Marik.', 'Seto Kaiba.', 'Joey Wheeler.', 'Seto Kaiba.', 10, 'seto kaiba.jpg'),
('Qui est le père d\'Ichigo  dans bleach?', 'Isshin Kurosaki.', 'Yhwach.', 'Il est orphelin.', 'Isshin Kurosaki.', 11, 'isshin kurosaki.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
