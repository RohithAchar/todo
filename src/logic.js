var tasksArray = [];

export default function logic(){
    return {
        createNewProject,
        deleteProject,
        addTaskToProject,
        deleteTaskFromProject,
        getAllTasks,
        getAllProjectTasks
    }
}

function createNewProject(){
    tasksArray.push(new Array());
    console.log(tasksArray)
}
function deleteProject(index){
    tasksArray.splice(index,1);
}
function addTaskToProject(index){
    var title = "Work";
    var description = "abcac bacbacb";
    var dueDate = "23-01-2024";

    tasksArray[index].push({
        title,
        description,
        dueDate
    }); 
}
function deleteTaskFromProject(indexOfProject,indexOfTask){
    tasksArray[indexOfProject].splice(indexOfTask,1);
}
function getAllTasks(){
    return tasksArray;
}
function getAllProjectTasks(projectIndex){
    return tasksArray[projectIndex];
}