const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/';

const client = new MongoClient(url);

console.log('created client');

async function main(){
    await client.connect();
    console.log('client connected');

    // 1. Create a database , give it name like ""Human_Resource"". 
    const database = client.db('Human_Resource1');

    // 2. Create a collection inside this named ""employee""
    const employee = database.collection('employee1');

    const employeeData = [{
            "firstName": "John",
            "lastName": "Doe",
            "salary": "25000",
            "department": "HR",
            "lastCompany": "X",
            "lastSalary": "10000",
            "overallExp": "2",
            "contactInfo": "1234567890",
            "yearGrad": "2016",
            "gradStream": "CSE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "roh",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          }]

          const response = await employee.insertMany(employeeData);
          console.log('done...',response);
}
main();