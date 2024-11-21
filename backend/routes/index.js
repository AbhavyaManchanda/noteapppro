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
    //new data
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

router.post("/login",async(req,res)=>{
  let{email,password}=req.body;
  let user=await User.findOne({email})

  if(user){
    let bcrypt=require("bcryptjs");
    bcrypt.compare(password,user.password,async function(err,result){
      if(result){
        const jwt=require("jsonwebtoken");
        let token=jwt.sign({userId:user._id,email:user.email},secret);
        res.json({
          success:true,
          userId:user._id,
          message:"useer logged in",
          token:token
        })
      }
      else{
        res.json({
          success:false,
          message:"invalid password"
        })
      }
    })
  }

  else{
    return res.json({
      success:false,
      message:"invalid email, user not exists"
    })
  }

})


//addNote
let noteModel=require("../models/noteModel.js")

router.post("/addNotes",async(req,res)=>{
  let{title,desc,Content,isImportant,uploadedBy}=req.body;

  let note=await noteModel.create({
    title,
    desc,
    Content,
    isImportant,
    uploadedBy
  });
  res.json({
    success:true,
    message:"note added successfully",
    noteId:note._id
  })
})

 
//getNote
router.post("/getNotes",async (req,res)=>{
  let notes = await noteModel.find({uploadedBy:req.body.uploadedBy})
  if(notes.length > 0){
    res.json(notes);
  }
  else{
    res.json({
      success:false,
      msg:"No Notes Found !"
    })
  }
})


//delete note
router.post("/deleteNote",async (req,res)=>{
  let note = await noteModel.findOneAndDelete({_id:req.body.noteId})
  res.json({
      success:true,
      deleteNote:note._id
    })
  }
)





module.exports = router;
