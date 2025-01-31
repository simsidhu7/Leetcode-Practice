# Write your MySQL query statement below
-- confirmation = messages/(total num of reqd confirmation messages)

-- SELECT user_id FROM signups
-- count all of the user IDs that are unique
-- distinct will ensure it returns values that aren't duplicates
-- COUNT (DISTINCT user_id) AS confirmation rate
-- LEFT JOIN confirmations WHERE signups.user_id = confirmations.user_id

-- the average of the rate of the confirmations of a column
-- round to get 2 decimal places
-- if a user has no confirmation requests, avg() returns null. IFNULL(...,0) converts NULL to 0.00
-- it returns 0 if it is null with IFNULL
select Signups.user_id, IFNULL(ROUND(AVG(confirmations.action = "confirmed"),2),0) as confirmation_rate from Signups 
Left Join Confirmations on Signups.user_id = Confirmations.user_id Group By user_id
