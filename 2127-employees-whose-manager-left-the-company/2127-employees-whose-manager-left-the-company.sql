# Write your MySQL query statement below

SELECT employee_id from Employees WHERE salary <30000 and manager_id not in (SELECT employee_id from Employees) ORDER BY employee_id ASC