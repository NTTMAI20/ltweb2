const express = require('express');
const bodyParser = require('body-parser');
const useRouter = require('./routers/user');
const sumRouter = require('./routers/sum');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/user', useRouter);
app.use('/sum', sumRouter);

app.use('/user', useRouter);
const port = process.env.PORT || 3000;
console.log('Server is listening on port ' + port);
app.listen(port);