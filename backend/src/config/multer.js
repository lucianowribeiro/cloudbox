const multer = require("multer") //Allow node works with upload files
const path = require('path') //Allow node managing problems with differents directories arquitecthures
const crypto = require('crypto') //Allow create strings encrypted     
module.exports ={
    dest : path.resolve(__dirname ,'..','..','tmp'),
    storage: multer.diskStorage({
        destination: (req,file,cb) => {
            cb(null,path.resolve(__dirname ,'..','..','tmp'))

        },
        filename: (req,file,cb) => {
            crypto.randomBytes(16,(err,hash)=>{
                if(err) cb(err)

                file.key = `${hash.toString('hex')}-${file.originalname}`
                cb(null,file.key)
            })
        }            
    })
}