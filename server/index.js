const express = require('express');
const app = express();
const port = 3010;

app.use(express.static('dist'));

app.listen(port,()=>(console.log(`Crypto Server Listening on:${port}...`)))