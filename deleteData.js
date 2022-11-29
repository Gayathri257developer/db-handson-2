const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);

console.log('created a client');

async function main(){
    await client.connect();
    console.log('client connected');
  
    const database = client.db('Human_Resource1');
    const employee = database.collection('employee1');
  
  //8. Delete all the documents from ""employee"" where last company is Y"
     const response2 = await employee.deleteMany({
        "lastCompany": /Y/
     
    })
    console.log('done..',response2);
}
main();