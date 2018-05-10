//https://github.com/gopinav/MongoDB-Tutorials/blob/master/employees

use testdb
db
show dbs
db.testcollection.insert({"Name":"Yogesh"});
db.dropDatabase()
db.createCollection("Test")
show collections  
db.testcollection.drop()

use company
db.employees.insert([
{
"EmpNo":"2",
"FirstName":"Brian",
"LastName":"Hall",
"Age":"27",
"Gender":"Male",
"Skill":"Javascript",
"Phone":"408-1298367",
"Email":"Brian.Hall@gmail.com",
"Salary":"60000"
},
{
"EmpNo":"3",
"FirstName":"Chris",
"LastName":"White",
"Age":"40",
"Gender":"Male",
"Skill":"Python",
"Phone":"408-4444567",
"Email":"Chris.White@gmail.com",
"Salary":"100000"
},
{
"EmpNo":"4",
"FirstName":"Debbie",
"LastName":"Long",
"Age":"32",
"Gender":"Female",
"Skill":"Project Management",
"Phone":"408-1299963",
"Email":"Debbie.Long@gmail.com",
"Salary":"105000"
},
{
"EmpNo":"5",
"FirstName":"Ethan",
"LastName":"Murphy",
"Age":"45",
"Gender":"Male",
"Skill":"C#",
"Phone":"408-3314567",
"Email":"Ethan.Murphy@gmail.com",
"Salary":"120000"
},
{
"EmpNo":"6",
"FirstName":"Felicia",
"LastName":"Lee",
"Age":"33",
"Gender":"Female",
"Skill":"MongoDB",
"Phone":"408-8832567",
"Email":"Felicia.Lee@gmail.com",
"Salary":"85000"
},
{
"EmpNo":"7",
"FirstName":"George",
"LastName":"Cyrus",
"Age":"36",
"Gender":"Male",
"Skill":"MongoDB",
"Phone":"408-9984567",
"Email":"George.Cyrus@gmail.com",
"Salary":"88000"
},
{
"EmpNo":"8",
"FirstName":"Hannah",
"LastName":"Johnson",
"Age":"26",
"Gender":"Female",
"Skill":"AngularJS",
"Phone":"408-7654321",
"Email":"Hannah.Johnson@gmail.com",
"Salary":"72000"
}
]
)


db.employees.find().pretty()

db.employees.findOne()

db.employees.find({"EmpNo" : "7"})

db.employees.find({"EmpNo" : {$gt : "30"}})



// And / OR conditions

db.employees.find({
  "Skill" : "MongoDB","Age" : {$gt : "30"}
}).pretty()

db.employees.find({	
  $or: [{"Skill" : "MongoDB"},{"Age" : {$gt : "30"}}]
}).pretty()

db.employees.find({
  "Skill" : "MongoDB", $or: [{"Salary":"80000"},{"Salary":"85000"}]
}).pretty()  



// Update Documents
db.employees.find().pretty()

db.employees.update(
{"_id" : ObjectId("5af1d7926e0e4cfe2c33ffeb")},
  {$set: {"Salary":"100000"}} 
)

db.employees.update(
{"Skill":"MongoDB"},
{$set: {"Salary":"135000"}}
)

db.employees.update(
{"Skill":"MongoDB"},
{$set: {"Salary":"150000"}},
{multi:true}
)

// Removing Documents from the collection

db.employees.find().pretty()


db.emplooyees.remove(
{"LastName" : "White"}
)