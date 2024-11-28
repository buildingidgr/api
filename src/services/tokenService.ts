import axios from 'axios';
import { config } from '../config';

export async function exchangeApiKeyForTokens(apiKey: string) {
  try {
    const response = await axios.post(`${config.authServiceUrl}/v1/token/exchange`, { apiKey });
    return response.data;
  } catch (error) {
    throw new Error('Failed to exchange API key for tokens');
  }
}

export async function refreshToken(refreshToken: string) {
  try {
    const response = await axios.post(`${config.authServiceUrl}/v1/token/refresh`, { refresh_token: refreshToken });
    return response.data;
  } catch (error) {
    throw new Error('Failed to refresh token');
  }
}

