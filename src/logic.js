var tasksArray = [];

export default function logic(){
    return {
        createNewProject,
        deleteProject,
        addTaskToProject,
        deleteTaskFromProject,
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
function addTaskToProject(index){
    tasksArray[index].tasks.push({
        title,
        description,
        dueDate
    }); 
}
function deleteTaskFromProject(indexOfProject,indexOfTask){
    tasksArray[indexOfProject].tasks.splice(indexOfTask,1);
}
function getAllProjectName(){
    var allProjectsName = [];
    for (const project of tasksArray) {
        allProjectsName.push(project.projectName);
    }
    return allProjectsName;
}