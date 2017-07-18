const getRecentTweet = require('./tweetRepo').getRecentTweet;

const generateTextFart = () => {
return new Promise((resolve, reject) => {
  getRecentTweet()
    .then((result) => {
      let textFart = '';
      /*
      * Here is where you will do the replacement of the original tweet and do the text transformation
      * the varible result is the tweet that you are getting back from our current mock twitter repository
      * you will want to replace the contents of the variable textFart with the replaced value
      * below you will see the original tweet being printed, you can also print your attempt in the same way
      */
      console.log("This is the original tweet:", result);
      resolve(textFart);
    })
  })
}

  module.exports = {
    generateTextFart
  }
