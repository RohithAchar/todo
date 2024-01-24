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
    // render().projectModal();
    // render().taskModal();
}
renderLeftSideBar();
render().projectModal();
render().taskModal();
function renderMainContent(projectIndex){
    render().clearMain();
    render().addTaskBtn(projectIndex);
    render().header();
    render().tasks(
        logic().getTasksFromProject(projectIndex)
    );
    eventForAddTaskBtn();
    eventForDeleteTaskBtn(projectIndex);
}
//Events
function eventForProjectBtn(){
    const addNewProjectBtn = document.querySelector('.project-btn');
    addNewProjectBtn.addEventListener('click',() => {
        openProjectModal();
    });
}
function eventForProjects(){
    var projects = document.querySelectorAll('.project');
    for (const project of projects) {
        project.addEventListener('click',(e) => renderMainContent(e.target.id));
    }
}
function eventForAddTaskBtn(){
    const addTaskBtn = document.querySelector('.btn');
    // addTaskBtn.addEventListener('click',() => addNewTask(projectIndex));
    addTaskBtn.addEventListener('click',(e) => openTaskModal(e));
}
function eventForDeleteTaskBtn(projectIndex){
    const deleteBtns = document.querySelectorAll('.delete-btn');
    for (const deleteBtn of deleteBtns) {
        deleteBtn.addEventListener('click',(e) => deleteTask(projectIndex, e.target.id));
    }
}
function eventForCancelProject(projectModalDiv){
    var cancelBtn = document.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', () => closeProjectModal(projectModalDiv));
}
function eventForOkProject(projectModalDiv){
    var okBtn = document.querySelector('.ok-btn');
    okBtn.addEventListener('click',() => getProjectTitle(projectModalDiv));
}
function eventForDeleteProjectBtn(){
    var deleteProjectBtns = document.querySelectorAll('.delete-project');
    for (const deleteBtn of deleteProjectBtns) {
        deleteBtn.addEventListener('click', (e) => deleteProject(e));
    }
}
function eventForCloseModalBtn(taskModalDiv){
    var closeTaskModalBtn = document.querySelector('.close-task-modal');
    closeTaskModalBtn.addEventListener('click',() => closeTaskModal(taskModalDiv));
}
function eventForAddBtn(projectIndex, taskModalDiv){
    var addTaskBtn = document.querySelector('.add-task-btn');
    addTaskBtn.addEventListener('click',() => getTaskDetails(projectIndex, taskModalDiv));
}

//User Interactions
function openProjectModal(){
    // var projectName = prompt('Project title');
    // addNewProject(projectName);
    // renderLeftSideBar();
    // eventForProjects();
    const projectModalDiv = document.querySelector('.project-modal-hide');
    projectModalDiv.classList.remove('project-modal-hide');
    projectModalDiv.classList.add('project-modal');
    eventForCancelProject(projectModalDiv);
    eventForOkProject(projectModalDiv);
}
function closeProjectModal(projectModalDiv){
    projectModalDiv.classList.remove('project-modal');
    projectModalDiv.classList.add('project-modal-hide');
}
function getProjectTitle(projectModalDiv){
    var titleInput = document.getElementById('title');
    var title = titleInput.value;
    if(title.length > 0){
        titleInput.value = '';
        setNewProject(title.toUpperCase());
        renderLeftSideBar();
        eventForProjects();
        eventForDeleteProjectBtn();
        closeProjectModal(projectModalDiv);
    }
}
function openTaskModal(addTaskBtnId){
    var id = addTaskBtnId.target.id;
    var projectIndex = id.charAt(id.length - 1);
    var taskModal = document.getElementById('task-modal');
    taskModal.classList.remove('hide-task-modal-container');
    taskModal.classList.add('show-task-modal-container');
    eventForCloseModalBtn(taskModal);
    eventForAddBtn(projectIndex, taskModal);
}
function closeTaskModal(taskModalDiv){
    taskModalDiv.classList.remove('show-task-modal-container');
    taskModalDiv.classList.add('hide-task-modal-container');
}
function getTaskDetails(projectIndex, taskModalDiv){
    var titleInput = document.getElementById('task-title');
    var descriptionInput = document.getElementById('description');
    var dueDate = document.getElementById('due-date');

    var title = titleInput.value;
    var description = descriptionInput.value;
    var date = dueDate.value;

    if(
        title.length > 0 &&
        description.length > 0 &&
        date.length > 0
    ){
        addNewTask(
            projectIndex,
            title.toUpperCase(),
            description,
            date,
            taskModalDiv
        );
    }
    titleInput.value = "";
    descriptionInput.value = '';
    dueDate.value = '';
}

//Logic Interaction
function setNewProject(projectName){
    logic().createNewProject(projectName);
}
function addNewTask(projectIndex, title, description, dueDate,taskModalDiv){
    var addTaskBtn = document.querySelector('.btn');
    var btnId = addTaskBtn.id;
    var index = btnId.charAt(btnId.length - 1);
    logic().addTaskToProject(
        index,
        title,
        description,
        dueDate
    );
    closeTaskModal(taskModalDiv);
    renderMainContent(index);
}
function deleteTask(projectIndex, deleteBtnId){
    var taskIndex = deleteBtnId.charAt(deleteBtnId.length - 1);
    logic().deleteTaskFromProject(projectIndex, taskIndex);
    renderMainContent(projectIndex);
}
function deleteProject(e){
    var id = e.target.id;
    var projectIndex = id.charAt(id.length - 1);
    logic().deleteProject(projectIndex);
    renderLeftSideBar();
    renderMainContent(projectIndex);
    eventForDeleteProjectBtn();
}