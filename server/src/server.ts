import express from 'express';
import { routes } from './routes';

const app = express();
app.use(routes);

app.listen(3333, () => {
  console.log('🖥 Server starter at http://localhost:3333')
});