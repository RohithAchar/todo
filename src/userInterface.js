const leftSideBarDiv = document.querySelector('#left-side-bar');
const mainDiv = document.querySelector('#main-container');
const contentDiv = document.querySelector('#content');

// export default function render(){
//     return{
//         leftSideBarHeading,
//         projectName,
//         addTaskBtn,
//         tasks,
//         clearLeftSideBar,
//         clearMain,
//         addProjectBtn,
//         header,
//         projectModal,
//         taskModal
//     }
// }
export default {
    leftSideBarHeading,
    projectName,
    addTaskBtn,
    tasks,
    clearLeftSideBar,
    clearMain,
    addProjectBtn,
    header,
    projectModal,
    taskModal
}
function header(){
    var div = document.createElement('div');
    div.classList.add('card');

    var title = document.createElement('h3');
    title.textContent = "Title";
    var description = document.createElement('h3');
    description.textContent = "Description";
    var dueDate = document.createElement('h3');
    dueDate.textContent = "Due Date";

    div.append(title,description,dueDate);
    mainDiv.appendChild(div);
}
// Left sidebar 
function addProjectBtn(){
    var addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('project-btn');
    addProjectBtn.textContent = 'Add new project';
    leftSideBarDiv.appendChild(addProjectBtn);
}
function leftSideBarHeading(){
    var heading = document.createElement('h1');
    heading.id = "todo-logo";
    heading.textContent = "TODO";
    leftSideBarDiv.appendChild(heading);
}
function projectName(projectNames){
    if(projectNames.length > 0){
        projectNames.forEach((name, index) => {
            var projectWrapper = document.createElement('div');
            projectWrapper.classList.add('project-wrapper');

            var aTag = document.createElement('a');
            aTag.id = index;
            aTag.classList.add('project');
            aTag.href = "#";
            aTag.textContent = name;

            var deleteProjectBtn = document.createElement('button');
            deleteProjectBtn.id = `delete-project-${index}`
            deleteProjectBtn.classList.add('delete-project');
            deleteProjectBtn.textContent = "X";

            projectWrapper.append(aTag,deleteProjectBtn);
            leftSideBarDiv.append(projectWrapper);
        });
    }
}
// Main container
function addTaskBtn(index){
    var addTaskBtn = document.createElement('button');
    addTaskBtn.id = `project-${index}`;
    addTaskBtn.classList.add('btn');
    addTaskBtn.textContent = 'Add new task';
    mainDiv.appendChild(addTaskBtn);
}
function tasks(tasks){
    if(tasks.length > 0){
        tasks.forEach((task, index) => {
            mainDiv.appendChild(
                createCard(
                    index,
                    task.title,
                    task.description,
                    task.dueDate    
                )
            );
        });
    }
}
function createCard(deleteBtnId,title,description,dueDate){
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    // cardDiv.id = `task-${index}`;
    var titleTag = document.createElement('p');
    titleTag.textContent = title;
    var descriptionTag = document.createElement('p');
    descriptionTag.textContent = description;
    var dueTag = document.createElement('p');
    dueTag.textContent = dueDate;
    var deleteBtn = document.createElement('button');
    deleteBtn.id = `delete-${deleteBtnId}`;
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    cardDiv.append(titleTag,descriptionTag,dueTag,deleteBtn);
    return cardDiv;
}
function projectModal(){
    var formWrapper = document.createElement('div');
    formWrapper.id = 'project-modal';
    formWrapper.classList.add('project-modal-hide');
    var inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');
    var titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.required = true;
    titleInput.placeholder = 'Enter the project name';
    var titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';

    inputWrapper.append(titleLabel, titleInput);
    formWrapper.append(inputWrapper,okCancelButton());
    contentDiv.append(formWrapper);
}
function taskModal(){
    var taskModalContainer = document.createElement('div');
    taskModalContainer.id = 'task-modal';
    taskModalContainer.classList.add('hide-task-modal-container');

    var inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');

    var titleLabel = document.createElement('label');
    titleLabel.textContent = "Title";
    var titleInput = document.createElement('input');
    titleInput.id = 'task-title';
    titleInput.type = 'text';
    var descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = "Description";
    var descriptionInput = document.createElement('input');
    descriptionInput.id = 'description';
    descriptionInput.type = 'text';
    var dateLabel = document.createElement('label');
    dateLabel.textContent = "Due Date";
    var dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'due-date';
    var closeBtn = document.createElement('button');
    closeBtn.classList.add('close-task-modal');
    closeBtn.textContent = 'Close';
    var addBtn = document.createElement('button');
    addBtn.classList.add('add-task-btn');
    addBtn.textContent = 'Add';

    inputWrapper.append(
        titleLabel,
        titleInput,
        descriptionLabel,
        descriptionInput,
        dateLabel,
        dateInput,
        closeBtn,
        addBtn
    );
    taskModalContainer.append(inputWrapper);
    contentDiv.append(taskModalContainer);
}
function okCancelButton(){
    var buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('btn-wrapper');
    var cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel';
    var okButton = document.createElement('button');
    okButton.classList.add('ok-btn');
    okButton.textContent = 'Ok';

    buttonWrapper.append(cancelBtn,okButton);
    return buttonWrapper;
}
// Erasing
function clearLeftSideBar(){
    leftSideBarDiv.textContent = '';
}
function clearMain(){
    mainDiv.textContent = '';
}