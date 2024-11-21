//by using mongoose,we created schema and model and exported..also done the connection



const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://manchandakhushi14:^vvrulc2q@booking-app-db.cjvo4.mongodb.net/?retryWrites=true&w=majority&appName=booking-app-db")

const noteSchema=new mongoose.Schema({
     
    title:String,
    desc:String,
    Content:String,
    isImportant:Boolean,
    uploadedBy:String,
    date:{
        type:Date,
        default:Date.now
    }

})



mongoose.model('Notes',noteSchema);

module.exports=mongoose.model('Notes');