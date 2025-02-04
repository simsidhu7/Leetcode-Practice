# Write your MySQL query statement below

SELECT e.employee_id, 
       e.name, 
       (SELECT COUNT(*) FROM Employees WHERE reports_to = e.employee_id) AS reports_count,
       (SELECT ROUND(AVG(age)) FROM Employees WHERE reports_to = e.employee_id) AS average_age
FROM Employees e
WHERE employee_id IN (SELECT reports_to FROM Employees WHERE reports_to IS NOT NULL)
ORDER BY employee_id;

-- Another way to do it:
-- select e.employee_id,e.name, COUNT(sec.employee_id) as reports_count, ROUND(AVG(sec.age)) as average_age 
-- from Employees e inner join Employees sec on e.employee_id = sec.reports_to 
-- group by e.employee_id order by e.employee_id