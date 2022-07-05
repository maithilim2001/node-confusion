const express = require('express');
const bodyparser = require('body-parser');

const promotions = express.Router();

promotions.use(bodyparser.json());

promotions
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the promotions');
  })
  .post((req, res, next) => {
    res.end(
      'Will add the promotions' +
        req.body.name +
        'with details' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('Will update the promotions'+req.body.name +'with detail' +req.body.response);
  })
  .delete((req, res, next) => {
    res.end(
      'Delete the promotions' +
        req.body.name +
        'with details' +
        req.body.description
    );
  });
  promotions.route('/:promotionId').get((req, res, next) => {
    res.end(`got the promotion id: ${req.params.promotionId}`);
  })
  .post((req, res, next) => {
     res.end(
      'Will add the promotions' +
        req.body.name +
        'with details' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.end('Update the promtion with id'+req.params.promotionId+'with details'+req.body.description);
  })
  .delete((req, res, next) => {
    res.end('Delete the promotions' + req.params.promotionId);
  });

module.exports = promotions;
