//by using mongoose,we created schema and model and exported..also done the connection



const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://abhavya:^vvrulc2q@cluster0.vurci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const userSchema=new mongoose.Schema({
    username:String,
    name:String,
    email:String,
    password:String,
    date:{
        type:Date,
        default:Date.now
    }

})


mongoose.model('User_ys',userSchema);

module.exports=mongoose.model('User_ys');