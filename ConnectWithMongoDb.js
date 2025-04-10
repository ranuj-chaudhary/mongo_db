

    const mongoose = require('mongoose');

    // returns promise
    mongoose
    .connect('mongodb://localhost:27017/myapp')
    .then(() => console.log('database is connected'))
    .catch((error) => console.log(error));

    const MyModel = mongoose.model('Test', new Schema({ name: String }));
    // Works
    await MyModel.findOne();

    