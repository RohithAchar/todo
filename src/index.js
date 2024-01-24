import logic from "./logic";
import render from './userInterface';
import './styles.css';

//Rendering
function renderLeftSideBar(){
    render().clearLeftSideBar();
    render().leftSideBarHeading();
    render().addProjectBtn();
    render().projectName(
        logic().getAllProjectName()
    );
    eventForProjectBtn();
}
renderLeftSideBar();
function renderMainContent(projectIndex){
    render().clearMain();
    render().addTaskBtn(projectIndex);
    render().header();
    render().tasks(
        logic().getTasksFromProject(projectIndex)
    );
    eventForAddTaskBtn(projectIndex);
    eventForDeleteTaskBtn(projectIndex);
}
//Events
function eventForProjectBtn(){
    const addNewProjectBtn = document.querySelector('.project-btn');
    addNewProjectBtn.addEventListener('click',getProjectName);
}
function eventForProjects(){
    var projects = document.querySelectorAll('.project');
    for (const project of projects) {
        project.addEventListener('click',(e) => renderMainContent(e.target.id));
    }
}
function eventForAddTaskBtn(projectIndex){
    const addTaskBtn = document.querySelector('.btn');
    addTaskBtn.addEventListener('click',() => addNewTask(projectIndex));
}
function eventForDeleteTaskBtn(projectIndex){
    const deleteBtns = document.querySelectorAll('.delete-btn');
    for (const deleteBtn of deleteBtns) {
        deleteBtn.addEventListener('click',(e) => deleteTask(projectIndex, e.target.id));
    }
}

//User Interactions
function getProjectName(){
    var projectName = prompt('Project title');
    addNewProject(projectName);
    renderLeftSideBar();
    eventForProjects();
}

//Logic Interaction
function addNewProject(projectName){
    logic().createNewProject(projectName);
}
function addNewTask(projectIndex){
    var title = 'title';
    var description = 'Desc';
    var dueDate = '27-09-2003';
    logic().addTaskToProject(
        projectIndex,
        title,
        description,
        dueDate
    );
    renderMainContent(projectIndex);
}
function deleteTask(projectIndex, deleteBtnId){
    var taskIndex = deleteBtnId.charAt(deleteBtnId.length - 1);
    logic().deleteTaskFromProject(projectIndex, taskIndex);
    renderMainContent(projectIndex);
}