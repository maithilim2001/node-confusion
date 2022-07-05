const express = require('express');
const bodyparser = require('body-parser');

const dishrouter = express.Router();

dishrouter.use(bodyparser.json());

dishrouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the dishes');
  })
  .post((req, res, next) => {
    res.end(
      'Will add the dishes' +
        req.body.name +
        'with details' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation cannot be performed');
  })
  .delete((req, res, next) => {
    res.end(`Delete the dishes
     ${req.body.name}
      with details 
      ${req.body.description}`);
  });

dishrouter.route('/:dishId').get((req, res, next) => {
  res.end(`got the dish id: ${req.params.dishId}`);
})
.post((req, res, next) => {
   res.end(
    'Will add the dishes' +
      req.body.name +
      'with details' +
      req.body.description
  );
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.write(' Operation Not supported on dishes');
})
.delete((req, res, next) => {
  res.end('Delete the dishes' + req.params.dishId);
});


module.exports = dishrouter;
