const text_input = document.querySelector(".text-input")
const number_input = document.querySelector(".number-input")
const add_btn = document.querySelector(".add-btn")
const ul = document.querySelector(".list-group")

add_btn.addEventListener("click", () => {
    if (text_input.value !== "" && number_input.value !== "") {
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-center align-items-center">
<span class="d-flex justify-content-center align-items-center">
<div class="circle">${text_input.value[0].toUpperCase()}</div>
<input type="checkbox" class="check-box mx-1">
        ${text_input.value} ${number_input.value} 
</span>
        <button class="li-btn btn btn-danger">delete</button>
        </li>`
    }
    ul.addEventListener('click', (e) => {
        if (e.target.classList.contains('li-btn')) {
            e.target.parentNode.remove()
        }
        if (e.target.classList.contains('check-box')) {
            e.target.parentNode.classList.toggle('line')
        }
    })
    text_input.value = ""
    number_input.value = ""
})


text_input && number_input.addEventListener("keydown",(e) =>{
    if (e.key === "Enter") {
        if (text_input.value !== "" && number_input.value !== "") {
            ul.innerHTML += `<li class="list-group-item d-flex justify-content-center align-items-center">
<span class="d-flex justify-content-center align-items-center">
<div class="circle">${text_input.value[0].toUpperCase()}</div>
<input type="checkbox" class="check-box mx-1">
        ${text_input.value} ${number_input.value} 
</span>
        <button class="li-btn btn btn-danger">delete</button>
        </li>`
        }
    }
})



