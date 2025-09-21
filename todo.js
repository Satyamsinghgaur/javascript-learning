let todo = [];

let request = prompt("Please enter your request!");
while(true){
    if(request.toLowerCase() == "quit"){
        console.log("Exiting the todo app");
        break;
    }
    else if(request.toLowerCase() == "list"){
        console.log("All the work you have to do is:");
        console.log("-------------------");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-------------------");
    }
    else if(request.toLowerCase() == "add"){
        let newTask = prompt("Write the task you want to do!");
        todo.push(newTask);
        console.log("New task "+ newTask+ " is added into todo list.");
    }
    else if(request.toLowerCase() == "delete"){
        let idx = prompt("Enter the task index form todo list that you want to delete");
        let del = todo.splice(parseInt(idx), 1);
        console.log(`Task ${del} is removed form the todo list.`);
    }
    else{
        console.log("You have entered wrong request");
    }
    request = prompt("Please enter your request!");   
}