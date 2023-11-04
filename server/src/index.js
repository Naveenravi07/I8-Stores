const express = require('express')
const {AuthRouter} = require('./controllers/Auth.controller');
const { connectDb } = require('./database/database');
const { AuthMiddileWare } = require('./middlewares/auth.middleware');

const PORT = 42069;
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/auth',AuthMiddileWare,AuthRouter)

app.listen(PORT,async()=>{
    console.log("Server started on port :"+PORT);
    await connectDb()
})
