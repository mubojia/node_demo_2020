let events = require('events');


// ====================================================

// var emitter = new events.EventEmitter(); 
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('listener1', arg1, arg2); 
// }); 
// emitter.on('someEvent', function(arg1, arg2) { 
//  console.log('listener2', arg1, arg2); 
// }); 
// emitter.emit('someEvent', 'byvoid', 1991); 

// ====================================================

// let eventEmitter = new events.EventEmitter();
// let connectHandler = () => {
//     console.log('success link');
//     eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection', connectHandler);

// eventEmitter.on('data_received', () => {
//     console.log('success received')
// });

// eventEmitter.emit('connection');

// console.log('end');

// ====================================================

// let fs = require('fs');
// fs.readFile('input.txt', (err, data) => {
//     if (err) return console.error(err);
//     console.log(data.toString());
// })

// console.log("end!");