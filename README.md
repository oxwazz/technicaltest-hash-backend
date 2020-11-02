# Technical Test - Hash - Backend 😸

## Stack Tech :gear:

### Backend
- Node.js
  - Express
  - pg
  - jsonwebtoken
  - bcryptjs
- PostgreSQL

## Entity Relationship Diagram (ERD) :triangular_ruler:
<img src="./other/ERD - Hash - 1.svg" width="600">

## API Endpoint :mailbox_with_mail:

### Legends
- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `#f03c15`
- ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `#c5f015`
- ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) `#1589F0`

### User Endpoint
* `POST /user` - <p style='color:red'>This is some red text.</p> Register User
* `POST /user/login` - Login User
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
