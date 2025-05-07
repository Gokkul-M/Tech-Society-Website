import TeamMember from "../models/TeamMember.js";

// Fetch all team members
const getAllTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.status(200).json(teamMembers);
  } catch (err) {
    res.status(500).json({ message: "Error fetching team members", error: err });
  }
};

// Fetch team members by group (Optional)
const getTeamByGroup = async (req, res) => {
  const group = req.params.group;
  try {
    const teamMembers = await TeamMember.find({ group: group });
    res.status(200).json(teamMembers);
  } catch (err) {
    res.status(500).json({ message: "Error fetching team by group", error: err });
  }
};

export { getAllTeamMembers, getTeamByGroup };
