
# Node with Express API.

## Node.Js

- Node.js is a Javascript.
- runtime: a program that runs another program
- run JS in local machine
- built on C++
- powered by google chrome v8 engine
- used to build: API, real time app, micro-services.


## architecture
- single threded
- mom-blocking I/O operation
- event loop
=======================
## modules:
- file systems
- http
- path
- url
- os
- event
- callbacks/promises/ async-await: time consuming task lai wait nagarne, background ma aafai run hune lai async vaninx. tyasko resulma yes or no aaunx tyo dita resul ko handle garne lai async programming vaninx.

yaslai dui tarikale garinx,1.callbacks, 2.promises.
==================================


##### express js


- it is a node.js. API/backend framework.
- used to build API(application program interface)
- it simplify the HTTP module of node JS.
- minimalist, fast and unopinionated framework.










## API
- API format: JSON(java script object notation)
- REST API(Representation state transfer)

## JSON
- JS object => JSON.stringify () => JSON 
- JSON => JSON.parse() => JS object (convert only)




===============
## HTTP method
1. get - data read 
2. post - create (product)
3. put - update 
4. delete - delete
5. patch - partial update 
6. 

## layered architecture
1. API
  a. routes: handel routes/ endpoints
  b. controller: handle request/response
  c. middlewares: handle request/response, logging, auth

2. business logic layer
  a. services
  b. 
3. database logic layer
  a. models 
4. database layer

====================

## tools
- locally: MongoDB compass(shell include)
- cloud : mongoDB Atlas
**run mongoDB in compass**
- open mongoDB compass
- Setup a new connection








=================================
## mongoDB ##
- non- relational database
- data store in collections and documents
- database: main container, all collections are stored here
- collection: equivalent to table of relational database
- documents:equivalent to  row
- field: equivalent to column

## tools and used
- locally: mongoDB compass
- cloud: mongoDB Atlas




** run mongodb in compass **

1. open mongoDB compass
2. setup a new connection (mongodb://localhost:27017)

====================


## MongoDB queries

- `show db` : show list of database
- `use <dbname>` :use existing db or create a new one

1. create
- `db.user.insertMany({name:"hari"},{name:"ab"})`
- `db.users.insertMany({name:"hang"},{name:"rani"})`


2. read
- `db.users.find({age:20})` return multiple result if exist
- `db.users.findOne({age:20})`

3. update
- `db.users.findOne({age:29})`
- `db.users.updateOne({name:"ram"},$set:{age:30}:)`

4.delete
- `db.users.deleteOne({age:20})`


## complex filter
1. $eq: db.user.find({name:{$eq:"hari}})
2. $ne: db.users.find({name:{$ne:"hari}})
3. $gt/gte : db.user.find({age:($gt:49)})
4. $lt/lte: db.user.find ({age:{$lt:50}})
5. $and: db.user.find($and: [ {name:"hari"}, {age:49}])
6. $or: db.user.find ({$or: [ {name: hari}, {age:45} ]})
7. $in: db.users.find ({name:$in: ["hari", "ram"]})
8. $regex:


 a. limit: db.users.find().limit(2)
 b. skip: db.users.find().skip(1)
 c. sort: db.users.find().sort({name:1}) 1: ASC, -1:DESC


## Mongoose
- ODM of MongoDB for Node.js
- create Schema
- validate schema
- create models using schema
- relationship




=====================================
## cryptography:

## encryption
- encryption : converting readable text to unreadable/cipher text called.
- for eg.: hello = jhifjhao- ->
- decryption : convert to cipher text to readable.
- f.g : hkahkjahdl = hello.

 # **types ** 
- Symmetric: same key is use for encryption and decryption
- Assymetric: different keys are used for encryption and decryption, public/ private key (RSA).

 # **hashing **
- one way encryption
- convert the readable text to cipher text but not back to readable.
- hashing always returns same cipher
- hello => 4567777gtt

## salt: for hashing ko problem lai solve,

- adding random characters in the hash
- hello ->3656254624guujh63
- hello =>2253hgdi738263t6
- 
25 days
==============


## authentication & authorization (26 days)

1. authentication: who are you?
2. authorization: what you can do? user role

## JSON Web Token(JWT) 
- self verified
- Tamper proof
- used for both authentication & authorization


## JWT structure
- Header
- Payload
- SIgnature



## Storage (26)
1. cookie Storage
 - size: 4kb
 - storage: server & browser
 - expiry : cookie expiry

2. local storage
 - size: 5-10MB
 - storage only browser
 - expiry: never

3. session storage
 - size : 5MB
 - storage: only by browser
 - expiry: on tab close


###  Auth Process
1. login/ Register success
2. generate token JWT
3. store token: cookie, session, local storage
4. append the token in every request to handle auth.
5. verified the token and authenticate/authorize user




## middleware (27)

- function that lies between req and res.
- function that has access of both req and res object.
- it has additional functionality to go to next() middleware call.

    browser -----> req-----> server
    Middleware, middleware, middleware
    server ---->res---->browser


## Usage
- logging
- authentication & authorization
- req & res object modification
- req and res object modification
- data validation
- error handling
- ZOD data validation

===========


## data validation (28)

============================

## file upload (day 30)

1. file with data -> send using formData
2. use `milter` package to handle form data
 - when file is sent through form data, multer handles it 
 - store the temporarily, local folder o RAM
 - Upload the file 
 - remove the file after successfully upload
 - file can be single or multiple

3. cloudinary: upload file to cloudinary(store your files)
  - signin/signup to cloudinary
  - create an API key or existing API key
  - use cloudinary SDK, and use your API key here
  - 
4. receive the file url from uploaded file in cloudinary
5. store the URL in database


## file upload (day31)
===========
- product: filter, sort, pagination
- product count, get brands, category
- order management 34 days
- payment integration(khalti, stripe ) 34



- file upload in cloud ordinary


## reset password(34) days
- reset password/ send email
## reset password

### forgot password
  1. user request for forgot password
  2. user inputs email address
  3. using email address, find the user, create a reset password link token
  4. send the reset password link to the email
  
  ## reset password
  1. user click on the reset password link from the received email
  2. the link contains the reset-password rout with token
  3. send request for reset password with the new password and token
  5. verify the the user and token
  6. update the password.
==============================
## mongoDB aggregation(35)
- performing operation in multiple document (table)
- complex queries
- filtering in multiple documents
- data formatting

1. $match => filtering
2. $lookup => LEFT JOIN
3. $unwild => INNER JOIN
4. $project=> data formatting
5. $group => complex ground operation
======================
## deployment(36)
- vercel
- deployment
==========
- template engine 

- AI integration(Gemini)
-