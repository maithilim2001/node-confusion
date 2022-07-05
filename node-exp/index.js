const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const dishrouter = require('./routes/dishRouter');
const promotions = require('./routes/promotions');
const leader = require('./routes/leaderRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use('/dishes', dishrouter);
app.use('/promotions', promotions);
app.use('/leader', leader);

app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());





// app.use((req,res,next) => {
//   //console.log(req.headers);

//   res.statusCode = 200;
//   res.setHeader('Content-Type','text/html');
//   res.end('<html><body><h1>This is an express server</h1></body></html>');
// });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
