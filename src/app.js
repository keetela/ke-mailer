import http from 'http';
import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import routes from './routes';

const app = express();
const server = http.createServer(app);

dotenv.config();

app.use(
  session({
    secret: process.env.SECRET_KEY || 'Keetela',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
  })
);

// swagger route

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err.status
  });
  next();
});

app.server = server;
export default app;
