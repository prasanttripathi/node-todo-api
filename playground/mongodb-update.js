//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client)=>{
if(err){
return  console.log('unable to connect to DB');
}
console.log('connected to MongoDb server');
const db = client.db('ToDoApp');

//find one and update

db.collection('Users').findOneAndUpdate({
  _id : new ObjectID("5a8c63225a262f1f8c7138d6")
},{
  $set : {
   name : 'Aman'  // it won't work without update operator $set
 },
  $inc: { age: 1}
}
 ,
{
  returnOriginal : false
}).then((res)=>{
  console.log(res);
})

//client.close();

});
