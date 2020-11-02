<img src="./other/BG - header.png">

# Simple Order API 😸
_**Simple Order API**_ is an RESTful API service it can use for order some product. This API create using [express] and [PostgreSQL].

## Stack Tech :gear:

### Backend
* [Node.js]
  * [express]
  * [pg]
  * [jsonwebtoken]
  * [bcryptjs]
* [PostgreSQL]

### Tools
* [Postman]
* [TablePlus]
* [VSCode]

## Entity Relationship Diagram (ERD) :triangular_ruler:
<img src="./other/ERD - Hash - 1.svg" width="640">

## API Endpoint :mailbox_with_mail:

### Legends
:small_blue_diamond: `without authentication` <br>
:small_orange_diamond: `with authentication`


### User Endpoint
* :small_blue_diamond: `POST /user` - Register User
* :small_blue_diamond: `POST /user/login` - Login User
* :small_orange_diamond: `POST /user/logout` - Logout User (auth)
* :small_orange_diamond: `GET /user` - Read Info User (auth)
* :small_orange_diamond: `PUT /user` - Update Info User (only name | auth)
* :small_orange_diamond: `DELETE /user` - Delete User (auth)

### Product Endpoint
* :small_orange_diamond: `POST /product` - Create Product (auth)
* :small_orange_diamond: `GET /product` - Read All Product (auth)
* :small_orange_diamond: `PUT /product/:id` - Update Product (auth)
* :small_orange_diamond: `DELETE /product/:id` - Delete Product (auth)

### Order Endpoint
* :small_orange_diamond: `POST /order` - Create User Order (auth)
* :small_orange_diamond: `GET /order` - Read All User Order (auth)
* :small_orange_diamond: `PUT /order/:id` - Update Order (auth)
* :small_orange_diamond: `DELETE /order/:id` - Delete Order (auth)

## Screenshot :camera:
Some Example Api test with Postman
<img src="./other/SS - 1.png">
<img src="./other/SS - 2.png">
<img src="./other/SS - 3.png">
<img src="./other/SS - 4.png">


[Node.js]: https://nodejs.org/en/ "Node.js - javascript runtime"
[express]: https://www.npmjs.com/package/express "express - npm package"
[pg]: https://www.npmjs.com/package/pg "pg - npm package"
[jsonwebtoken]: https://www.npmjs.com/package/jsonwebtoken "jsonwebtoken - npm package"
[bcryptjs]: https://www.npmjs.com/package/bcryptjs "bcryptjs - npm package"
[PostgreSQL]: https://www.postgresql.org/ "PostgreSQL - database sql"
[Postman]: https://www.postman.com/ "Postman - application"
[TablePlus]: https://tableplus.com/ "TablePlus - application"
[VSCode]: https://code.visualstudio.com/ "Visual Studio Code - application"
