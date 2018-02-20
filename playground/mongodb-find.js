//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client)=>{
if(err){
return  console.log('unable to connect to DB');
}
console.log('connected to MongoDb server');
const db = client.db('ToDoApp');


//
// db.collection('ToDos').find({
//   _id :  new ObjectID('5a8c698b3a9abe46730b0fc5')
// }).toArray().then((docs)=>{
// console.log('To dos : ');
// console.log(JSON.stringify(docs,undefined,2));
// }, (err)=>{
//   console.log('unable to fetch todos ' , err);
// });


//
// db.collection('ToDos').find().count().then((count)=>{
// console.log('To dos count: ',count);
// }, (err)=>{
//   console.log('unable to fetch todos ' , err);
// });


db.collection('Users').find({name : 'Prashant'}).toArray().then((docs)=>{
console.log('To dos : ');
console.log(JSON.stringify(docs,undefined,2));
}, (err)=>{
  console.log('unable to fetch todos ' , err);
});

//client.close();

});
