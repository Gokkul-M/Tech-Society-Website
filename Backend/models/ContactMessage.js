import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 2 },
  email: { type: String, required: true },
  subject: { type: String, required: true, minLength: 5 },
  message: { type: String, required: true, minLength: 10 },
}, { timestamps: true });

export default mongoose.model('ContactMessage', contactMessageSchema);
