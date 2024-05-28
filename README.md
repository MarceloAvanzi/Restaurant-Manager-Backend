Restaurant-Manager  
A simple and complete Web tool built in Nodejs as backend and Reactjs as frontend to help you manage your restaurant (taking orders, mobile version, sending to the kitchen and checkout payment)           
Database: mongoDB with Mongoose ODM  
       
Scope: 
**Backend:**  
 - Meals table (name, portion, price)  
 - Users table (name, phone, birthday)  
 - Jwt authentication table (for employees)  
 - Orders table related to each user (order_number, status (open, in kitchen, ready, paid), userObject or just User_id, Meals object with all the things the User ordered, totalPrice, date)  
 - All CRUD functions for Meals, Users and Orders.  
