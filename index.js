const express = require('express');

const path = require("path");

const app =  express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/' , (request , response) => {
    response.render('index', {title : 'Home'});
});
app.get('/products' , (request , response) => {
    response.render('products', {title : 'Products'});
});
app.get('/cart' , (request , response) => {
    response.render('cart', {title : 'Cart'});
});
app.get('/login' , (request , response) => {
    response.render('login', {title : 'Login'});
});

const server = app.listen(8888 , () =>{
    console.log(`we are on port ${server.address().port}`);
});
