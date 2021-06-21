const express = require('express')
const route = express.Router();
const controller=require('../controller/controller.js')

route.post('/blue' , controller.blue)
route.post('/yellow' , controller.yellow)
route.post('/grey' , controller.grey)
route.post('/red' , controller.red)

route.get('/home' , controller.home)

module.exports=route;