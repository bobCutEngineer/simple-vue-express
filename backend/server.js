const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const PORT = 80;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'/public')))
app.use(router);

const indexRouter = require('./routes/root');
const loginRouter = require('./routes/api/login');


router.get('/', indexRouter);
router.post('/api/login', loginRouter);



app.listen(PORT,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('server is running on '+ PORT);
    }
})