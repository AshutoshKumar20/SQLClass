const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gamma',
    password: 'ashu@1234',
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// let q = "Insert into user (id, username, email, password) values ?";

// let data = [];
// for (let i = 1; i <= 100; i++) {
//     data.push(getRandomUser());
// };

// try {
//     connection.query(q, [data], (err, results) => {
//         if (err) throw err;
//         console.log(results);
//     });
// } catch (err) {
//     console.log(err);
// };

// connection.end();

app.get("/", (req, res) => {
    res.send("This is my home page");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});