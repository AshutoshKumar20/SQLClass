const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gamma',
    password: 'ashu@1234',
});

let q = "Insert into user (id, username, email, password) values ?";
let users = [
    ["124", "124newUserB", "124b@gmail.com", "bcbc"],
    ["125", "125newUserC", "125c@gmail.com", "cdcd"],
];
try {
    connection.query(q, [users], (err, results) => {
        if (err) throw err;
        console.log(results);
    });
} catch (err) {
    console.log(err);
};

connection.end();
let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}