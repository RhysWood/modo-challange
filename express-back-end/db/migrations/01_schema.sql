DROP TABLE IF EXISTS vehicles CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE "vehicles" (
  "id" SERIAL PRIMARY KEY,
  "make" varchar(250),
  "model" varchar(250),
  "year" int,
  "color" varchar(250),
  "location_id" int,
  "location_description" varchar(500)
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "email" varchar(250),
  "password" varchar(250),
  "timestamp" timestamp
);
