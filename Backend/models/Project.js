import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  category: { type: String, required: true },
  tags: [
    {
      name: { type: String, required: true },
      color: { type: String, required: true }
    }
  ],
  stars: { type: Number, default: 0 },
  contributors: { type: Number, default: 0 },
  timeframe: { type: String, required: true },
  githubUrl: { type: String, required: true },
  demoUrl: { type: String },
  detailedDescription: { type: String },
  challenges: [String],
  outcomes: [String],
  images: [String]
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
