const router=require('express').Router()
const categoryController=require('../controllers/category.controller')
const { verifyToken, isAdmin, isUser } = require('../middleware/Auth')

router.route('/')
.post(verifyToken , isUser ,categoryController.store)
.get(verifyToken, isUser ,categoryController.index)

router.route('/:id')
.delete(verifyToken, isUser ,categoryController.trash)
module.exports=router

router.route('/:id')
.put(verifyToken,isUser,categoryController.update)