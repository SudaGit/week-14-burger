### Schema

##--CREATE DATABASE burgers_db;

USE burgers_db;
drop table burgers;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    drinks varchar(255),
    Customer_name Varchar(50),
    devoured BOOLEAN DEFAULT false,
    createddttm  DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);


