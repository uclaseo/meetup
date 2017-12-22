import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middlewares';
import { MeetupRoutes, GroupRoutes } from './modules';

const app = express();

dbConfig();
middlewareConfig(app);
app.use('/api', [MeetupRoutes, GroupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App is listening to: ${PORT}`);
  }
});
