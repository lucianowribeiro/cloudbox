//Mapping routes with requests and responses  
const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')
const box =  require('./controller/BoxController')
const file = require('./controller/FileController')

const routes = express.Router();
routes.post('/boxes',box.store)
routes.post(
    '/boxes/:id/files',
    multer(multerConfig).single('file'),
    file.store
)

module.exports = routes


