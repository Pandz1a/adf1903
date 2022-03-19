const express = require('express');
const path = require('path');
const dataFromFunctionsJS = require('./function');
const app = express();
const port = process.env.PORT || 3000;
const imie = "wiola";
const outsideSubtitle= "To są zajęcia z noda";

app.set('view engine', 'hbs')
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/js', express.static(path.join(__dirname, './js')));

app.get('/', function(req, res){
    res.render('index.hbs', {
        pageTitle: "Zajęcia AFM 19.03.2022",
        subtitle: outsideSubtitle,
        example: dataFromFunctionsJS.sayHello2()
    });
})

app.get('/about', function(req, res){
    res.render( 'about.hbs', {
        pageTitle: "Zajęcia AFM 19.03.2022",
        subtitle: outsideSubtitle,
        example1: dataFromFunctionsJS.sayHello3()
    });
})

app.get('/pricing', function(req, res){
    res.send( "<h2>Cennik </h2>");
})

app.get('/team/zosia', function(req, res){
    res.send( "<h2>Strona  o zosi </h2>");
})

app.get('/team/marcin', function(req, res){
    res.send( "<h2>Strona  o Marcinie </h2>");
})

app.get('/team/ffffff', function(req, res){
    res.send( "<h2>Strona  o fffff </h2>");
})


app.listen(port, (err) => {
    if (err) {return console.log(`wystąpił błąd ${err.message}`)}
    return console.log(`apka działa na porcie ${port}`);

})

