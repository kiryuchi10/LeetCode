CREATE FUNCTION getNthHighestSalary(N INT)  
RETURNS INT
DETERMINISTIC
READS SQL DATA
BEGIN
  DECLARE res INT;

  SELECT e1.salary
    INTO res
    FROM Employee e1
   WHERE (
       SELECT COUNT(DISTINCT e2.salary)
         FROM Employee e2
        WHERE e2.salary > e1.salary
     ) = N - 1
   LIMIT 1;

  RETURN res;
END;
