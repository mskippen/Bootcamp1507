-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Makes it so all of the following code will affect favorite_db --
USE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Create the column "food" which can take in a 50 character string and cannot be NULL --
  food VARCHAR(50) NOT NULL,
  -- Create the column "score" which can take in an integer --
  score INTEGER
);

CREATE TABLE favorite_songs (
  song VARCHAR(100) NOT NULL,
  artist VARCHAR(50),
  score INTEGER
);

CREATE TABLE favorite_movies (
  movie VARCHAR(100) NOT NULL,
  five_times BOOLEAN,
  score INTEGER
);