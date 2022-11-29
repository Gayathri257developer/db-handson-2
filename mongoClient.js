const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/';

const client = new MongoClient(url);

console.log('created client');

async function main(){
    await client.connect();

    const database = client.db('Human_Resource1');
    const employee = database.collection('employee1');

    console.log("create a variable for collection employee");

//    const employeeData = await employee.findOne({
//     "first" : "gayu",
//     "last" : "dr"
//    })
    console.log(employee);



}
main();