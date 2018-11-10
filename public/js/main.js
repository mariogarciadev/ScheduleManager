if(localStorage.getItem("storedTasks") != null) {
    getTasks();
}
// Listen for ADD TASK BUTTON Click for ADDTASK()
document.getElementById("addButt").addEventListener("click", addTask);

// Listen for form SUBMIT to save a TASK
document.getElementById("taskForm").addEventListener("submit", saveTask);

// Displays amount of tasks on agenda heading
function showCount(){
    var count = JSON.parse(localStorage.getItem("storedTasks")).length;
    if(count == 0){
        document.getElementById("countNum").innerHTML = "0";
    }
    document.getElementById("countNum").innerHTML = count.toString();
}

var hid = true;

function addTask(){
    var addWindow = document.getElementById("addWindow");

    if(hid == true) {
        addWindow.style.visibility = "visible";
        hid = false;
    } else {
        addWindow.style.visibility = "hidden";
        hid = true;
    }
}
function removeTask(){
    if(hid == false) {
        var addWindow = document.getElementById("addWindow");
        addWindow.style.visibility = "hidden";
        hid = true;
    }
}

/* -------------------------------------------- */


/*** MAIN TASK SAVING FUNCTION ***/
function saveTask(e){
    // Get task value from form
    var taskName = document.getElementById("taskName").value;

    // Validation
    if(validateForm(taskName) == false){
        return false;
    }
    // Create JS task object
    var task = {
        name: taskName
    }
    // Store in local storage
    // If ARRAY with tasks in LOCALSTORAGE == NULL
    if(localStorage.getItem("storedTasks") === null){
      // Create new task array
        var storedTasks = [];
        // Add taskl object to array
        storedTasks.push(task);
        // Store new array in localStorage
        localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
    } else {
        var storedTasks = JSON.parse(localStorage.getItem("storedTasks"));
        storedTasks.push(task);
        // Store new array in localStorage
        localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
    }

    // Clear Form
    document.getElementById("taskForm").reset();
    // Get tasks
    getTasks();
    // Prevent form submission
    e.preventDefault();
}

// FUNCTION VALIDATE FORM
function validateForm(taskName){
    // If task name is NULL return FALSE
    if(!taskName) {
      return false;
    }
    return true;
}

// FUNCTION GET TASKS
function getTasks(){
    // Get storedtasks from localstorage (parse)
    var storedTasks = JSON.parse(localStorage.getItem("storedTasks"));
    // Get agendaList
    var agendaList = document.getElementById("agendaList");
    // Setup agendaList
    agendaList.innerHTML = '';
    // Loop though all tasks
    for(var i = 0; i < storedTasks.length; i++){
        var name = storedTasks[i].name;
        agendaList.innerHTML += "<li>"+(i+1)+". "+name+"<a class='deleteButt' onclick='eraseTask(\""+name+"\")' href='#'>Erase</a></li>";
    }
    showCount();
}

// FUNCTION DELETE TASKS
function eraseTask(name){
    // Get storedtasks from localstorage (parse)
    var storedTasks = JSON.parse(localStorage.getItem("storedTasks"));
    // Loop through array
    for(var i = 0; i < storedTasks.length; i++){
        // If name matches...
        if(storedTasks[i].name == name){
            // Delete from array
            storedTasks.splice(i, 1);
        }
    }
      // Place storedTasks array back in localStorage
      localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
      // Get storedTasks again
      getTasks();
}

/*** DISPLAYS HELP BOX ON HOVERED ***/
// Help for NAVIGATION BAR
document.getElementsByClassName("navBar")[0].addEventListener("mouseover", helpNav);
document.getElementsByClassName("navBar")[0].addEventListener("mouseout", clearHelp);
// Help for ADD BUTTON
document.getElementById("addButt").addEventListener("mouseover", helpAddButt);
document.getElementById("addButt").addEventListener("mouseout", clearHelp);
// Help for ADD WINDOW
document.getElementById("taskForm").addEventListener("mouseover", helpTaskForm);
document.getElementById("taskForm").addEventListener("mouseout", clearHelp);
// Help for MOOD TOGGLE
document.getElementById("toggleMood").addEventListener("mouseover", helpMood);
document.getElementById("toggleMood").addEventListener("mouseout", clearHelp);
// Help for TASK COUNTER
document.getElementById("counter").addEventListener("mouseover", helpCounter);
document.getElementById("counter").addEventListener("mouseout", clearHelp);

    // Help for DELETE BUTTONS
    var deleteButts = document.getElementsByClassName("deleteButt");
    for(var i = 0; i < deleteButts.length; i++) {
        deleteButts[i].addEventListener("mouseover", helpDeleteButt);
        deleteButts[i].addEventListener("mouseout", clearHelp);
    }
    // Get helpBoc
    var helpBox = document.getElementById("helpBox");
    clearHelp();
    // Each "help" function adds HTML in helpBox when certain element hovered
    function helpNav(){
        helpBox.innerHTML = "<h3 style='color: white; font-style: italic'>This is the navigation bar. It displays links to other basic applications on the site. Authentication is also listed.</h3>";
        showHelp();
    }
    function helpDeleteButt(){
        helpBox.innerHTML = "<h3 style='color: white; font-style: italic'>These are delete buttons. Javascript is used to remove and update the agenda list.</h3>";
        showHelp();
    }
    function helpAddButt(){
        helpBox.innerHTML = "<h3 style='color: white; font-style: italic'>This is the add button, to add more tasks to the agenda schedule. Want more work?</h3>";
        showHelp();
    }
    function helpTaskForm(){
        helpBox.innerHTML = "<h3 style='color: white; font-style: italic'>Enter a new task, and the schedule will auto update.</h3>";
        showHelp();
    }
    function helpMood(){
        helpBox.innerHTML = "<h3 style='color: white; font-style: italic'>Not permanent, but the mood toggler changes the background image alternating between dark and bright.</h3>";
        showHelp();
    }
    function helpCounter(){
        helpBox.innerHTML = "<h3 style='color: white; font-style: italic'>This interactive counter display keeps live track of the number of tasks saved. Add or delete tasks to see it change.</h3>";
        showHelp();
    }
    function showHelp(){
        helpBox.style.display = "";
    }
    function clearHelp(){
        helpBox.innerHTML = "";
        helpBox.style.display = "none";
    }