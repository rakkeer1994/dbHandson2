const { MongoClient } = require("mongodb");
const dbUrl = "mongodb://localhost:27017/school";
MongoClient.connect(dbUrl, (err, db) =>
 {if(err) {console.error("Error connecting to database: ", err);
 return;}
 const database=db.db("school1")

//  console.log("Connected to database");
// database.createCollection('teacher',(err,success)=>{
// if(err){
//     console.error("error while creating collection", err)
//     return;
// }
// console.log("collection created")
//    })

const employeeData=[
{    "firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"},
{    "firstName": "Jame",
"lastName": "Doe",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Z",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"},
{"firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"},
    { "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "20000",
    "overallExp": "1",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "ECE"},
{"firstName": "Rohan",
"lastName": "Jame",
"salary": "30000",
"department": "Technical",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "1234567860",
"yearGrad": "2015",
"gradStream": "CSE"},
{  "firstName": "Jame",
"lastName": "roh",
"salary": "35000",
"department": "Accounts",
"lastCompany": "Y",
"lastSalary": "15000",
"overallExp": "2",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EEE"},
{  "firstName": "nitin",
"lastName": "poiya",
"salary": "75000",
"department": "Accounts",
"lastCompany": "A",
"lastSalary": "15000",
"overallExp": "1",
"contactInfo": "123567890",
"yearGrad": "2019",
"gradStream": "EC"}]

//   database.collection("teacherdata").insertMany(employeeData, (err,success)=>{
//       if(err){
//           console.error("error while inserting data", err)
//           return;
//       }
//       console.log("data inserted", success)
//   })

// database.collection("teacherdata").findOne({firstName:'Rohan'},(err,success)=>{
// if(err){
//     console.error("error while finding", err)
//     return;
// }
// console.log(success)
// })


// database.collection("teacherdata").find({firstName:'Rohan'}).toArray((err,res)=>{
//     if(err){
//         console.error("error while fetching", err)
//         return;
//     }
//     console.log(res)
// })


// database.collection("teacherdata").findOne({salary:{$gt:"30000"}},(err,res)=>{
//     if(err){
//         console.error("error while fetching", err)
//         return;
//     }
//     console.log(res)
// })


// database.collection("teacherdata").findOne({yearGrad:{$gt:"2016"},overallExp:{$lt:"2"}},(err,res)=>{
//     if(err){
//         console.error("error while fetching", err)
//         return;
//     }
//     console.log(res)
// })


// database.collection("teacherdata").deleteMany({lastCompany:"Y"},(err,res)=>{
//     if(err){
//         console.error("error while fetching", err)
//         return;
//     }
//     console.log(res)
// })


database.collection("teacherdata").updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}},(err,res)=>{
    if(err){
        console.log("error while fetching", err)
        return;
    }
    console.log(res)
})

// database.collection("teacherdata").deleteMany({},(err,res)=>{
//     if(err){
//         console.log("error while fetching", err)
//         return;
//     }
//     console.log("success",res)
// })
})