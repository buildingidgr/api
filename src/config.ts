import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mechhub',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
};

