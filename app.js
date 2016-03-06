'use strict';

/*!
 * Modules and dependencies
 */

const Path = require('path');
const Express = require('express');
const Morgan = require('morgan');

const app = Express();

/*!
 * Local vars
 */

const publicPath = Path.join(__dirname, 'app/public/');

/*!
 * Using middlewares
 */

app.use(Morgan('tiny'));
app.use(Express.static(publicPath));

/*!
 * Routing
 */

app.get('/', (req, res) => {
  var indexPath = Path.join(__dirname, 'app/public/index.html');
  res.sendFile(indexPath);
});

app.post('/process-vehicle', (req, res) => {
  res.send('hola camion procesado');
});

/*!
 * app up and running
 */

app.listen(3000, () => {
  console.log('servidor corriendo en el puerto 3000');
});
