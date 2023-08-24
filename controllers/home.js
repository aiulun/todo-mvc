// Exports an object that has getIndex as a method that renders ejs

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }
}