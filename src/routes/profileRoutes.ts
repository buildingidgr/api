import express from 'express';
import { getProfile, createProfile, updateProfile } from '../controllers/profileController';

const router = express.Router();

router.get('/:id', getProfile);
router.post('/', createProfile);
router.put('/:id', updateProfile);

export const profileRoutes = router;

