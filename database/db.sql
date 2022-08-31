create database tasksdb;

create table task(
  id serial primary key,
  title varchar(255) unique,
  description varchar(255)
);