The backend is written in TypeScript and uses Node.js, and Express for the server. It also uses CORS for restricting API access, Mongoose for our database schema, MongoDB as our database, and nodemon for updates and typescript translation

Steps to run
- cd into backend folder
- run ```npm install``` to install node modules
- create a file named '.env' and copy everything from the .env.example file into there
- make sure to get the MongoDB URI from MongoDB and update it in the .env file
- run ```npm run dev``` to start the server, the server should start on port 8080 if the .env file is loaded and port 8000 if it is not


How to get MongoDB URI
- Sign into MongoDB using google sign in with the username and password
- Click 'database access' underneath Security on the left side, click 'add new database user', make a new user and save the username and password, then click 'add user' at the bottom
- Now click 'clusters on the left side, then click 'connect' in the middle, Click 'Drivers' and copy the connection string
- if it says vishnupatel instead of your username switch it with your username, then switch the <db_password> with your password
- In the middle of .net/?retryWrites in the connection string add the name of the database within the cluster we are trying to connect to
- for example if we want to connect to database 'Users' it should be .net/Users?retryWrites
- This is the connection string to replace URI with in the .env file


Tests
- run ```npx jest``` to run tests