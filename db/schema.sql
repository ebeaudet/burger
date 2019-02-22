CREATE DATABASE burgers_db;

use burger_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN default false
    PRIMARY KEY (id)
);
