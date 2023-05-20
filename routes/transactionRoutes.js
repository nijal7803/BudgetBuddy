const express = require("express");
const {
  addNewTransaction,
  getAllTransactions,
  editTransaction,
  deleteTransaction
} = require("../controllers/transactionCtrl");

const router = express.Router();

router.post("/add-transaction", addNewTransaction);

router.post("/edit-transaction",editTransaction)

router.post("/delete-transaction",deleteTransaction)

router.post("/get-transaction", getAllTransactions); 

module.exports = router;
