/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();

console.log(`Server port=${process.env.port} and ENV_PLATFORM=${process.env.ENV_PLATFORM}`);

app.get('/api', (req, res) => {
  res.send({ message: 'А вот и сервер!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
