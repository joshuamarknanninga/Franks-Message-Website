import http from 'http';
import app from './app.js';
import connectDb from './config/db.js';
import env from './config/env.js';
import initializeSockets from './sockets/index.js';

const listenWithFallback = (httpServer, preferredPort) =>
  new Promise((resolve, reject) => {
    const handleError = (error) => {
      if (error.code === 'EADDRINUSE' && env.nodeEnv !== 'production') {
        const nextPort = Number(preferredPort) + 1;
        console.warn(`[server] Port ${preferredPort} is busy. Retrying on ${nextPort}...`);
        httpServer.off('error', handleError);
        resolve(listenWithFallback(httpServer, nextPort));
        return;
      }

      reject(error);
    };

    httpServer.once('error', handleError);
    httpServer.listen(preferredPort, () => {
      httpServer.off('error', handleError);
      resolve(preferredPort);
    });
  });

const boot = async () => {
  const dbConnected = await connectDb();

  const httpServer = http.createServer(app);
  initializeSockets(httpServer);

  const activePort = await listenWithFallback(httpServer, env.port);
  console.log(`Server running on port ${activePort} (db: ${dbConnected ? 'connected' : 'offline'})`);
};

boot().catch((error) => {
  console.error('Failed to boot server:', error.message);
  process.exit(1);
});
