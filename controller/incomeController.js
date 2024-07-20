const incomeModel = require('../models/incomeModel');

const addIncome= async(req, res)=>{
    const{title, amount, date, category, description,type}= req.body;
    if(!title||!amount|| !date|| !category|| !description){
        return res.status(400).json({msg: "All fields are required"});
    }
    try{
        if(amount<0 || !amount=='number'){
            return res.status(400).json({msg: "Amount must be a positive number"});
        }
        const income= new incomeModel({
        title, amount, date, category,description,type
        });
        await income.save();
        res.json({msg: "Income added successfully"});
}
catch(err){
    return res.status(500).json({msg:err.message});
    }
}

const getAllIncomes = async(req, res)=>{
    try{
        const incomes= await incomeModel.find().sort({createdAt: -1});
        res.json(incomes);
    }
    catch(err){
        return res.status(500).json({msg:err.message});
    }
}

const deleteIncome= async(req,res)=>{
    const{id}= req.params;
    try{
        incomeModel.findByIdAndDelete(id)
        .then(()=>{
            return res.json({msg: "Income deleted successfully"});
        }).catch((err)=>{
            return res.status(500).json({msg:err.message});
        });
    }
    catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports={
    addIncome,
    getAllIncomes,
    deleteIncome
}