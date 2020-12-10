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

-- Write a statement that will look up a customer for us. If they replied to email invitation. Add it to the table.
-- Use the customers email address, find their id and enter their party size into the anniversary attendees table
SELECT email, CustomerID, PartySize FROM guestList;
INSERT INTO anniversaryAttendees (CustomerId,PartySize) 
VALUES ((SELECT CustomerID FROM Customers WHERE email="customer@email.com"), 4) 

-- Search for a reservation by name and look for similarity
SELECT Customers.FirstName, Customers.LastName, Reservations.Date,
 Reservations.PartySize
 FROM Reservations
 JOIN Customers ON Customers.CustomerID=Reservations.CustomerID
 WHERE Customers.lastName LIKE "Ste%"

-- Create a reservation, first check if the customer exists in database
SELECT * FROM Customers WHERE Email="email@email.com"
-- If no customer then create a new one
INSERT INTO Customers (FirstName, lastName, Email, phone ) VALUES ("New customer","new customer lastname", "new cust email", "999-999-8888")
-- Check again into Customers table to get the customers id (foreign key) to be able to add it to reservations table
SELECT * FROM Customers WHERE Email="Email@email.com"
INSERT INTO Reservations (CustomerId, Date, PartySize) VALUE ("customerid","8/40/4040", "8")
-- Double check by writing a query combining both tables
SELECT Customers.firstName, Customers.LastName, Customers.email, Reservations.Date, Reservations.PartySize
FROM Customers
JOIN Reservations ON Customers.CustomerID=Reservations.CustomerID
WHERE Customers.email="email@email.com"


SELECT Customers.FirstName, Customers.LastName, Reservations.Date, Reservations.PartySize
FROM Customers
JOIN Reservations ON Customers.CustomerID=Reservations.CustomerID
WHERE Customers.email="email.com"

-- Schema to create an order - Adding an order will involve 5 tables: Customers(FirstName|LastName), Dishes(DishId|Name|price)
-- Orders(OrderId|CustomerId|OrderDate), OrdersDishes(OrderId|DishId), Dishes(Name)
-- Challenge: 1.Create an order, 2.Find the customer, 3.create the order record, 4.add items to the order, 5.find the total cost
-- 2. find cust
SELECT CustomerId, FirstName, LastName, Phone
FROM Customers
WHERE Address="17512 Cedarwood" and LastName="Coburn"
-- 1.New order
INSERT INTO Orders (CustomerId,OrderDate) VALUES (70, "2020-10-11")
-- 3 - to find order id
SELECT * FROM Orders WHERE CustomerId="70" ORDER by OrderDate DESC
--4- add more orders to order id 1001
INSERT INTO OrdersDishes(OrderId, DishId) VALUES
("1001", (SELECT DishId FROM Dishes WHERE Name="House Salad")),
("1001", (SELECT DishId FROM Dishes WHERE Name="Mini Chese Burgers")),
("1001", (SELECT DishId from Dishes WHERE Name="Blue smoothie"))
-- Look up the order to be sure everything is right 
SELECT * FROM Dishes JOIN OrdersDishes ON Dishes.DishId=OrdersDishes.DishId
WHERE OrdersDishes.OrderId="1001"
-- 5 - and look at the price
SELECT SUM(Dishes.Price) FROM Dishes JOIN OrdersDishes ON
Dishes.DishesId=OrdersDishes.DishesId WHERE OrdersDishes.OrderId="1001"


