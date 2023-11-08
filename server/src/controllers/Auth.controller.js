const { Router } = require('express');
const { userModel } = require('../database/schema');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const AuthRouter = Router();
AuthRouter.post('/signup', async (req, res) => {
    try {
        let { firstname, lastname, email, pwd } = req.body
        let prevCheck = await userModel.findOne({ email: email })
        if (prevCheck) {
            return res.status(401).json({ msg: "An account already exists with this email" })
        }
        pwd = await bcrypt.hash(pwd, 10)
        let user = await new userModel({ firstname, lastname, pwd, email }).save()
        delete user.pwd
        let token = jwt.sign({ firstname, lastname, email, id: user.id }, process.env.JWTSECRET)
        return res.status(200).json({ msg: "Signup success", token: token })
    } catch (err) {
        console.log("err occured" + err)
    }
})


AuthRouter.post('/login', async (req, res) => {
    try {
        let { email, pwd } = req.body
        let userCheck = await userModel.findOne({ email: email })
        if (!userCheck) {
            return res.status(401).json({ msg: "No accounts found with this email" })
        } else {
            let pwdVerify = await bcrypt.compare(pwd, userCheck.pwd)
            if (!pwdVerify) res.status(401).json({ msg: 'incorrect password' })
            delete userCheck.pwd
            let token = jwt.sign({ firstname: userCheck.firstname, lastname: userCheck.lastname, email: userCheck.email, id: userCheck.id }, process.env.JWTSECRET)
            return res.status(200).json({ msg: "Login success", token: token })
        }
    } catch (err) {
        console.log("Err ooccured" + err)
    }
})



module.exports = { AuthRouter }
