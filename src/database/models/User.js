const mongoose =  require('mongoose')

const UserSchema = new mongoose.Schema({
  first_name: {type: String, required: true },
  last_name: {type: String, required: true},
  email: {type: String, unique: true, required: true, lowercase: true},
  password: {type: String, required: true},
  created_at: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('User', UserSchema)