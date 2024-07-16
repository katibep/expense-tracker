const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form");
const addButton = document.querySelector(".button");
const closeButtons = document.querySelectorAll(".close");
const create = document.querySelector(".create");
const titleField = document.querySelector(".tittle");
const income = document.querySelector("#income");
const expense = document.querySelector("#expense");
const amountField = document.querySelector(".amount");
const transactionContainer=document.querySelector(".arrows");
const bal=document.querySelector(".bal")
const number1=document.querySelector(".number1")
const number22=document.querySelector(".number2")

// calling the transactions from localStorage
const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

console.log(transactions)
addButton.addEventListener("click", function() {
    form.style.display = "block";
    overlay.style.display = "block";
});
closeButtons.forEach((close) => {
    close.addEventListener("click", function(){
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
//   creating / setting / putting items in the local storage
   localStorage.setItem("transactions" , JSON.stringify(transactions))

//    calling render/update ui function 
   renderTransactions(transactions)
});
// updating ui / Rendering
function renderTransactions(transactions) {
    console.log(transactions)
    transactionContainer.innerHTML = "";
    if (transactions.length > 0) {
      transactions.forEach((transaction) => {
        const transactionHtml = `
        <div class="arrows">
        <div class="all-arrows">
        <div class="down">
            <div class="word">
                ${transaction.type === "income"?"<i class='bx bx-up-arrow-alt'></i>":"<i class='bx bx-down-arrow-alt' ></i>" }
                <p>${transaction.title} <br> <span>food</span></p>
            </div>
            <div class="namba">
                <p>-${transaction.amount} <br> <span>Today</span></p>
            </div>
        </div>
       </div>
     </div>
        `;
        transactionContainer.insertAdjacentHTML("beforeend", transactionHtml);
      });
    } else {
        transactionContainer.innerHTML = "No Transactions";
    }
  }
  renderTransactions(transactions)
  
