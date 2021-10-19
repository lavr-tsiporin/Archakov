class Todos {
  constructor(root) {
    this._todos = JSON.parse(localStorage.getItem('todos')) || [];
    this._root = root;
  }

  init(){
    this.render()
  }

  render() {
    this._root.innerHTML = ``
    localStorage.setItem('todos', JSON.stringify(this._todos));
    this._todos
      .forEach((task, idx) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');

        btn.addEventListener(
          'click',
          () => {
            this.handleClickRemove(idx);
          },
          { once: true },
        );

        btn.textContent = 'Удалить';
        li.textContent = task;
        li.append(btn);

        this._root.append(li)
      })
  }

  handleClickAdd(todo) {
    if (todo) {
      this._todos = [...this._todos, todo];
      this.render();
    }
  }

  handleClickRemove(id) {
    this._todos = this._todos.filter((_, idx) => idx !== id);
    this.render();
  }
}

const todos = new Todos(document.querySelector('.root'));

document.addEventListener('DOMContentLoaded', () => todos.init());

document.querySelector('[name=todos_form]').addEventListener('submit', (e) => {
  e.preventDefault();
  todos.handleClickAdd(e.target.todo.value);
});
