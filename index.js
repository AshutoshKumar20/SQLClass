const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gamma',
    password: 'ashu@1234',
});

try {
    connection.query("SHOW DATABASES", (err, results) => {
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