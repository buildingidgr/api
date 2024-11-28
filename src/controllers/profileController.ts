import { Request, Response } from 'express';
import { Profile, IProfile } from '../models/Profile';
import { ProfileExternalAccount, IProfileExternalAccount } from '../models/ProfileExternalAccount';

export async function getProfile(req: Request, res: Response) {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error });
  }
}

export async function createProfile(req: Request, res: Response) {
  try {
    const newProfile = new Profile(req.body);
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(400).json({ message: 'Error creating profile', error });
  }
}

export async function updateProfile(req: Request, res: Response) {
  try {
    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(updatedProfile);
  } catch (error) {
    res.status(400).json({ message: 'Error updating profile', error });
  }
}

