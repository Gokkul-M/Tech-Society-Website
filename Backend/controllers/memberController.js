import Member from '../models/Member.js';

export const getFeaturedMembers = async (req, res) => {
  try {
    const members = await Member.find().limit(15); // Adjust as needed
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch members' });
  }
};
