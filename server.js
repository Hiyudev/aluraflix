const express = require('express');
const app = express();
const port = 8080;
const {urlencoded, json} = require('body-parser');
const cors = require('cors');
const videosrouter = require('./router/videos');
const categoriasrouter = require('./router/categorias');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/videos', videosrouter)
app.use('/categorias', categoriasrouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});