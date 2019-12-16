const addForm = document.querySelector('.form');
const injector = document.querySelector('.undolist');
const search = document.querySelector('.input__search');
const input = document.querySelector('.todo__input');

let template = todo => {
    let html = `<li>
        <span class="title">${todo}</span>
            <svg class="svg">
                <use class="use" xlink:href='src/sprite.svg#icon-bin'></use>
            </svg>
    </li>`;
    injector.innerHTML += html;
};

let checkRequired = () => {
    if(input.required) {

    }
};

if(input.click) {
    input.addEventListener('keyup',() => {
        if(input.validity.valid) {
            input.style.border = '1px solid rgba(96, 255, 96, 0.8)';
        } else if(!input.value.length) {
            input.style.border = '1px solid rgba(255, 96, 96, 0.8)';
        }
    });
} else {
    input.style.border = 'none';
}


addForm.addEventListener('submit', e => {
    e.preventDefault();
    let todo = addForm.todo.value.trim();
    if(todo.length) {
        template(todo);
        addForm.reset();
    }
});

injector.addEventListener('click', e => {
    if(e.target.classList.contains("svg")) {
        e.target.parentElement.remove();
    } else if(e.target.classList.contains("use")) {
        e.target.parentElement.parentElement.remove();
    };
});

let filterTodo = term => {

    Array.from(injector.children)
    .filter( todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => {
            todo.classList.add('filtered');
        }
    );

    Array.from(injector.children)
    .filter( todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => {
            todo.classList.remove('filtered');
        }
    );

};

search.addEventListener('keyup', () => {
    let term = search.value.trim().toLowerCase();
    filterTodo(term);
});