var tasksArray = [];

export default function logic(){
    return {
        createNewProject,
        deleteProject,
        addTaskToProject,
        deleteTaskFromProject,
        getAllProjectName,
        getTasksFromProject
    }
}

function createNewProject(projectName){
    tasksArray.push({
        projectName: projectName,
        tasks: new Array()
    });
}
function deleteProject(index){
    tasksArray.splice(index,1);
}
function getAllProjectName(){
    var allProjectsName = [];
    for (const project of tasksArray) {
        allProjectsName.push(project.projectName);
    }
    return allProjectsName;
}
function addTaskToProject(index,title,description,dueDate){
    tasksArray[index].tasks.push({
        title : title,
        description : description,
        dueDate : dueDate
    }); 
}
function deleteTaskFromProject(indexOfProject,indexOfTask){
    tasksArray[indexOfProject].tasks.splice(indexOfTask,1);
}
function getTasksFromProject(indexOfProject){
    return tasksArray[indexOfProject].tasks;
}
function getAllProjectTask(){
    var tasks = [];
    for (const project of tasksArray) {
        tasks.push(project.tasks);
    }
    return tasks;
}
