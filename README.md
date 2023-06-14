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

**Frontend:**  
 - Centered window with toolbar (take orders, kitchen section for in kitchen orders, checkout payment for done orders, all orders, all users, all meals) at the left side  
 - Employee logs in and have acces to all items  
 - Take orders, it selects a customer and adds meals as they order it, total price at the bottom and buttom to send to kitchen or cancel  
 - Kitchen section will appear all the sent orders in that day in format of cards like tickets with status in kitchen, ordered by order number, once it's done the status is set to ready  
 - Checkout payment will show only the ready orders and total price for when the customers are finished eating  
 - all orders is just to see all the past orders, by date  
 - all users and all meals is to apply the CRUD functions  