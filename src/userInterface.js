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
        addProjectBtn
    }
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
        tasks.forEach(task => {
            mainDiv.appendChild(
                createCard(
                    task.title,
                    task.description,
                    task.dueDate    
                )
            );
        });
    }
}
function createCard(title,description,dueDate){
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var titleTag = document.createElement('h3');
    titleTag.textContent = title;
    var descriptionTag = document.createElement('p');
    descriptionTag.textContent = description;
    var dueTag = document.createElement('p');
    dueTag.textContent = dueDate;

    cardDiv.append(titleTag,descriptionTag,dueTag);
    return cardDiv;
}

// Erasing
function clearLeftSideBar(){
    leftSideBarDiv.textContent = '';
}
function clearMain(){
    mainDiv.textContent = '';
}