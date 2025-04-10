// MONGO DB SETUP

// 1st Step
// INSTALL MONGODB COMMUNITY SERVER
link: https://www.mongodb.com/try/download/community


// 2nd Step
// Install or Extract zip filed or MongoShell where mongo db installed
// Path of Mongodb Server: C:\Program Files\MongoDB

// What is Mongo Shell?
// (use to communicate with server)

// create database
// perform query of create,read,update,delete


// 3rd Step
// Open command prompt with server bin folder location
// Path: C:\Program Files\MongoDB\mongosh-2.2.5-win32-x64\bin
// Run Command to start server: mongod
                              V
                              V
// Open command prompt with Mongo Shell bin folder location

// Path: C:\Program Files\MongoDB\mongosh-2.2.5-win32-x64\bin
// Run Command to start Mongo Shell: mongosh


// MONGO CAMPASS
// (Graphical User InterPhse)
// (Client Graphical User Interface to connect to query with server)
// -fetch data from MongoDB Server

// MONGO DB COMMANDS

// 1) Show All Database
    // COMMANDS
//     show dbs 
//     or 
//     show databases

// 2) Create a new database

//     use databaseName
//     Example: use blog

// 3) Create Collection using mongoose
        db.createCollection("posts")

// Note: while inserting data to collection if collection not exist
// than insert command will create collection with name of collection to be inserted.
// Example: db.posts.insertOne(object)

// 4) Insert Documents

        // Single Document Insert
        db.posts.insertOne(object)

        Example:
        db.posts.insertOne({
          title: "Post Title 1",
          body: "Body of post.",
          category: "News",
          likes: 1,
          tags: ["news", "events"],
          date: Date()
        })

// Note: If you try to insert documents into a collection that does not exist, MongoDB 
// will create the collection automatically.

// 5) Multiple Document Insert

        db.posts.insertMany({object1}, {object2})

// 6) Find Data
// There are 2 methods to find and select data from a MongoDB collection, find() and findOne().

   //   i)  db.posts.find()  // Retrieves multiple documents that match the query.
        User.find({ age: { $gt: 18 } }) // Finds all documents where age > 18
        .then(docs => console.log(docs))
        .catch(err => console.error(err));


  //  Find with object value to find

        db.posts.find({title:"first"})

  //  Filter data by fields
  
        db.posts.find({}, {title: 1, date: 1})  
        // all collection with title and date will be sent

  // Note: Note: You cannot use both 0 and 1 in the same object. The only exception is the _id field. 
// You should either specify the fields you would like to include or the fields you would like to exclude.
        Example:
        db.posts.find({}, {_id: 0, title: 1, date: 1})
        db.posts.find({}, {title: 1, date: 0})

   //   ii)  db.posts.findOne() // Retrieves a single document that matches the query.
        //  use case: to find user exist
        Model.findOne({ name: "John" }) // Returns the first document where name is "John"
        .then(doc => console.log(doc))
        .catch(err => console.error(err));
 

   //   iii)  db.posts.findById()  // Retrieves multiple documents that match the query.

        Model.findById("65a45b6c9d8e2f0012d3b789") // Finds a document by ID
        .then(doc => console.log(doc))
        .catch(err => console.error(err));
 
    //   iv)  db.posts.findOneAndUpdate() // Retrieves multiple documents that match the query.
        Model.findOneAndUpdate(
                { name: "John" },
                { age: 30 },
                { new: true } // Returns the updated document
                )
                .then(doc => console.log(doc))
                .catch(err => console.error(err));

        //   v)  db.posts.findOneAndDelete() // Retrieves multiple documents that match the query.
      
        Model.findOneAndDelete({ name: "John" }) // Finds a document and removes it.
        .then(doc => console.log("Deleted:", doc))
        .catch(err => console.error(err));
 
                    
       //    vi) findByIdAndUpdate()

        Model.findByIdAndUpdate(
                "65a45b6c9d8e2f0012d3b789",
                { age: 35 },
                { new: true }
                )
                .then(doc => console.log(doc))
                .catch(err => console.error(err));
      
        //    vii) findByIdAndDelete()

        Model.findByIdAndDelete("65a45b6c9d8e2f0012d3b789")
         .then(doc => console.log("Deleted:", doc))
        .catch(err => console.error(err));



// 9) UPDATE DOCUMENT

// To update an existing document we can use the updateOne() or updateMany() methods.
// Now let's update the "likes" on this post to 2. To do this, we need to use the $set operator.

        db.posts.updateOne( { title: "Post Title 1" }, { $set: { likes: 2 } } ) 

// 10) Insert if not found
// If you would like to insert the document if it is not found, you can use the upsert option.

        db.posts.updateOne( 
          { title: "Post Title 5" }, 
          {
            $set: 
              {
                title: "Post Title 5",
                body: "Body of post.",
                category: "Event",
                likes: 5,
                tags: ["news", "events"],
                date: Date()
              }
          }, 
          { upsert: true }
        )

// 11) UPDATE DOCUMENT

        // i) updateOne() Updates the first document that matches the query.
        Model.updateOne({ name: "John" }, { age: 30 })
        .then(result => console.log(result))
        .catch(err => console.error(err));

        // Note: 1) Does not return the updated document.
        //       2) Returns an object with { acknowledged: true, modifiedCount: 1, matchedCount: 1 }

        // ii) updateMany() Updates all documents that match the query.
        
        Model.updateMany({ age: { $lt: 18 } }, { isMinor: true })
        .then(result => console.log(result))
        .catch(err => console.error(err));
        
        // Note: 1) Updates multiple documents at once.
        //       2) Does not return the updated documents.
        
        // Note: To increament Numeric Value
        // Update likes on all documents by 1. For this we will use the $inc (increment) operator:
        
        // iii) findOneAndUpdate() Finds a document, updates it, and returns the updated document.

        Model.findOneAndUpdate(
                { name: "John" }, 
                { age: 35 }, 
                { new: true } // Returns the updated document
              )
                .then(doc => console.log(doc))
                .catch(err => console.error(err));
              
                
        // iv) findByIdAndUpdate() Finds a document by _id, updates it, and returns the updated document.
        Model.findByIdAndUpdate(
                "65a45b6c9d8e2f0012d3b789",
                { age: 40 },
                { new: true }
              )
                .then(doc => console.log(doc))
                .catch(err => console.error(err));
              

// 12) DELETE DOCUMENTS
// We can delete documents by using the methods deleteOne() or deleteMany().

// These methods accept a query object. The matching documents will be deleted.

        //      i) deleteOne()
        // The deleteOne() method will delete the first document that matches the query provided.
                db.posts.deleteOne({ title: "Post Title 5" })

        //     ii) deleteMany()
                db.posts.deleteMany({ category: "Technology" })


//  13) SELECT DOCUMENTS

        // i) INCLUDE only fields mention in query
        User.find({isMarried: false}).select('name salary')
        
        // return result
        {
                _id: "ljflsdkjflskj4234242342",
                firstName: "Ranuj",
                salary: 200000,
        }
        
        // ii) EXCLUDE only fields mention in query
        
        User.find({isMarried: false}).select('-name -salary')

        // return result
        {
                _id: "ljflsdkjflskj4234242342",
                age: 34,
                isMarried: false,
                email: 'raneeshchoudhary01@gmail.com',
                gender: 'Male',
        }


// 14) SORTING
        // Note: Default is Ascending data

        // ASCENDING ORDER
        User.find({isMarried: false}).select('name salary').sort('salary')

        // DESCENDING ORDER
        User.find({isMarried: false}).select('name salary').sort('-salary')

// 15) LIMTIT & SKIP (sends no of documents metion in query)
        User.find({isMarried: false}).select('name salary').sort('salary').limit(2)
        User.find({isMarried: false}).select('name salary').sort('salary').skip(5).limit(5)

// 16) COUNT (sends no of documents metion in query)
        User.find({isMarried: false}).countDocuments()

// 17) COMPARISON OPERATOR
        // eq   - equal
        User.find({age: {$eq: 30}})
        // ne   - not equal
        User.find({age: {$ne: 30}})
        // gt   - greater
        User.find({salary: {$gte: 60000}})
        // gte  - greater than equal
        // lt   - less than
        // lte  - less than equal
        // in   - find value matching ex: [30, 50]

        User.find(salary: {$in: [50000, 80000, 25000]})
        // nin  - not between
        User.find(salary: {$nin: [50000, 80000, 25000]})
        
        // 17) AND / OR Operator
        
        // or
        db.restaurants.find({
                $or: [
                  { cuisine: "Italian" },
                  { rating: { $gte: 4.5 } }
                ]
              })
              
        // Note: if any condition is true that will be considered

        // and
        db.restaurants.find({
                $and: [
                  { rating: { $gte: 4.5 } },
                  { cuisine: "Italian" }
                ]
              })
          
        // Note: both condition should pass and get result       

        // and or combined
        db.restaurants.find({
                $and: [
                  { rating: { $gte: 4.0 } },
                  {
                    $or: [
                      { cuisine: "Italian" },
                      { cuisine: "Mexican" }
                    ]
                  }
                ]
 


// AGGREGATION FRAMEWORK
/*
-> used for complex operations like filtering, grouping, sorting, reshaping, and summarizing data in
flexible way via pipeline

stage1 -> state2 -> state3

db.orders.aggregate([
// stage1: filter  pizza order documents by pizza size
{$match: {size: "medium"}},

// stage2: Group remaining document by pizza name and calculate total quantity
{$group: {_id: "name", totalQuantity: {$sum: "$quantity"}}},


])

 */
// orders of STAGES IN MongoDB

db.movies.aggregate([
        { $match: { year: 2023 } },               // Filter
        { $sort: { rating: -1 } },                // Sort by rating
        { $limit: 5 },                            // Top 5 movies
        { $project: { title: 1, rating: 1 } }     // Only show title and rating
      ])


// MOSTLY USED STAGES

Most Commonly Used Stages (in practical order)
Here’s a typical and logical order of the most used aggregation stages:

Stage	                Purpose	Example
*******                 ***************
                                                                        
$match	                Filter documents (like WHERE)	                     { $match: { year: 2023 } }

$sort	                Sort documents (like ORDER BY)	                     { $sort: { rating: -1 } }

$limit	                Limit number of documents	                     { $limit: 10 }

$skip	                Skip certain number of documents	             { $skip: 10 }

$project	        Select / reshape fields (like SELECT)	             { $project: { title: 1, rating: 1 } }

$group	                Group documents and calculate aggregates	     { $group: { _id: "$genre", avgRating: { $avg: "$rating" } } }

$unwind	                Deconstruct arrays into separate documents	     { $unwind: "$actors" }

$lookup	                Join with another collection (like SQL JOIN)	     { $lookup: { from: "users", localField: "userId", foreignField: "_id", as: "userInfo" } }

$addFields	        Add new fields (after computation or lookup)         { $addFields: { fullName: { $concat: ["$first", " ", "$last"] } } }

$count	                Count documents	                                     { $count: "totalMovies" }