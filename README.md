# Spicy Pizza Parlor

 - This is an interactive pizza ordering system that allows the customer to order online and the Admin to view and excute the orders.

# Built with

- React 
- Redux
- webpack
- Axios
- Material UI

### Setup

 - Fork and clone respositor
 - npm install
 - SQL datatbase ('pizza_parlor')
 - npm run server
 - npm run client
 - trello board (https://trello.com/b/aWXfG8D6/redux-pizza-parlor)


**Import data**

The admin wants all orders store into SQL database. Anytime a customer made a purchase a new order will be automatically push into the SQL so admin can review what other orders has been made. 


### GET PIZZA  

 [x] create get request to `/api/pizza`, to retrieve the pizza and display them on our Home page. 

*, *name*, *description*, *image_path* and *cost* properties. 


**Returns** 


### ORDER - SELECT PIZZA

[When visiting [http://localhost:3000/](http://localhost:3000/) will display all of the pizzas on the screen. Allowing users to add or remove each pizza they would like to order. 

![Select Pizza View](wireframes/screen-one.png)

### ORDER - ENTER CUSTOMER INFORMATION

Enter user information: *name*, *street address*, *city* and *zip*.  Click the next button that brings the user to the **checkout** page.

![Select Pizza View](wireframes/screen-two.png)

### ORDER - CHECKOUT

Users are not be able to modify item totals on this screen. When they click checkout, the user information, order total and array of pizzas are sent to the server database. After the checkout is complete, navigate the user back to the **select pizza** page.

![Select Pizza View](wireframes/screen-three.png)

### ADMIN - ORDERS

[x] This page will not appear to the client. Eventually the client would like to add authentication but for now, it will be available to anyone with the url [http://localhost:3000/admin](http://localhost:3000/admin). This page will display the name, time and order total for each of the orders placed.

![Select Pizza View](wireframes/screen-admin.png)



