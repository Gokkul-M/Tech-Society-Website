import mongoose from 'mongoose';

const CommunitySchema = new mongoose.Schema({
  name: String,
  description: String,
  members: Number,
  bgClass: String,
});

export default mongoose.model('Community', CommunitySchema);
