const {addIncome, getAllIncomes, deleteIncome}= require('../controller/incomeController')
const router= require('express').Router();

router.post('/addIncome', addIncome);
router.get('/getAllIncomes',getAllIncomes);
router.delete('/deleteIncome/:id',deleteIncome);

module.exports= router;