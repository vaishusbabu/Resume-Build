const express=require('express')
const router=express.Router()

const user=require('./User/UserController')


//user 
router.post('/adduser',user.upload,user.adduser)
router.post('/login',user.login)
router.post('/viewuser/:id',user.viewuser)
router.post('/edit/:id',user.edit)


module.exports=router;
