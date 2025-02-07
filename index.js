import mongoose from 'mongoose';
const { Schema } = mongoose;
// returns promise

('mongodb://127.0.0.1:27017/myapp');
// myapp in url is => databaseName

mongoose
  .connect('mongodb://127.0.0.1:27017/myapp')
  .then(() => console.log('database is connected'))
  .catch((error) => console.log(error));

// Schema (Shape of Document)
// Document, Collection, Database

//object inside the schema is Tablse fields
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: Number,
    isMarried: Boolean,
    salary: Number,
    gender: String,
  }
);

const User = mongoose.model('User', userSchema);
// 'User' is Table name in mongodb

async function addNewUser() {
  try {
    const user = new User({
      name: 'Raneesh Malik',
      age: 34,
      isMarried: false,
      email: 'raneeshchoudhary01@gmail.com',
      salary: 250000,
      gender: 'Male',
    });
    await user.save();
  } catch (err) {
    console.log(err.message);
  }
}
addNewUser();
