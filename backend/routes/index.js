var express = require('express');
var router = express.Router();
var User=require("../models/userModel.js")
let secret="mysecretcode";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup',async (req,res)=>{
  let {username,name,email,password}=req.body;

  //step-1 checking email
  let emailCon=await User.findOne({email});
  if(emailCon){
    return res.json({
      message:"email already exists"
    })
  }

  else{
    var bcrypt = require('bcryptjs');
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash( password, salt,async function(err, hash) {
         let user=await User.create({
            username,name,email,password:hash
            })
            let jwt=require('jsonwebtoken');

            let token=jwt.sign({userId: user._id, email:user.email},secret)

            res.json({
                success:true,
                userId:user._id,
                message:"user created",
                token:token
            })
        });
    }
);


  }
})

module.exports = router;
