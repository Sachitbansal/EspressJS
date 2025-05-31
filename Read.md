### TO create package.json file

npm init -y

### TO install express

npm install express

### COmmand to run server file

nodemon server.js

/ After adding script to package.json 
    "dev": "node server.js",

file can by run from "npm run dev"

### Add nodemon to devdependencies
npm install --save-dev nodemon


200 GIVES US (OK) RESPONCE AND 201 GIVES US (CREATED) RESPONSE

### installed (rest client) to simulate get and post requests

// Middleware to parse JSON bodies
app.use(express.json());