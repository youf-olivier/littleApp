import express from 'express';
import bodyParser from 'body-parser';

const PORT = 4000;
const delay = 500;
const app = express();
const apiRoute = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', apiRoute);

apiRoute.get('/dingdong', (req, res) => {
  const jwtHeader = req.get('Authorization');
  if (jwtHeader) {
    setTimeout(() => {
      res.send({ message: 'Hello ! See your accees Token ', token: jwtHeader });
    }, delay);
  } else {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="example"');
    res.end("Who's there ?");
  }
});

app.listen(PORT, () => {
  console.log(`Mocks server listening on port ${PORT}!`);
});
