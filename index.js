const generateTextFart = require('./fartGenerator').generateTextFart;


// Calls text generator function and prints out the result

generateTextFart()
  .then((result) => {

    console.log(result);
  })
