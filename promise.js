'use strict';

function httpGet(yo) {

  return new Promise(function(resolve, reject) {

    setTimeout(() => {
      resolve('result' + yo);
    }, 1000);

  });
}

module.exports = httpGet;
