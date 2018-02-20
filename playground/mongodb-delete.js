//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client)=>{
if(err){
return  console.log('unable to connect to DB');
}
console.log('connected to MongoDb server');
const db = client.db('ToDoApp');

//delete many
// db.collection('ToDos').deleteMany({text : 'Eat lunch'}).then((result)=>{
// console.log(result);
// },(err)=>{
//   console.console.log('could not delete record ', err);
// });


//delete one


// db.collection('ToDos').deleteOne({text : 'Eat Lunch'}).then((result)=>{
// console.log(result);
// },(err)=>{
//   console.console.log('could not delete record ', err);
// });


// db.collection('Users').deleteMany({name : 'Prashant'}).then((res)=>{
//   console.log(res)
// });

db.collection('Users').findOneAndDelete({_id :  new ObjectID("5a8c65fd9d1efe2288ca2ae9")}).then((res)=>{
  console.log(res);
});


//find one and delete

// db.collection('ToDos').findOneAndDelete({completed : false}).then((result)=>{
// console.log(result);
// },(err)=>{
//   console.console.log('could not delete record ', err);
// });


//client.close();

});
