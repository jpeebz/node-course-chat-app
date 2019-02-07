var moment = require('moment');

var date = moment();
// date.add(100, 'year');
// date.subtract(100, 'year');

// CHALLENGE
// console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));