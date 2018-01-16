let compareArrays = require('../utilities/compareArrays');
let getShortMessages = require('./getShortMessages');

let input1 = [
    { message: 'nunc faucibus a pellentesque sit' },
    { message: 'ipsum dolor sit amet consectetur' },
    { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi. In egestas erat imperdiet sed euismod nisi. In vitae turpis massa sed elementum. Non blandit massa enim nec dui nunc mattis. Semper feugiat nibh sed pulvinar proin. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Ac turpis egestas integer eget. Maecenas pharetra convallis posuere morbi leo urna molestie. Eget nulla facilisi etiam dignissim diam quis.' }
];
let expectedOutput1 = [
    'nunc faucibus a pellentesque sit',
    'ipsum dolor sit amet consectetur'
];
console.log('Test for input containing message property as strings of various length:',
    compareArrays(getShortMessages(input1), expectedOutput1) === true);
