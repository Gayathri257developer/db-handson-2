const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);

console.log('created a client');

async function main(){
 await client.connect();
  console.log('client connected');

  const database = client.db('Human_Resource1');
  const employee = database.collection('employee1');

//7. Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.
  const response = await employee.updateMany(
    {
    "salary" : {
        $gt : "70000"
    }
},
    {
        $set : {
          "salary" : "65000"
        }
    }
  );

  console.log(response);

}
main();