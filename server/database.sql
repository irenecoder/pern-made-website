CREATE DATABASE tododb;

CREATE TABLE todotable(
    todo_id SERIAL PRIMARY KEY,
    todo_name VARCHAR(255),
    todo_day VARCHAR(50)
);

SELECT * FROM todotable;
INSERT INTO todotable (todo_name,todo_day) VALUES('cook dinner','tuesday');
ALTER USER postgres WITH PASSWORD 'courgettes60';