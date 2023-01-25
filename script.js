const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4']

function addTask(task){
    tasks.push(task) 
    return tasks 
}

function deleteTask(task){
    tasks.splice(tasks.indexOf(task),1)
    return tasks
}

function updateTask(task){
    const oldTask = tasks[tasks.indexOf(task)]
    tasks.splice(tasks.indexOf(task),1)
    tasks.unshift(oldTask)
    return tasks
}

console.log(addTask('Task 5'))
console.log(deleteTask('Task 1'))
console.log(updateTask('Task 5'))