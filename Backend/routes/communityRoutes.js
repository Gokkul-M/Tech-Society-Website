import express from 'express';
import { getCommunities } from '../controllers/communityController.js';

const router = express.Router();

router.get('/', getCommunities);

export default router;
