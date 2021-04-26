const express = require('express');
const cors = require('cors');
const router = require('./router');
const connection = require('./models/index');

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await connection;
    console.log('Db connected');
    app.listen(port, () => {
      console.log(`The server is listening on http://localhost: ${port}💚💚💛`);
    });
  } catch (error) {
    console.log('Error', error);
  }
})();
