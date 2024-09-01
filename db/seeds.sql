INSERT INTO department (name)
VALUES ('Accounting'),
       ('Marketing'),
       ('Finance'),
       ('Operations'),
       ('Payroll');

INSERT INTO role (title, salary, department_id)
VALUES ('Staff Accountant', '50000',1),
       ('Senior Accountant', '60000',1), 
       ('Sales Marketer', '45000',2),
       ('Marketing Director', '55000',2),
       ('Treasurer', '40000',3),
       ('Administrator', '70000',4),
       ('CEO', '80000',4),
       ('Payroll Specialist', '50000',5),
       ('Payroll Manager', '60000',5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kevin', 'Dolland', 1, 2),
('Samantha', 'Peterson', 2, null),
('Lori', 'Sanders', 3, 4),
('Leslie', 'Smith', 4, null),
('Jeremiah', 'Ray', 5, null),
('Lisa', 'Blevins', 6, 7),
('Jessica', 'Jenkins', 7, null),
('Nancy', 'Winslow', 8, 9),
('Reggie', 'Hunter', 9, null);