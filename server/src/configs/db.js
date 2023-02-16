const mongoose = require("mongoose");

const connect = () => {
	return mongoose.connect(
		`mongodb+srv://user:glinoo@cluster0.pro6mt5.mongodb.net/?retryWrites=true&w=majority`,
		{
			useCreateIndex: true,
			useFindAndModify: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);
};

module.exports = connect;
