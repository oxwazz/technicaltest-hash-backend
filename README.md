# Technical Test - Hash - Backend 😸

## Stack Tech :gear:

### Backend
* [Node.js](https://nodejs.org/en/)
  * [express](https://www.npmjs.com/package/express)
  * [pg](https://www.npmjs.com/package/pg)
  * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  * [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [PostgreSQL](https://www.postgresql.org/)

## Entity Relationship Diagram (ERD) :triangular_ruler:
<img src="./other/ERD - Hash - 1.svg" width="600">

## API Endpoint :mailbox_with_mail:

### User Endpoint
* `POST /user` - Register User 
* `+ POST /user/login` - Login User
* `POST /user/logout` - Logout User (auth)
* `GET /user` - Read Info User (auth)
* `PUT /user` - Update Info User (only name | auth)
* `DELETE /user` - Delete user (auth)

### Product Endpoint
* `POST /product` - Create Product (auth)
* `GET /product` - Read All Product (auth)
* `PUT /product/:id` - Update Product (auth)
* `DELETE /product/:id` - Delete Product (auth)

### Order Endpoint
* `POST /order` - Create User Order (auth)
* `GET /order` - Read All User Order (auth)
* `PUT /order/:id` - Update Order (auth)
* `DELETE /order/:id` - Delete Order (auth)

## Screenshot :camera:
Some Example Api test with Postman
<img src="./other/SS - 1.png" width="950">
<img src="./other/SS - 2.png" width="950">
<img src="./other/SS - 3.png" width="950">
<img src="./other/SS - 4.png" width="950">
