\c very_serious_business_db;

INSERT INTO departments (department_name)
    VALUES 
        ('Production'),
        ('IT'),
        ('Law')
;

INSERT INTO roles (title,salary,department_id)
    VALUES
        -- Production
        ('Manager',100000,1),
        ('Worker',0.49,1),

        -- IT
        ('Network Administration',80000,2),
        ('Technical Support',8,2),

        -- Law
        ('Litigation',120000,3),
        ('Paralegal',0.12,3)
;

INSERT INTO employees (first_name,last_name,role_id,manager_id)
    VALUES 
        -- Manager (Production)
        ('Alice', 'Johnson', 1, NULL),

        -- Worker (Production)
        ('Charlie', 'Brown', 2, 1),
        ('David', 'Jones', 2, 1),

        -- Network Administration (IT)
        ('Emma', 'Garcia', 3, NULL),

        -- Technical Support (IT)
        ('Grace', 'Martinez', 4, 4),
        ('Henry', 'Wilson', 4, 4),

        -- Litigation (Law)
        ('Jack', 'Thomas', 5, NULL),

        -- Paralegal (Law)
        ('Karen', 'Lee', 6, 7),
        ('Liam', 'Moore', 6, 7)
;