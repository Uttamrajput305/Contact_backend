const asyncHandler= require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Get all contacts"});
});

//@desc Get contacts
//@route GET /api/contacts/:id
//@access public
const getContactById= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
});

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact= asyncHandler(async(req,res)=>{
    console.log("The request body is:",req.body);
    const {name,email,phone}= req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Al fields are required!");
    }
    res.status(201).json({message:"Create contacts"});
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update contacts for ${req.params.id}`});
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete contacts for ${req.params.id}`});
});

module.exports= {getContact,createContact,updateContact,deleteContact,getContactById}