




const mongoose = require('mongoose');

// Replace 'your_database_name' with the name of your MongoDB database
const DB_NAME = 'mongo';

// Replace 'your_connection_string' with your MongoDB connection string
const MONGODB_URI = 'mongodb+srv://itzzmotohead2003:yvCdG7I0hpfKn9yZ@clusterganesh.km8oh3d.mongodb.net/?retryWrites=true&w=majority&appName=Clusterganesh';


mongoose.connect(MONGODB_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {
console.log(`Connected to MongoDB database '${DB_NAME}'`);
})
.catch((error) => {
console.error('Error connecting to MongoDB database:', error);
});
