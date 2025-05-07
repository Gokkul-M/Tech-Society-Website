import express from 'express';
import { getFeaturedMembers } from '../controllers/memberController.js';

const router = express.Router();

router.get('/', getFeaturedMembers);

export default router;
