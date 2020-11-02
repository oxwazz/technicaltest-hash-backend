# Technical Test - Hash - Backend 😸

## Stack Tech :gear:

<h4>Back-end</h4>

- [x] RESTful API Using Express.js and PostgreSQL

<h4>Front-end</h4>

- [x] Bootstrap
- [x] Vue.js, Axios, Vue Router

## Entity Relationship Diagram (ERD) :triangular_ruler:
<img src="/5 - Soal 17 - Aplikasi Web Survey Harga/0 other/ERD - Aplikasi Web Survey Harga.svg" width="600">

## Page Route :computer:

* `/` - Index Page
  * User can view all data komoditas when accepted by Admin
* `/admin` - Admin Page
  * Admin can update status of accept
  * Admin can delete komoditas within status accepted or waiting for accept komoditas
* `/surveyor` - Surveyor Page
  * Surveyor can create komoditas
  * Surveyor can delete komoditas when the data is waiting for accept
* `/login` - Login Page
  * Page for login the user role Admin or Surveyor

## API Endpoint :mailbox_with_mail:
<h4>Komoditas Endpoint</h4>

* `POST /komoditas` - Create Komoditas
* `GET /komoditas?accept` - Read All Komoditas
* `PUT /komoditas/:id` - Update Komoditas
* `DELETE /komoditas:id` - Delete Komoditas

<h4>User Endpoint</h4>

* `POST /login` - Login User

## Screenshot :camera:

Screenshoot the App
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (489).png" width="950">
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (490).png" width="950">
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (491).png" width="950">
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (492).png" width="950">

Some Example Api test with Postman
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (493).png" width="950">
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (494).png" width="950">
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (495).png" width="950">
