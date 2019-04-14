const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./src/utils/logger');

let app = express();

app.use(express.static('./build/static/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// let authCheckMiddleware = require('./server/middleware/authCheck');
// app.use('/api',authCheckMiddleware);

let apiRoutes = require('./src/routes/api');
app.use('/api',apiRoutes);

app.all('*',(req,res) => {
    res.sendFile(path.join(__dirname,'./build/static/index.html'));
});

app.listen(3000,() => {
    logger.info('App running now on localhost:3000');
    logger.info('Timestamp: ' + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
});

export default app;