import express from 'express';
import { config } from './config';
import { connectToDatabase } from './database';
import { errorHandler } from './middleware/errorHandler';
import { validateToken } from './middleware/validateToken';
import { profileRoutes } from './routes/profileRoutes';

const app = express();

// Middleware
app.use(express.json());
app.use(validateToken);

// Routes
app.use('/profile', profileRoutes);

// Error handling
app.use(errorHandler);

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(config.port, () => {
      console.log(`API Service running on port ${config.port}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
}

startServer();

