DROP DATABASE if EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(75) NULL,
    devoured BOOLEAN NOT NULL default 0,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);