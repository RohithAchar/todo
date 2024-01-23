const leftSideBarDiv = document.querySelector('#left-side-bar');
var projectCount = 0;

function leftSideBarHeading(){
    var heading = document.createElement('h1');
    heading.id = "todo-logo";
    heading.textContent = "TODO";
    leftSideBarDiv.appendChild(heading);
}
function renderProject(tasksArray){

}