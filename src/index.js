import logic from "./logic";
import render from './userInterface';
import './styles.css';

// Rendering
init();
render.projectModal();
render.taskModal();
function init(){
    render.clearLeftSideBar();
    render.leftSideBarHeading();
    render.addProjectBtn();
    render.clearMain();
    renderProjects();
    eventForAddProjectBtn();
};
function renderProjects(){
    render.projectName(
        logic.getAllProjectName()
    );
    eventsForProject();
    eventsForDeleteProjectBtn();
}
function openProjectModal(){
    // render.projectModal();
    var projectModal = document.getElementById('project-modal');
    projectModal.classList.remove('project-modal-hide');
    projectModal.classList.add('project-modal');
    eventForOkBtn();
    eventForCancelBtn();
}
function closeProjectModal(){
    var projectModal = document.getElementById('project-modal');
    projectModal.classList.remove('project-modal');
    projectModal.classList.add('project-modal-hide');
}
function renderMain(projectId){
    render.clearMain();
    render.addTaskBtn(projectId);
    render.header();
    render.tasks(logic().getTasksFromProject(projectId));
    eventForTaskBtn();
    eventForDeleteTaskBtns();
}
// function renderProjectTasks(projectId){
//     render.clearMain();
//     render.addTaskBtn(projectId);
//     render.tasks(logic().getTasksFromProject(projectId));
//     eventForTaskBtn();
// }
function openTaskModal(e){
    var taskBtnId = e.target.id;
    var projectId = taskBtnId.charAt(taskBtnId.length - 1);
    // render.taskModal();
    var taskModal = document.getElementById('task-modal');
    taskModal.classList.remove('hide-task-modal-container');
    taskModal.classList.add('show-task-modal-container');

    eventForCloseTaskModal();
    eventForAddBtn();
}
function closeTaskModal(){
    var taskModal = document.getElementById('task-modal');
    taskModal.classList.remove('show-task-modal-container');
    taskModal.classList.add('hide-task-modal-container');
}

//Events
function eventForAddProjectBtn(){
    const addProjectBtn = document.querySelector('.project-btn');
    addProjectBtn.addEventListener('click', openProjectModal);
}
function eventForCancelBtn(){
    const cancelBtn = document.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', closeProjectModal);
}
function eventForOkBtn(){
    const okBtn = document.querySelector('.ok-btn');
    okBtn.addEventListener('click', getProjectName);
}
function eventsForDeleteProjectBtn(){
    var deleteProjectBtns = document.querySelectorAll('.delete-project');
    for (const deleteBtn of deleteProjectBtns) {
        deleteBtn.addEventListener('click',deleteProject);
    }
}
function eventsForProject(){
    const projects = document.querySelectorAll('.project');
    for (const project of projects) {
        project.addEventListener('click',(e) => renderMain(e.target.id));
    }
}
function eventForTaskBtn(){
    var taskBtn = document.querySelector('.btn');
    taskBtn.addEventListener('click',openTaskModal);
}
function eventForCloseTaskModal(){
    var closeTaskModalBtn = document.querySelector('.close-task-modal');
    closeTaskModalBtn.addEventListener('click',closeTaskModal);
}
function eventForAddBtn(){
    const addBtn = document.querySelector('.add-task-btn');
    addBtn.addEventListener('click',getTaskDetail);
}
function eventForDeleteTaskBtns(){
    var deleteBtns = document.querySelectorAll('.delete-btn');
    for (const deleteBtn of deleteBtns) {
        deleteBtn.addEventListener('click',deleteTask);
    }
}

//User input
function getProjectName(){
    var titleInput = document.getElementById('title');
    var projectName = titleInput.value;
    if(projectName.length > 0){
        pushProject(projectName.toUpperCase());
        titleInput.value = '';
        closeProjectModal();
    }
}
function getTaskDetail(){
    const addTaskBtn = document.querySelector('.btn');
    var addTaskBtnId = addTaskBtn.id;
    var projectIndex = addTaskBtnId.charAt(addTaskBtnId.length - 1);
    var titleInput = document.getElementById('task-title');
    var title = titleInput.value;
    var descriptionInput = document.getElementById('description');
    var description = descriptionInput.value;
    var dueDateInput = document.getElementById('due-date');
    var dueDate = dueDateInput.value;

    if(
        title.length > 0 &&
        description.length > 0 &&
        dueDate.length > 0
    ){
        pushTask(projectIndex,title.toUpperCase(),description,dueDate);
        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        closeTaskModal();
    }
}
//logic
function pushProject(projectName){
    logic.createNewProject(projectName);
    init();
}
function deleteProject(e){
    var deleteBtnId = e.target.id;
    var projectId = deleteBtnId.charAt(deleteBtnId.length - 1);
    logic.deleteProject(projectId);
    init();
}
function pushTask(projectIndex,title,description,due){
    logic.addTaskToProject(projectIndex,title,description,due);
    renderMain(projectIndex);
}
function deleteTask(e){
    const taskBtn = document.querySelector('.btn');
    var taskBtnId = taskBtn.id;
    var projectIndex = taskBtnId.charAt(taskBtnId.length - 1);
    var deleteBtnId = e.target.id;
    var taskIndex = deleteBtnId.charAt(deleteBtnId.length - 1);

    logic.deleteTaskFromProject(projectIndex, taskIndex);
    renderMain(projectIndex);
}