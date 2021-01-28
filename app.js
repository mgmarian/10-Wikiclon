const express = require ('express');
const morgan = require ('morgan');
const nunjucks = require('nunjucks');
const {db} = require('./models');
const router = require('./routes');
var bodyParser = require('body-parser');

const app = express();

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'));
//app.use(express.json());
app.use('/', router);


// app.use(app.router);
// routes.initialize(app);


var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


app.get('/', (req, res) => res.send('Bienvenido al Index'))


db.sync()
.then(function () {
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);
