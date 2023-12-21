import {DB_url} from "$env/static/private"
import mongoose from "mongoose";
import mongodb from "mongoose"

const uri = DB_url
mongoose.connect(uri).catch(error => console.log("mongoosejs connection error :", error.message));


//to see events with mongoose connection like start, open, disconnected..etc
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB, connection established');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});
//Close the Connection When your application exits or no longer needs the database connection, remember to close it:
process.on('SIGINT', () => {
    mongoose.connection.close()
        console.log('Mongoose connection is disconnected due to application termination');
        process.exit(0);
    
});


// //here is how to build a schema in inside the mongoosejs file
// var Schema = mongoose.Schema;

// var coinSchema = new Schema({
//     coinname : String,
//     ratings :  [],
// })

// var Coin = mongoose.model('Coin', coinSchema);

// export default Coin;

const User = mongodb.model(
	"User",
	new mongodb.Schema(
		{
			_id: {
				type: String,
				required: true
			}
			// user attributes
		},
		{ _id: false }
	)
);

const Session = mongodb.model(
	"Session",
	new mongodb.Schema(
		{
			_id: {
				type: String,
				required: true
			},
			user_id: {
				type: String,
				required: true
			},
			active_expires: {
				type: Number,
				required: true
			},
			idle_expires: {
				type: Number,
				required: true
			}
			// session attributes
		},
		{ _id: false }
	)
);

const Key = mongodb.model(
	"Key",
	new mongodb.Schema(
		{
			_id: {
				type: String,
				required: true
			},
			user_id: {
				type: String,
				required: true
			},
			hashed_password: String
		},
		{ _id: false }
	)
);



mongoose({
	User,
	Session,
	Key
});