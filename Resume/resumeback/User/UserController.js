const Schema=require('./UserSchema')
const multer = require('multer');

    const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./upload')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
    })

    const upload=multer({storage:storage}).single('img')
const adduser=(req,res)=>{
    newuser=new Schema({
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email,
        age:req.body.age,
        gender:req.body.gender,
        qualification:req.body.qualification,
        skills:req.body.skills,
        experience:req.body.experience,
        password:req.body.password,
        img:req.file
    })
    newuser.save()
    .then(data=>{
        console.log("Saved Successfully")
        res.json({
            status:200,
            msg:"Saved Succesfully",
            data:data
        })
    })
    .catch(error=>{
        console.log("Error Occured")
        res.json({
            status:500,
            msg:"Error",
            data:error
        })
    })       
    }
const login=(req,res)=>{
        const email=req.body.email
        const password=req.body.password
    
        Schema.findOne({
            email:email
        })
        .exec()
        .then(data=>{
            if(password==data.password)
            {
                console.log("Login Sucesfully")
                res.json({
                    status:200,
                    msg:"Login Sucess",
                    data:data,
                    alert:"Login Sucess"
                })
            }
            else{
                res.json({
                    status:500,
                    msg:"Password Mismatch",
                    alert:"Password mismatch"
                })
            }
        })
        .catch(err=>{
            res.json({
                status:500,
                msg:"user not found",
                Error:err
            })
        })
    }
const viewuser=(req,res)=>{
    Schema.findById({
    _id:req.params.id
    })
    .exec()
    .then(data=>{
        console.log("Data Fetched Succesfully")
        res.json({
            status:200,
            msg:"Saved Succesfully",
            data:data
        })
    })
    .catch(error=>{
        console.log("Error Occured")
        res.json({
            status:500,
            msg:"Error",
            data:error
        })
    }) 
}
const edit=(req,res)=>{
    Schema.findByIdAndUpdate({
        _id:req.params.id},
        {
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email,
        age:req.body.age,
        gender:req.body.gender,
        qualification:req.body.qualification,
        skills:req.body.skills,
        experience:req.body.experience,
        password:req.body.password,
        img:req.file} )

.exec()
.then(data=>{

    console.log(data)
    res.json({
        status:200,
        msg:'Updated Succesfully',
        data:data
    })

})
.catch(err=>{
console.log(err);
res.json({
    status:500,
    msg:"No Update"
})
})
}

module.exports={adduser,login,upload,viewuser,edit}