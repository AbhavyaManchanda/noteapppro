//by using mongoose,we created schema and model and exported..also done the connection



const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://manchandakhushi14:^vvrulc2q@booking-app-db.cjvo4.mongodb.net/?retryWrites=true&w=majority&appName=booking-app-db")

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