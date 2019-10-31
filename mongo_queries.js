// Inserts
db.movies.insert({ title : "Pulp Fiction",  writer : "Quentin Tarantino",  year : 1994,  actors : [ "John Travolta",  "Uma Thurman"  ] })
db.movies.insert({ title : "Fight Club", writer : "Chuck Palahniuk", year : 1999, actors : ["Brad Pitt", "Edward Norton"]})
db.movies.insert( {title : "Inglorious Basterds" , writer : "Quentin Tarantino", year : 2009, actors : ["Brad Pitt", "Diane Hruger", "Eli Roth"]})
db.movies.insert( {title : "The Hobbit: An Unexpected Journey" , writer : "J.R.R Tolkein", year : 2012, franchise : "The Hobbit"})
db.movies.insert( {title : "The Hobbit: The Desolation of Smaug" , writer : "J.R.R Tolkein", year : 2013, franchise : "The Hobbit"})
db.movies.insert({title : "The Hobbit: The Battle of the Five Armies", writer : "J.R.R Tolkein", year : 2012, franchise : "The Hobbit", synopsis: "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."})
db.movies.insert({title : "Pee Wee Herman's Big Adventure"})
db.movies.insert({title : "Avatar"})

// Finds
db.movies.find()
db.movies.find({writer : "Quentin Tarantino"})
db.movies.find({actors : {$all : ["Brad Pitt"]}})
db.movies.find({franchise : "The Hobbit"})
db.movies.find({year : {$gte : 1990}} && {year : {$lt :2000}})
db.movies.find(function() {return this.year > 2010 || this.year < 2000})

// Updates
db.movies.update({title : "The Hobbit: An Unexpected Journey"}, {$set : {synopsis : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." }})
db.movies.update({title : "The Hobbit: The Desolation of Smaug"}, {$set : {synopsis : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." }})
db.movies.update({title : "Pulp Fiction"}, {$addToSet : {actors : "Samuel L. Jackson"}})

// Text Searches
db.movies.find({synopsis : /Bilbo/})
db.movies.find({synopsis : /Gandalf/})
    // synopsis includes bilbo but not gandalf
db.movies.find({synopsis : {$in : [/dwarves/, /hobbit/]}})
db.movies.find({synopsis : {$all : [/gold/, /dragon/]}})

// Deletes
db.movies.remove({title : "Pee Wee Herman's Big Adventure"})
db.movies.remove({title : "Avatar"})

// Creating users collection 
db.users.insert({username : "GoodGuyGreg", first_name : "Good Guy", last_name : "Greg"})
db.users.insert({username : "ScumbagSteve", full_name : [{first : "Scumbag"},{last : "Steve"}]})

// Creating posts collection
db.posts.insert({username: "GoodGuyGreg", title : "Passes out at party", body : "Wakes up early and cleans the house"})
db.posts.insert({username: "GoodGuyGreg", title : "Steals your identity", body : "Raises your credit score"})
db.posts.insert({username : "GoodGuyGreg", title : "Reports a bug in your code", body : "Sends you a Pull Request"})
db.posts.insert({username : "ScumbagSteve", title : "Borrows something", body : "Sells it"})
db.posts.insert({username : "ScumbagSteve", title : "Borrows everything", body : "The end"})
db.posts.insert({username : "ScumbagSteve", title : "Forks your repo on github", body : "Sets to private"})

// Creating comments collection 
db.comments.insert({username : "GoodGuyGreg", comment : "Hope you got a good deal", post : {$ref : "posts", id : ObjectId("5db9b937821cbb57895f9a08")}})
db.comments.insert({username : "GoodGuyGreg", comment : "Whats mine is yours", post : {$ref : "posts", id : ObjectId("5db9ba2f821cbb57895f9a09")}})
db.comments.insert({username : "GoodGuyGreg", comment : "Don't violate the licensing agreement!", post : {$ref : "posts", id : ObjectId("5db9ba52821cbb57895f9a0a")}})
db.comments.insert({username : "ScumbagSteve", comment : "It still isn't clean", post : {$ref : "posts", id : ObjectId("5db9b647821cbb57895f9a05")}})
db.comments.insert({username : "ScumbagSteve", comment : "Denied your PR cause I found a hack", post : {$ref : "posts", id : ObjectId("5db9b847821cbb57895f9a07")}})
