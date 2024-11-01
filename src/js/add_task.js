const addBtn = document.querySelector(".add-task-btn");
const blurDiv = document.querySelector(".blur");
const addForm = document.querySelector(".add-task-form");

addBtn.addEventListener("click", () => {
    addBtn.classList.toggle("active");
    blurDiv.classList.toggle("active");
    addForm.classList.toggle("active");
});

// console.log(addBtn, blur, addForm);