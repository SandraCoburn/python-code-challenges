SELECT lastName, firstName, email FROM Customers ORDER BY lastName
-- Create a new table with two columns
CREATE TABLE guestList ("CustomerId" INT, "PartySize" INT);

SELECT * Dishes WHERE Type="apetizer" OR Type="Beverage" ORDER BY price;

SELECT * Dishes WHERE Type!="Beverage" ORDER BY Type;

-- Add customers information to the database, our table already creates new uniqueCustomers ids
INSERT INTO Customers 
(FirsName, LastName, Email, Address, City, State, Phone, bDay)
VALUES
("JOHN", "Coburn", "john@coburns.com", "Corona", "CA", "951-0-00", "7/7")

-- Check if the new record got added:
SELECT * Customers ORDER BY CustomerId DESC;

-- Find a customer record and update it
SELECT CustomerId, FirstName, LastName from Customers; 
WHERE FirstName="John" AND LastName="Coburn";
-- To update
UPDATE Customers SET;
Address="78 pine st",
City="new jersey",
State="NJ"
WHERE CustomerID="2234"

-- Check that the update is there:
SELECT * Customers WHERE CustomerID="2234"

--Remove a customer's account
SELECT * FROM Customers WHERE FirstName="john" AND LastName="Coburn";

DELETE FROM Customers WHERE CustomerID="2234"
-- Check if record was removed
SELECT * FROM Customers WHERE FirstName="john" AND LastName="Coburn"
