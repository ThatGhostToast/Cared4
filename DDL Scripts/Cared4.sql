-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 26, 2022 at 06:34 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Cared4`
--

-- --------------------------------------------------------

--
-- Table structure for table `SICKNESSES`
--

CREATE TABLE `SICKNESSES` (
  `ID` int(11) NOT NULL COMMENT 'ID of the sickness',
  `NAME` varchar(500) NOT NULL COMMENT 'Name of the sickness',
  `COMMONNAME` varchar(500) NOT NULL COMMENT 'Common name of the sickness',
  `SYMPTOMS` varchar(4000) NOT NULL COMMENT 'Sickness symptoms',
  `RARITY` int(11) NOT NULL COMMENT 'rarity of the sickness',
  `SEVERITY` int(11) NOT NULL COMMENT 'How severe the sickness is',
  `CURE` varchar(4000) DEFAULT NULL COMMENT 'The cure ',
  `TREATMENT` varchar(4000) DEFAULT NULL COMMENT 'Treatment',
  `NATURALTREATMENT` varchar(4000) DEFAULT NULL COMMENT 'Natural treatment',
  `STRONGAGAINST` varchar(4000) DEFAULT NULL COMMENT 'What pre existing conditions the sickness is strong against'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table used to hold different sicknesses';

--
-- Dumping data for table `SICKNESSES`
--

INSERT INTO `SICKNESSES` (`ID`, `NAME`, `COMMONNAME`, `SYMPTOMS`, `RARITY`, `SEVERITY`, `CURE`, `TREATMENT`, `NATURALTREATMENT`, `STRONGAGAINST`) VALUES
(1, 'Viral Rhinitis', 'Common Cold', 'Sneezing, Stuffy Nose, Runny Nose, Sore Throat, Coughing, Mucus, Watery Eyes, Fever', 1, 1, 'N/A', 'Stay hydrated. Water, juice, clear broth, or warm lemon water with honey helps loosen congestion and prevents dehydration. Avoid alcohol, coffee, and caffeinated sodas, which can make dehydration worse.\r\n\r\nRest. Your body needs rest to heal.\r\n\r\nSoothe a sore throat. A saltwater gargle — 1/4 to 1/2 teaspoon salt dissolved in an 8-ounce glass of warm water — can temporarily relieve a sore or scratchy throat. Children younger than 6 years are unlikely to be able to gargle properly.\r\nYou can also try ice chips, sore throat sprays, lozenges, or hard candy. Use caution when giving lozenges or hard candy to children because they can choke on them. Don\'t give lozenges or hard candy to children younger than 6 years.\r\n\r\nCombat stuffiness. Over-the-counter saline nasal drops and sprays can help relieve stuffiness and congestion. In infants, experts recommend putting several saline drops into one nostril, then gently suctioning that nostril with a bulb syringe. To do this, squeeze the bulb, gently place the syringe tip in the nostril about 1/4 to 1/2 inch (about 6 to 12 millimeters), and slowly release the bulb. Saline nasal sprays may be used in older children.\r\n\r\nRelieve pain. For children 6 months or younger, give only acetaminophen. For children older than 6 months, give either acetaminophen or ibuprofen. Ask your child\'s doctor for the correct dose for your child\'s age and weight.\r\nAdults can take acetaminophen (Tylenol, others), ibuprofen (Advil, Motrin IB, others), or aspirin.\r\nUse caution when giving aspirin to children or teenagers. Though aspirin is approved for use in children older than age 3, children and teenagers recovering from chickenpox or flu-like symptoms should never take aspirin. This is because aspirin has been linked to Reye\'s syndrome, a rare but potentially life-threatening condition, in such children.\r\n\r\nSip warm liquids. A cold remedy used in many cultures, taking in warm liquids, such as chicken soup, tea, or warm apple juice, might be soothing and might ease congestion by increasing mucus flow.\r\n\r\nTry honey. Honey may help coughs in adults and children who are older than age 1. Try it in hot tea.\r\n\r\nAdd moisture to the air. A cool-mist vaporizer or humidifier can add moisture to your home, which might help loosen congestion. Change the water daily, and clean the unit according to the manufacturer\'s instructions.\r\n\r\nTry over-the-counter (OTC) cold and cough medications. For adults and children age 5 and older, OTC decongestants, antihistamines, and pain relievers might offer some symptom relief. However, they won\'t prevent a cold or shorten its duration, and most have some side effects.\r\nExperts agree that these shouldn\'t be given to younger children. Overuse and misuse of these medications can cause serious damage. Talk with your child\'s doctor before giving any medications.\r\nTake medications only as directed. Some cold remedies contain multiple ingredients, such as a decongestant plus a pain reliever, so read the labels of cold medications you take to make sure you\'re not taking too much of any medication.\r\n\r\nIf you smoke, try to stop or cut back, at least until you are feeling better. Stay away from other smokers; inhaling their smoke will further irritate the throat and make you cough even more.', 'Herbs, minerals, and other products such as echinacea, eucalyptus, garlic, honey, lemon, menthol, zinc, and vitamin C have received a lot of publicity as cold remedies. However, none of these claims are solidly supported by scientific studies.\r\n\r\n', 'Asthma, Chemotherapy, Elderly'),
(2, 'Pneumococcal Disease', 'Pneumonia', 'Chest pain when you breathe or cough, Confusion or changes in mental awareness (in adults age 65 and older), Cough, which may produce phlegm, Fatigue, Fever, sweating and shaking chills, Lower than normal body temperature (in adults older than age 65 and people with weak immune systems), Nausea, vomiting or diarrhea, Shortness of breath.', 2, 3, 'N/A', 'Macrolide antibiotics, Cough medicine, Fever reducers/pain relievers, Stay hydrated drinking water, electrolytes, and tea and eating food with chicken broth.', 'Gargling saltwater for your cough, Using honey as a sweetner in your tea, using a humidifier, sleeping on your stomach, and focus on your breathing.', 'Asthma, Chemotherapy, Elderly, Children under 5 years old');

-- --------------------------------------------------------

--
-- Table structure for table `USERS`
--

CREATE TABLE `USERS` (
  `ID` int(11) NOT NULL COMMENT 'Id of the user in the database',
  `FIRSTNAME` varchar(300) NOT NULL COMMENT 'First name of the user',
  `LASTNAME` varchar(300) NOT NULL COMMENT 'Last name of the user',
  `EMAIL` varchar(500) NOT NULL COMMENT 'Email address of the user',
  `PASSWORD` varchar(1000) NOT NULL COMMENT 'Password for the users account',
  `BIRTHDAY` varchar(100) NOT NULL COMMENT 'The user''s birthday',
  `SEX` varchar(500) NOT NULL COMMENT 'The user''s sex',
  `CONDITIONS` varchar(8000) NOT NULL COMMENT 'The user''s pre existing conditions',
  `IMAGE` varbinary(8000) NOT NULL COMMENT 'The profile picture of the user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table used to hold user data';

--
-- Dumping data for table `USERS`
--

INSERT INTO `USERS` (`ID`, `FIRSTNAME`, `LASTNAME`, `EMAIL`, `PASSWORD`, `BIRTHDAY`, `SEX`, `CONDITIONS`, `IMAGE`) VALUES
(1, 'Test', 'Test', 'email@email.com', 'Password', '02/01/2002', 'Male', 'None', 0x010111),
(2, 'Test2', 'Test2', 'email@email.com', 'Password', '02/01/2002', 'Female', 'None', 0x313030),
(4, 'Test4', 'Test4', 'email@email.com', 'Password', '02/01/2002', 'Other', 'None', 0x313030);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `SICKNESSES`
--
ALTER TABLE `SICKNESSES`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `USERS`
--
ALTER TABLE `USERS`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `SICKNESSES`
--
ALTER TABLE `SICKNESSES`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID of the sickness', AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `USERS`
--
ALTER TABLE `USERS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id of the user in the database', AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
