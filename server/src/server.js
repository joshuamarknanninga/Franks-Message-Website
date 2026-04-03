import http from 'http';
import app from './app.js';
import connectDb from './config/db.js';
import env from './config/env.js';
import initializeSockets from './sockets/index.js';

const boot = async () => {
  const dbConnected = await connectDb();

  const httpServer = http.createServer(app);
  initializeSockets(httpServer);

  httpServer.listen(env.port, () => {
    console.log(`Server running on port ${env.port} (db: ${dbConnected ? 'connected' : 'offline'})`);
  });
};

boot().catch((error) => {
  console.error('Failed to boot server:', error.message);
  process.exit(1);
});
