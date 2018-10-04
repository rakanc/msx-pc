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
      "key": "1", "text": "country-1"
    },
    {
      "key": "2", "text": "country-2"
    },
    {
      "key": "3", "text": "country-3"
    }
  ])
});

app.get('/engtatusnreason', (req, res) => {
  console.log('serving the engagement statuses and staus reason...');
  res.json([
    {
      "key": "1", "text": "Active"
    },
    {
      "key": "2", "text": "Inactive"
    }
  ])
});

app.get('/engsolnarea', (req, res) => {
  console.log('serving the engagement solution area...');
  res.json([
    {
      "key": "1", "text": "Apps and Infra"
    },
    {
      "key": "2", "text": "Business Apps"
    },
    {
      "key": "3", "text": "Data & AI"
    },
    {
      "key": "4", "text": "Modern Workplace"
    }
  ])
});

app.get('/engworkload', (req, res) => {
  console.log('serving the engagement workload...');
  res.json([
    {
      "key": "1", "text": "Apps: DevOps"
    },
    {
      "key": "2", "text": "D365: Customer service"
    },
    {
      "key": "3", "text": "DataAzure IoT : IoT Central"
    },
    {
      "key": "4", "text": "Teams"
    },
    {
      "key": "5", "text": "Yammer"
    }
  ])
});

app.get('/engworkloadtype', (req, res) => {
  console.log('serving the engagement workload type...');
  res.json([
    {
      "key": "1", "text": "Azure"
    },
    {
      "key": "2", "text": "Dynamics 365"
    },
    {
      "key": "3", "text": "EMS"
    },
    {
      "key": "4", "text": "O365"
    },
    {
      "key": "5", "text": "SQL Server"
    },
    {
      "key": "5", "text": "Surface"
    },
    {
      "key": "5", "text": "Windows"
    }
  ])
});

app.listen(port, () => console.log(`Mock server listening on port ${port}`))
