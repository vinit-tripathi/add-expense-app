// get the heading element
const headingEl = document.querySelector("#headingTotal");

// get the reference to desc element
const inputDescEl = document.querySelector("#inputDesc");

// ref to input amount
const inputElement = document.querySelector("#inputAmount");

// initial value of expense at 0
let totalExpense = 0;

// all expenses at one place
const allExpenses = [];

// onButtonClick add Input Amount to totalExpense
function addExpenseToTotal() {

    const expenseItem = {};

    // read value from input
    const textAmount = inputElement.value;

    // read the input from input Desc
    const textDesc = inputDescEl.value;

    // convert it to number
    const expense = parseInt(textAmount, 10);

    // put it in object
    expenseItem.desc = textDesc;
    expenseItem.amount = expense;

    allExpenses.push(expenseItem);
    console.table(allExpenses);




    // add that value to total expense
    totalExpense = totalExpense + expense;

    console.log({ totalExpense} );

    // set heading element to total expnense
    headingEl.textContent = totalExpense;


}




const element = document.querySelector("#btnAddExpense");
element.addEventListener("click", addExpenseToTotal, false);