CREATE TABLE carrot.products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  price DECIMAL NOT NULL,
  discount INT NULL,
  description VARCHAR(200) NULL,
  image LONGBLOB NOT NULL,
  category_id INT NOT NULL,
  type_id INT NOT NULL,
  brand_id INT NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE carrot.users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(75) NOT NULL,
  dateOfBirth DATE NOT NULL,
  password VARCHAR(30) NOT NULL,
  image LONGBLOB NULL,
  typeOfUser_id INT NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE carrot.typeOfUsers (
  id INT NOT NULL AUTO_INCREMENT,
  administrator VARCHAR(50) NULL,
  typeOfClients_id INT NULL,
  PRIMARY KEY (id));

CREATE TABLE carrot.typeOfClients (
  id INT NOT NULL,
  minorista VARCHAR(45) NULL,
  mayorista VARCHAR(45) NULL,
  PRIMARY KEY (id));

CREATE TABLE carrot.categories (
  id INT NOT NULL AUTO_INCREMENT,
  new VARCHAR(45) NULL,
  inSale VARCHAR(45) NULL,
  featured VARCHAR(45) NULL,
  PRIMARY KEY (id));

CREATE TABLE carrot.types (
  id INT NOT NULL AUTO_INCREMENT,
  lacteos VARCHAR(45) NULL,
  cereales VARCHAR(45) NULL,
  frutosSecos VARCHAR(45) NULL,
  PRIMARY KEY (id));

CREATE TABLE carrot.brands (
  id INT NOT NULL AUTO_INCREMENT,
  olibo VARCHAR(45) NULL,
  vrink VARCHAR(45) NULL,
  godBlessYou VARCHAR(45) NULL,
  PRIMARY KEY (id));