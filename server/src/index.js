const express = require('express')
const { AuthRouter } = require('./controllers/Auth.controller');
const { AdminRouter } = require('./controllers/Admin.controller');
const { userrouter } = require("./controllers/usercontroller")
const {ServiceHelpersRouter} = require("./controllers/ServiceHelpers.controller")
const { connectDb } = require('./database/database');
const { AuthMiddileWare } = require('./middlewares/auth.middleware')
const cors = require('cors')

const PORT = 42069;
const app = express();
app.use(cors({origin:"*"}))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', AuthMiddileWare, AuthRouter)
app.use('/admin', AuthMiddileWare, AdminRouter)
app.use('/user', AuthMiddileWare, userrouter)
app.use('/servicehelpers',AuthMiddileWare,ServiceHelpersRouter)

app.listen(PORT, async () => {
    console.log("Server started on port :" + PORT);
    await connectDb()
})
