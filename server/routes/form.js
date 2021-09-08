const express = require('express');
const user = require('../models/user');
const router = express.Router();


router.post("/add", async(req,res) => {
    const {name,phone,email,hobbies}  = req.body;
    console.log(req.body)
    if(!name || ! phone || !email || !hobbies){
        return res.send({msg:"Please fill all the details"})
    }else{
        const data = new user({
            name,number:phone,email,hobbies
        })
        await data.save();
    }
})

router.get("/users",async(req,res) => {
    try {
        const data = await user.find();
        res.status(200).json(data);
        // console.log(User.favourite)
      } catch (e) {
        console.log(e);
        res.status(500).json();
      }
    
})

router.delete("/delete/:id", async(req,res) => {
    const id = req.params.id;
    await user.findByIdAndRemove(id);
})

module.exports = router;