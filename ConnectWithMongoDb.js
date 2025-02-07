// 1) npm init -y
       // v
       // v
// 2) npm install mongoose --save

// 3) Connect Mongoose

    const mongoose = require('mongoose');

    // returns promise
    mongoose
    .connect('mongodb://127.0.0.1:27017/myapp')
    .then(() => console.log('database is connected'))
    .catch((error) => console.log(error));

    const MyModel = mongoose.model('Test', new Schema({ name: String }));
    // Works
    await MyModel.findOne();

    