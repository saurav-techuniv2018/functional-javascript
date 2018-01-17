let duckCount = require('./duckCount');

console.log('Test for no arguments:', duckCount() === 0);

console.log('Test for arguments where all objects contain the quack properties: ',
    duckCount(
        { quack: true },
        { quack: "quack!!" },
        { quack: 3 }
    ) === 3);

let duck = { quack: 1 };
let notDuck = Object.create({ quack: "QUACK" });
console.log('Test for arguments where one is a duck and other inherits from prototype: ', duckCount(duck, notDuck) === 1);

console.log('Test for arguments where all of the arguments inherit from Object prototype:', duckCount(
    Object.create({ quack: "quack" }),
    Object.create({ quack: function () { return "quack"; } }),
    Object.create({ quack: ['quack', 'quaack', 'quaaack'] })
) === 0)