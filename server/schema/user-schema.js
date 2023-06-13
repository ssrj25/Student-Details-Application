import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  id_number: String,
  email: String,
  phone: String
});

// Add a pre-save middleware to generate the auto-incrementing ID
userSchema.pre('save', async function (next) {
  if (this.isNew) {
    const count = await mongoose.model('user').countDocuments().exec();
    this._id = count + 1;
  }
  next();
});

const User = mongoose.model('user', userSchema);

export default User;
