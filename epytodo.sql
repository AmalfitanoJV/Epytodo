DROP DATABASE IF EXISTS epytodo;
CREATE DATABASE epytodo;
use epytodo;
CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    firstname varchar(100) NOT NULL,
    name varchar(100) NOT NULL,
    primary key (id));
CREATE TABLE todo(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    due_time TIMESTAMP NOT NULL,
    user_id INT NOT NULL,
    status ENUM('not started', 'todo', 'in progress', 'done') DEFAULT 'not started',
    primary key (id));