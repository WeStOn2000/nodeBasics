const express = require('express');
const bodyParser =  require('body-parser');
const cookieParser = require('cookie-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'pug');
app.use(cookieParser());
app.use('/static',express.static('public'));

 const  mainRoutes = require('./routes');
 const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req,res,next) => {
 const err = new Error ('Not Found');
 err.status = 404;
 next(err);
});

app.use((err,req,res,next) => {
    res.locals.error = err;
    res.status(err.status || 500);
    res.render("error");
});

app.listen(3000, () => {
console.log('Port Activated:3000');
});