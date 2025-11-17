
#1️⃣ Q1 – Customer LINQ (Mini Customer App)

##Class Diagram:

Customer
---------
- Id: int
- FirstName: string
- LastName: string
- DateOfBirth: DateTime
---------
+ ToString() : string

##Flowchart (simplified):

Start
  |
  v
Display commands (list/findbyid/findbyfirstname/sortbyfirstname/exit)
  |
  v
User enters command
  |
  +--> list      --> Print all customers
  +--> findbyid  --> Search by Id --> Found? Print name : "Customer doesn't exist"
  +--> findbyfirstname --> Search by FirstName --> Print DOB
  +--> sortbyfirstname --> Sort array by FirstName --> Print list
  +--> exit      --> End program
