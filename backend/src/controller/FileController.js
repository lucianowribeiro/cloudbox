const File = require('../models/File')
const Box = require('../models/Box')

class FileController {
    async store(req,res){
        //Create a file
        const box = await Box.findById(req.params.id)   
        const file = await File.create({
            title:req.file.originalname,
            path:req.file.key
        })
        box.files.push(file) 
        await box.save()

        return res.send(file)
    }
}
const file = new FileController()
module.exports = file