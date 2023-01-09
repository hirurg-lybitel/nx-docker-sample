import express from 'express';
import cors from 'cors';
// import cors = require('cors');

const port = process.env.PORT || 4040;

const app = express();
app.use(cors({
  credentials: true,
  origin: `http://localhost:4200` // 'http://localhost:80'
}));

app.listen(port, () => {
  console.log(`Server running on port ${port}, http://localhost:${port}`);
  console.log(`My variable MY_DEV_PLATFORM is ${process.env.MY_DEV_PLATFORM}`);
});

const router = express.Router();
app.use('/api', router);



router.get('/films', (req, res) => {
  res.send([
    'Горько',
    'Mafia'
  ]);
})

app.get('/', (req, res) => {
  res.send('My Home Route');
});

