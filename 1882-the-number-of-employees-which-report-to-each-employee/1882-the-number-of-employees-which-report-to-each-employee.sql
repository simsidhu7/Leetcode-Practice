# Write your MySQL query statement below

-- SELECT employee_id, name, COUNT(reports_to) AS reports_count, ROUND(AVG(age)) AS average_age
-- FROM Employees
-- WHERE employee_id IN (SELECT reports_to FROM Employees WHERE reports_to IS NOT NULL)
-- ORDER BY employee_id

SELECT e.employee_id, 
       e.name, 
       (SELECT COUNT(*) FROM Employees WHERE reports_to = e.employee_id) AS reports_count,
       (SELECT ROUND(AVG(age)) FROM Employees WHERE reports_to = e.employee_id) AS average_age
FROM Employees e
WHERE employee_id IN (SELECT reports_to FROM Employees WHERE reports_to IS NOT NULL)
ORDER BY employee_id;
