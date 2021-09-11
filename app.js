const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const{MONGOURI} = require('./keys')

require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))


mongoose.connect(MONGOURI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log('Connected to Mongo ')
})

mongoose.connection.on('error',(err)=>{
    console.log('Error Connecting to Mongo ', err)
})


const customMiddleware = (req, res, next) => {
    console.log('mid executed');
    next();
}


app.get('/', (req, res) => {
    console.log('home');
    res.send("Home Page");
})

app.get('/about',customMiddleware, (req, res) => {
    console.log('about');
    res.send("About page");
})

app.listen(PORT, () => {
    console.log('running on', PORT);
})