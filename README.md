# Technical Test - BIGIO.id - Backend 😸

## 1) Soal 13 - Palindrome ✅

Example Test Case
```
- Test Case 1 -

Input:
phobia

Output:
phobiaibohp

- Test Case 2 -

Input:
Halim

Output:
HalimilaH
```

Answer with JavaScript
```
const palindrome = () => {
  let word = ''
  let palindrome = ''

  while (true) {
    const input = prompt("Masukkan Nilai:")

    if (input == -1) {
      break
    }

    word += input

    if (word.length > 1) {
      for (let i = word.length-2; i >= 0; i--) {
        palindrome += word[i]
      }
    }

    console.log('Output: ' + word + palindrome)
    palindrome = ''
  }
}

palindrome()
```

link: https://repl.it/@oxwazz/Soal13-Palindrome

## 2) Soal 14 - Hourglass ✅

Example Test Case
```
- Test Case 1 -

Input:
3

Output:
 * * * 
  * * 
   * 
  * * 
 * * * 

- Test Case 2 -

Input:
6

Output:
 * * * * * * 
  * * * * * 
   * * * * 
    * * * 
     * * 
      * 
     * * 
    * * * 
   * * * * 
  * * * * * 
 * * * * * * 
```

Answer with JavaScript
```
const hourglass = (num) => {
  let space = 0
  for (let i = num; i > 0; i-- ) {
    console.log(' '.repeat(space),'* '.repeat(i))
    space++
  }
  space = num-1
  for (let i = 1; i < num; i++ ) {
    space--
    console.log(' '.repeat(space),'* '.repeat(i+1))
  }
}

hourglass(6)
```

link: https://repl.it/@oxwazz/Soal14-hourglass

## 3) Soal 15 - Butterfly ✅

Example Test Case
```
- Test Case 1 -

Input:
3

Output:
1   1
12 21
12321
12 21
1   1

- Test Case 2 -

Input:
6

Output:
1         1
12       21
123     321
1234   4321
12345 54321
12345654321
12345 54321
1234   4321
123     321
12       21
1         1
```

Answer with JavaScript
```
const butterfly = (num) => {
  let word = ''
  let space = 0
  let pal = ''

  for (let i = 1; i <= num; i++) {
    if (i == 2) {
      space++
    } else if (i >= 2) {
      space += 2
    }
  }

  for (let i = 1; i <= num; i++) {
    word += i

    for (let i = word.length-1; i >= 0; i--) {
      if (!(i == num-1)) {
        pal += word[i]
      }
    }

    console.log(word + " ".repeat(space)+pal)
    pal = ''

    if (space - 2 < 0) {
      space = 0
    } else {
      space-=2
    }
  }

  space = 1

  for (let i = num-1; i >= 0; i--) {
    word = word.slice(0,i)

    for (let i = word.length-1; i >= 0; i--) {
      if (!(i == num-1)) {
        pal += word[i]
      }
    }

    console.log(word + " ".repeat(space)+pal)
    pal = ''
    space+=2
  }
}

butterfly(6)
```

link: https://repl.it/@oxwazz/Soal15-butterfly

## 4) Soal 16 - Rancangan Basis Data - Aplikasi Point Of Sales (POS) ✅
<img src="4 - Soal 16 - Rancangan Basis Data - Aplikasi POS/Rancangan Basis Data - Aplikasi POS.svg" width="600">

## 5) Soal 17 - Aplikasi Web Survey Harga ✅

### Stack Tech :gear:

<h4>Back-end</h4>

- [x] RESTful API Using Express.js and PostgreSQL

<h4>Front-end</h4>

- [x] Bootstrap
- [x] Vue.js, Axios, Vue Router

### Entity Relationship Diagram (ERD) :triangular_ruler:
<img src="/5 - Soal 17 - Aplikasi Web Survey Harga/0 other/ERD - Aplikasi Web Survey Harga.svg" width="600">

### Page Route :computer:

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

### API Endpoint :mailbox_with_mail:
<h4>Komoditas Endpoint</h4>

* `POST /komoditas` - Create Komoditas
* `GET /komoditas?accept` - Read All Komoditas
* `PUT /komoditas/:id` - Update Komoditas
* `DELETE /komoditas:id` - Delete Komoditas

<h4>User Endpoint</h4>

* `POST /login` - Login User

### Screenshot :camera:

Screenshoot the App
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (489).png" width="950">
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (490).png" width="950">
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (491).png" width="950">
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (492).png" width="950">

Some Example Api test with Postman
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (493).png" width="950">
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (494).png" width="950">
<img src="5 - Soal 17 - Aplikasi Web Survey Harga/0 other/screenshot/Screenshot (495).png" width="950">
