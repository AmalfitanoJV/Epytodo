 DROP DATABASE IF EXISTS epytodo;
CREATE DATABASE epytodo;
use epytodo;
CREATE TABLE user(
    id int,
    email varchar(255),
    password varchar(255),
    created_at TIMESTAMP,
    firstname varchar(100),
    name varchar(100));
CREATE TABLE todos(
    id int,
    title varchar(255),
    description varchar(255),
    creatd_at TIMESTAMP,
    due_time TIMESTAMP,
    user_id int,
    status varchar(255));