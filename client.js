let httpGet = require('./promise');

httpGet('yo')
  .then(
    response => console.log('Fulfilled', response),
    error => console.log('Rejected:', error)
  );