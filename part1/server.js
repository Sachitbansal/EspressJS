// Address of this server connected to network is // http://localhost:3000
// IP of this server is 127.0.0.1

const express = require('express');
const app = express()
const PORT = 3000;

let data = ['Sachit Bansal']

// Middleware to parse JSON bodies
app.use(express.json());

// HTTPS VERBS (methods) AND roUTES

// Type 1 get resquests

app.get('/', (req, res) => {
    // This is end point number 1
    // console.log('YOU hit an endpoint', req.method);
    // res.sendStatus(201)
    // Heere noe we are sending html content when user enters a link
    res.send(
        `
        <body style="color: blue; font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;"> 
            <h1>Welcome to the home page</h1>
            <p>${JSON.stringify(data)}</p>
        </body>

        `
    )
})

app.get('/dashboard', (req, res) => {
    console.log('YOU hit an endpoint', req.method);
    res.send(
        '<h1>Welcome to the dashboard page</h1>'+
        '<input type="text" placeholder="Enter your name" />'
    )
})

// Type 2 - API endpoits (non visual)

app.get('/api/data', (req, res) => {
    console.log('This will send data')
    res.send(data)
})

app.post('/api/data', (req, res) => {
    // Data comes when lets say new user is no be created and person clicks signup buton
    const newData = req.body;
    console.log('Data received:', newData);
    data.push(newData.name); // Assuming newData has a 'name' property
    res.sendStatus(201)

})

app.delete('/api/data', (req, res) => {
    data.pop();
    console.log('Data deleted');
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));