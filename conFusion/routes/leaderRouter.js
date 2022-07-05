const express = require('express');
const bodyparser = require('body-parser');

const leader = express.Router();

leader.use(bodyparser.json());

leader
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the leader details');
  })
  .post((req, res, next) => {
    res.end('Operation not supported');
  })
  .put((req, res, next) => {
    res.end(
      'Will update the leader name' +
        req.body.name +
        'with details' +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end(
      'Delete the leader name' +
        req.body.name +
        'with details' +
        req.body.description
    );
  });
  leader.route('/:leaderId').get((req, res, next) => {
    res.end(`got the leader id: ${req.params.leaderId}`);
  })
  .post((req, res, next) => {
     res.end('Not supported');
  })
  .put((req, res, next) => {
    res.write('Will update the leader' +
    req.body.name +
    'with details' +
    req.body.description);
  })
  .delete((req, res, next) => {
    res.end('Delete the leader' + req.params.leaderId);
  });
// leader.route().get('/:leaderId');

module.exports = leader;
