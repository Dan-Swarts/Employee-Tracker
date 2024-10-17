-- \i schema.sql;
-- \i seeds.sql;
\c very_serious_business_db;

-- SELECT * FROM employees;

-- INSERT INTO employees (first_name,last_name,role_id,manager_id) VALUES ('Alice', 'Johnson', 1, NULL);

-- SELECT * FROM employees;

-- SELECT main.first_name, main.last_name, roles.title, managers.first_name AS manager, roles.salary, departments.department_name
--     FROM employees main
--     JOIN roles ON main.role_id = roles.id
--     JOIN departments ON roles.department_id = departments.id
--     LEFT JOIN employees managers ON main.manager_id = managers.id
-- ;

SELECT departments.department_name
    FROM departments
;