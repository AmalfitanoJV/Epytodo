create database epytodo;
use epytodo;
CREATE TABLE users
(
    id INT PRIMARY KEY NOT NULL,
    email VARCHAR(255),
    password VARCHAR(255),
    created_at TIMESTAMP,
    firstname VARCHAR(100),
    name VARCHAR(100),
);
CREATE TABLE todos
(
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(255),
    description VARCHAR(255),
    creatd_at TIMESTAMP,
    due_time TIMESTAMP,
    user_id INT PRIMARY KEY NOT NULL,
    status VARCHAR(255),
)