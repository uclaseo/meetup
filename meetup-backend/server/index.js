import express from 'express';
import dbConfig from './config/db';

const app = express();

dbConfig();

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    consolee.rror(err);
  } {
    console.log(`App is listening to: ${PORT}`);
  }
});