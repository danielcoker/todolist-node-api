import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import connectDB from './config/db';

/**
 * @desc Load env vars.
 */
dotenv.config({ path: './config/config.env' });

/**
 * @desc Connect to database.
 */
connectDB();

var app = express();

// Dev logger middleware.
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`.red);
});
