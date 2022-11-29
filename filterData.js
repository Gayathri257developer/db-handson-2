const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/';

const client = new MongoClient(url);

console.log('created client');

async function main(){
    await client.connect();
    console.log('client connected');

    const database = client.db('Human_Resource1');
    const employee = database.collection('employee1');

    // 3. Query the collection ""employee"" and list all the documents
    const data = await employee.find().toArray();
   
    console.log(data);

    const salaryquery = {"salary" : {$gt : "30000"}}

    // 4. Query the collection ""employee"" and list the employees who are having salary more than 30000
    const salary = await employee.find(salaryquery).toArray();
    
    console.log(salary);

    const expquery = {"overallExp" : {$gt : "2"}}

    // 5. Query the collection ""employee"" and list the employees who are having experience more than 2 years.
    const experience = await employee.find(expquery).toArray();
  
    console.log(experience);

    const andquery = {"yearGrad" : {$gt : "2015"},"overallExp" : {$gt : "1"}}
    
    // 6.Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 
    const dataquery = await employee.find(andquery).toArray();
    
    console.log(dataquery);

}
main();
