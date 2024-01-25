import logic from "./logic";
import render from './userInterface';
import './styles.css';

// Rendering
init();
function init(){
    render().clearLeftSideBar();
    render().leftSideBarHeading();
    render().addProjectBtn();
    render().clearMain();
    renderProjects();
    eventForAddProjectBtn();
};
function renderProjects(){
    render().projectName(
        logic().getAllProjectName()
    );
    eventsForProject();
    eventsForDeleteProjectBtn();
}
function openProjectModal(){
    render().projectModal();
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
function eventsForDeleteProjectBtn(){
    var deleteProjectBtns = document.querySelectorAll('.delete-project');
    for (const deleteBtn of deleteProjectBtns) {
        deleteBtn.addEventListener('click',deleteProject);
    }
}
function eventsForProject(){

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
//logic
function pushProject(projectName){
    logic().createNewProject(projectName);
    init();
}
function deleteProject(e){
    var deleteBtnId = e.target.id;
    var projectId = deleteBtnId.charAt(deleteBtnId.length - 1);
    logic().deleteProject(projectId);
    init();
}