import GalleryImage from '../models/GalleryImage.js';

export const getGalleryImages = async (req, res) => {
  try {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const addGalleryImage = async (req, res) => {
  const { url, title, category, description } = req.body;
  try {
    const newImage = new GalleryImage({ url, title, category, description });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(400).json({ message: 'Failed to add image', error: err.message });
  }
};
