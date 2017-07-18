
const fakeTweets = [
  'It\'s surprisingly common for sheep to be hit by lightning. In 1939, 835 were killed in a single strike in Utah.',
  'Seagull Nebula - a nursery for young stars spanning over 100 light years and dominated by the reddish glow of atomic hydrogen.',
  'Here’s what Atari’s upcoming Ataribox console will look like http://tcrn.ch/2t7Qazu',
  'She is a polar bear I think',
  'Ernie Hudson, Bill Murray, Dan Aykroyd and Harold Ramis on the set of Ghostbusters, 1984.'
]

// TODO actually go to twitter to get a tweet
// returns a promise which when it resolves returns a recent tweet
const getRecentTweet = () => {
  return new Promise((resolve, reject) => {
    const tweetIndex = Math.floor(Math.random() * fakeTweets.length);
    resolve(fakeTweets[tweetIndex]);
  });
}

module.exports = {
  getRecentTweet
}
