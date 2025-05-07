import mongoose from 'mongoose';

const GalleryImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Events', 'Workshops', 'Social'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const GalleryImage = mongoose.model('GalleryImage', GalleryImageSchema);
export default GalleryImage;
