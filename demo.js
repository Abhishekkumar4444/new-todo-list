const formtodo = document.querySelector(".form-todo")
const input = document.querySelector(".form-todo input[type='text']");
const ul = document.querySelector(".todo-list");
formtodo.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = input.value;
    if (data) {

        const newli = document.createElement("li");
        const newlihtml = `<span class="text">${data}</span>
        <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
        </div>`;
        newli.innerHTML = newlihtml;
        ul.prepend(newli);
        input.value = "";
    }


});

ul.addEventListener('click', (e) => {
    if (e.target.classList.contains("done")) {
        let lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";
    } else if (e.target.classList.contains("remove")) {
        e.target.parentNode.parentNode.remove();

    }
});