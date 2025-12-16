const express = require('express');
const mysql = require('mysql');
const body_parser = require('body-parser');
const session = require('express-session');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'pic')));
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.set('view engine', 'ejs');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'project',
    user: 'root',
    password: ''
});

app.use(session({
    secret: '1234567890abcdefghijklmnopqrstuvwxyz',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

connection.connect((error) => {
    console.log('MySQL Database is connected Successfully');
});

app.get('/', (request, response) => {
    const query = `SELECT * FROM product LIMIT 100`;

    connection.query(query, (error, result) => {
        if (!request.session.cart) {
            request.session.cart = [];
        }
        response.render('product', { products: result, cart: request.session.cart });
    });
});

app.post('/add_cart', (request, response) => {
    const { product_id, product_name, product_price, product_image } = request.body;

    let count = 0;

    for (let i = 0; i < request.session.cart.length; i++) {
        if (request.session.cart[i].product_id === product_id) {
            request.session.cart[i].quantity += 1;
            count++;
        }
    }

    if (count === 0) {
        const cart_data = {
            product_id: product_id,
            product_name: product_name,
            product_price: parseFloat(product_price),
            quantity: 1,
            product_image: product_image
        };
        request.session.cart.push(cart_data);
    }

    response.redirect('/');
});

app.get('/remove_item', (request, response) => {
    const product_id = request.query.id;

    for (let i = 0; i < request.session.cart.length; i++) {
        if (request.session.cart[i].product_id === product_id) {
            request.session.cart.splice(i, 1);
        }
    }

    response.redirect('/');
});

app.listen(3000, () => {
    console.log('Server has started on port number 3000');
});
