CREATE TABLE `servants` (
  `id` INT(11) NOT NULL,
  `name_jp` VARCHAR(100) NULL DEFAULT NULL,
  `name_cn` VARCHAR(100) NULL DEFAULT NULL,
  `name_en` VARCHAR(100) NULL DEFAULT NULL,
  `class` VARCHAR(50) NULL DEFAULT NULL,
  `rarity` INT(11) NULL DEFAULT NULL,
  `cost` INT(11) NULL DEFAULT NULL,
  `buster_card` INT(11) NULL DEFAULT NULL,
  `arts_card` INT(11) NULL DEFAULT NULL,
  `quick_card` INT(11) NULL DEFAULT NULL,
  `buster_hits` INT(11) NULL DEFAULT NULL,
  `arts_hits` INT(11) NULL DEFAULT NULL,
  `quick_hits` INT(11) NULL DEFAULT NULL,
  `ex_hits` INT(11) NULL DEFAULT NULL,
  `np_charge_atk` DECIMAL(10,4) NULL DEFAULT NULL,
  `np_charge_def` DECIMAL(10,4) NULL DEFAULT NULL,
  `death_rate` DECIMAL(10,4) NULL DEFAULT NULL,
  `star_abs` INT(11) NULL DEFAULT NULL,
  `star_gen` DECIMAL(10,4) NULL DEFAULT NULL,
  `attribute` VARCHAR(50) NULL DEFAULT NULL,
  `alignments` VARCHAR(50) NULL DEFAULT NULL,
  `gender` INT(11) NULL DEFAULT NULL,
  `appmedia_id` INT(11) NULL DEFAULT NULL,
  `avatar` VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;
