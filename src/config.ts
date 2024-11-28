import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mechhub',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  authServiceUrl: process.env.AUTH_SERVICE_URL || 'http://localhost:4000',
  nodeEnv: process.env.NODE_ENV || 'development'
};

