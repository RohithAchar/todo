const leftSideBarDiv = document.querySelector('#left-side-bar');
const mainDiv = document.querySelector('#main-container');

export default function render(){
    return{
        leftSideBarHeading,
        projectName,
        addTaskBtn,
        tasks,
        clearLeftSideBar,
        clearMain,
        addProjectBtn,
        header
    }
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
            var aTag = document.createElement('a');
            aTag.id = index;
            aTag.classList.add('project');
            aTag.href = "#";
            aTag.textContent = name;
            leftSideBarDiv.appendChild(aTag);
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
    var titleTag = document.createElement('h3');
    titleTag.textContent = title;
    var descriptionTag = document.createElement('h3');
    descriptionTag.textContent = description;
    var dueTag = document.createElement('h3');
    dueTag.textContent = dueDate;
    var deleteBtn = document.createElement('button');
    deleteBtn.id = `delete-${deleteBtnId}`;
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    cardDiv.append(titleTag,descriptionTag,dueTag,deleteBtn);
    return cardDiv;
}

// Erasing
function clearLeftSideBar(){
    leftSideBarDiv.textContent = '';
}
function clearMain(){
    mainDiv.textContent = '';
}