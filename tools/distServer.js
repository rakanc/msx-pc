const express = require('express')
const app = express()
const port = 3001;

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.get('/', (req, res) => res.send('Hello Seller!!!'))
app.get('/countries', (req, res) => {
  console.log('serving the countries...');
  res.json([
    {
      "id": "1", "value": "country-1"
    },
    {
      "id": "2", "value": "country-2"
    },
    {
      "id": "3", "value": "country-3"
    }
  ])
});

app.listen(port, () => console.log(`Mock server listening on port ${port}`))
