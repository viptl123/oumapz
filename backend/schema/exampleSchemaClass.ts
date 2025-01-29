import mongoose from 'mongoose';
const { Schema } = mongoose;

const SomeModelSchema = new Schema({
  name: String,
  age: String,
});

export const example = mongoose.model('SomeModel', SomeModelSchema)

