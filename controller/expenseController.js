const expenseModel= require('../models/expenseModel');

const addExpense= async(req, res)=>{
    const{title, amount, date, category, description,type}= req.body;

    if(!title|| !amount|| !date|| !category|| !description){
        return res.status(400).json({msg: "All fields are required"});
    }
    try{
        if(amount<0 || !amount=='number'){
            return res.status(400).json({msg: "Amount must be a positive number"});
        }
        const expense= new expenseModel({
            title, amount, date, category, description,type
    });
    await expense.save();
    res.json({msg: "Expense added successfully"});
}
catch(err){
    return res.status(500).json({msg:err.message});
    }
}

const getAllExpenses = async(req, res)=>{
    try{
        const expenses= await expenseModel.find().sort({createdAt: -1});
        res.json(expenses);
    }
    catch(err){
        return res.status(500).json({msg:err.message});
    }
}

const deleteExpense= async(req,res)=>{
    const{id}= req.params;
    try{
        expenseModel.findByIdAndDelete(id)
        .then(()=>{
            return res.json({msg: "Expense deleted successfully"});
        }).catch((err)=>{
            return res.status(500).json({msg:err.message});
        });
    }
    catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports={
    addExpense,
    getAllExpenses, 
    deleteExpense
}