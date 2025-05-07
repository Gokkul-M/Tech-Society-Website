import express from "express";
import { getAllTeamMembers, getTeamByGroup } from "../controllers/teamController.js";

const router = express.Router();

// Route to fetch all team members
router.get("/", getAllTeamMembers);

// Route to fetch team members by group (Optional)
router.get("/group/:group", getTeamByGroup);

export default router;
