import express from 'express';
import cors from 'cors';
import { envConfig } from './api/v1/config/envConfig';
import v1Routes from './api/v1';
import { WebSocketServer } from 'ws';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mount API v1 routes
app.use('/api/v1', v1Routes);

// WebSocket server for future WhatsApp QR code handling
const wss = new WebSocketServer({ port: 8081 });
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('Received:', message.toString());
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port} in ${envConfig.nodeEnv} mode`);
});