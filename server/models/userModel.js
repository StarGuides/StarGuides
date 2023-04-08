const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://nly714:asdf1212@cluster0.0dmisie.mongodb.net/?retryWrites=true&w=majority'
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

mongoose.connect(MONGO_URI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'clients'
  }
)
.then(() => console.log('Connected to Mongo DB inside the module server/userModel'))
.catch(err => console.log(err));

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err,hash) =>{
    if (err) return next(err)
    this.password = hash;
    return next()
  })
});



module.exports = mongoose.model('User', userSchema);
