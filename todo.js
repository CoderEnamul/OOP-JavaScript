class Todo{
    constructor(name){
        this.name = `${name} Todo List`;
        this.todoList = [];
    }

    addTask(task){
        this.todoList.push(task);

    };
    printTasks(){
        console.log(`Tasks in ${this.name}:`);
        
        this.todoList.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
            
        })
    }
}

// usage
const personalTodoList = new Todo("Personal");
personalTodoList.addTask('Buy groceries');
personalTodoList.addTask('Walk the dog');
personalTodoList.addTask('Read a book');
personalTodoList.printTasks();

const personalTodoList1 = new Todo("Official");
personalTodoList1.addTask('Prepare presentation');
personalTodoList1.addTask('Attend team meeting');
personalTodoList1.addTask('Submit report');
personalTodoList1.printTasks();