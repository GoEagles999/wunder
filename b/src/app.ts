import express from 'express';
import processController from './controller/process-controller';
import bodyParser from 'body-parser';
// Create Express server
const app = express();

const onErr = (err, req, res, next) => {
  console.log(err, req, 'err');
  if (err) {
    return res
        .status(418)
        .send('Oops, I did it again');
  }
  next();
};

// Express configuration
app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.post('/process', processController.doProcess);

app.use(onErr);

export default app;
