const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form");
const addButton = document.querySelector(".button");
const closeButtons = document.querySelectorAll(".close");
const create = document.querySelector(".create");
const titleField = document.querySelector(".tittle");
const income = document.querySelector("#income");
const expense = document.querySelector("#expense");
const amountField = document.querySelector(".amount");
const transactions = [];
addButton.addEventListener("click", function() {
    form.style.display = "block";
    overlay.style.display = "block";
});
closeButtons.forEach((close) => {
    close.addEventListener("click", function() {
        form.style.display = "none";
        overlay.style.display = "none";
    });
});
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const title=titleField.value
    const amount=amountField.value

   let type= ''
   if(income.checked ===  true){
   type=income.value
   }
   if(expense.checked === true){
    type=expense.value
   }
   
//    here we are saving all our input data into one object
   const inputData={
    title,
    amount:Number(amount),
    type
   }

   transactions.push(inputData)
  
   localStorage.setItem("transactions" , JSON.stringify())

   console.log(inputData)
});

