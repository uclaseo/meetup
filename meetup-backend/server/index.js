import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middlewares';
import { MeetupRoutes } from './modules';

const app = express();

dbConfig();
middlewareConfig(app);
app.use('/api', [MeetupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    consolee.rror(err);
  } {
    console.log(`App is listening to: ${PORT}`);
  }
});