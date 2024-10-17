\c postgres;

DROP DATABASE if EXISTS very_serious_business_db;
CREATE DATABASE very_serious_business_db;

\c very_serious_business_db;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET null
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET null,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET null
);