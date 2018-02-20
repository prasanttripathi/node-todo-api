//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {fullname : 'Prashant',age : 26};
//
// var {fullname}  = user; // this is the object that we want to destructure
// console.log(fullname);



MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client)=>{
if(err){
return  console.log('unable to connect to DB');
}
console.log('connected to MongoDb server');
const db = client.db('ToDoApp');

// db.collection('ToDos').insertOne({
// text : 'something to do',
// completed : false
// }, (err,result)=>{
//
//   if(err){
//     return console.log('unable to insert todo');
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });
//
// db.collection('Users').insertOne({
// name : 'Prashant',
// age  : 26,
// location : 'Bangalore'
// },(err,result)=>{
//   if(err){
// return    console.log('unable to insert user');
//   }
// //  console.log('user inserted  : ', JSON.stringify(result.ops,undefined,2));
// console.log(result.ops[0]._id.getTimestamp());
// });

client.close();

});
