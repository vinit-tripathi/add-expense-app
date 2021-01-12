const outputValue = document.querySelector("#textOutput");
    
            let totalExpense = 0;
    
            outputValue.textContent = totalExpense;
            // onButtonClick add Input Amount to totalExpense
            function addExpenseToTotal(){
                // read value from input
                const inputElement = document.querySelector("#inputAmount");
                const textAmount = inputElement.value;
                
    
                // convert it to number
                const expense = parseInt(textAmount, 10);
                
    
                // add that value to total expense
                totalExpense = totalExpense + expense;
                
                // set output to total expense
                outputValue.textContent = totalExpense;
    
            }
            
            
    
            
            const element = document.querySelector("#btnAddExpense");
            element.addEventListener("click", addExpenseToTotal, false);
    