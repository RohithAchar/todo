import logic from "./logic";
import render from './userInterface';
import './styles.css';

render().addProjectBtn();
const addProjectButton = document.querySelector('.project-btn');
addProjectButton.addEventListener('click',addProject);

function addProject(){
    var projectName = prompt('project name');
    logic().createNewProject(projectName);
    renderLeftSideBar();
}
function renderLeftSideBar(){
    render().clearLeftSideBar();
    render().addProjectBtn();
    const addProjectButton = document.querySelector('.project-btn');
    addProjectButton.addEventListener('click',addProject);
    render().projectName(
        logic().getAllProjectName()
    );
    var projects = document.querySelectorAll('a');
    for (const project of projects) {
        project.addEventListener('click',addGetTaskBtn);
    }
}
function addGetTaskBtn(event){
    var index = event.target.id;
    renderTask(index);
    var addTask = document.getElementById(`project-${index}`);
    addTask.addEventListener('click',() => setTask(index));
}
function setTask(index){
    var title = prompt('title');
    var description = prompt('description');
    var dueDate = prompt('dueDate');
    logic().addTaskToProject(
        index,
        title,
        description,
        dueDate
    );
    renderTask(index);
    var addTask = document.getElementById(`project-${index}`);
    addTask.addEventListener('click',() => setTask(index));
}

function renderTask(index){
    render().clearMain();
    render().addTaskBtn(index);
    render().tasks(logic().getTasksFromProject(index));
}