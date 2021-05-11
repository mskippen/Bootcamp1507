-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Create the column "food" which can take in a 50 character string and cannot be NULL --
  -- Create the column "score" which can take in an integer --
);

CREATE TABLE favorite_songs (
  -- Create the column "song" which can take in a 100 character string and cannot be NULL --
  -- Create the column "artist" which can take in a 50 character string --
  -- Create the column "score" which can take in an integer --
);

CREATE TABLE favorite_movies (
  -- Create the column "movie" which can take in a 100 character string and cannot be NULL --
  -- Create the column "five_times" which can take in a boolean --
  -- create the column "score" which can take in an integer --
);