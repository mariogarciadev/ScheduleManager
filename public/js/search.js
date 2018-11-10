fillList();

function fillList(){
    // Get storedtasks from localstorage (parse)
    var storedTasks = JSON.parse(localStorage.getItem("storedTasks"));
    // Get ul list
    var ul = document.getElementById("tasks");
    // Loop through all li
    ul.innerHTML = "";
    for(var i = 0; i < storedTasks.length; i++) {
        var name = storedTasks[i].name; 
        ul.innerHTML += "<li class='taskItem'><a href='#'>" + name + "</a></li>"; 
    }
}

// Get input search
var searchInput = document.getElementById("searchInput");
// Add addEventListener (keyup)
searchInput.addEventListener("keyup", searchTasks);
//Filter function
function searchTasks() {
    // Get input value
    let searchValue = document.getElementById("searchInput").value.toUpperCase();
    // Get ul list
    var ul = document.getElementById("tasks");
    // Get lis in ul list
    var li = ul.querySelectorAll("li.taskItem");

    // Loop through all li
    for(var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        // If matches
        if(a.innerHTML.toUpperCase().indexOf(searchValue) > -1) {
           li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
