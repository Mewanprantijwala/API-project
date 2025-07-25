const router=require('express').Router()
const adminController=require('../controllers/admin.controllers')

router.post('/signup',adminController.signup)
router.post('/login',adminController.login)
module.exports=router