const{ addExpense, getAllExpenses, deleteExpense } = require('../controller/expenseController');

const router = require('express').Router();

router.post('/addExpense', addExpense);
router.get('/getAllExpenses', getAllExpenses);
router.delete('/deleteExpense/:id', deleteExpense);

module.exports = router;