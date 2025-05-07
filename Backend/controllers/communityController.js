import Community from '../models/Community.js';

export const getCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.json(communities);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch communities' });
  }
};
