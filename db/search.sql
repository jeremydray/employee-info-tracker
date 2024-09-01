-- SELECT employee.first_name, employee.last_name, role.title, role.salary, role.manager_id
-- FROM employee
-- JOIN role ON employee.role_id = role.id 
-- INNER JOIN manager_id ON employee.manager_id = employee.id;

SELECT employee.manager_id
JOIN employee ON employee.first_name WHERE employee.manager_id = employee.id