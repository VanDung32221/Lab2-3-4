var express = require('express');
var expressHBS = require('express-handlebars');
var app = express();

app.engine('handlebars', expressHBS({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout:'main'
}));

app.set('view engine', 'handlebars');

app.get('/', function (req,res){
    // res.send('Hello Con Di')
    //var arr = [4,5,7,9,3,2,6,2,5,7];

    //res.render('home', {array: arr});
    res.render('home');
});

app.post('login',function (req,res){

});

app.listen(process.env.PORT || '5000')