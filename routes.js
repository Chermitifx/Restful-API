var express = require('express')
var userController = require('./controllers')
const router = express.Router();


router.post('/book/POST', userController.create);
router.get('/book',userController.getAllBooks)
router.get('/book/:id',userController.findOne)
router.delete('/book/:id',userController.DeleteBook)
router.patch('/book/UPDATE/:id',userController.updateBook)
router.get('/Order',userController.Ascending)
router.get('/:author',userController.FindAuthor)
module.exports = router