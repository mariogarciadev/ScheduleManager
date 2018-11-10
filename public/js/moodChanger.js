/*** RANGE TOGGLE BACKGROUND IMAGE VIEW ***/
// Listen for MOOD RANGE INPUT
document.getElementById("toggleMood").addEventListener("input", function(e){
    // Get range
    var range = e.target;
    // Get range value
    var value = range.value;
    // Get body
    var body = document.querySelector("body");
    // IF value == 2; ELSE IF value == 2
    if(value == 1){
        // Modify IMAGE: NO REPEAT, FIXED, COVER
        body.style.backgroundImage = "url('./img/starrySky.jpg')";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundAttachment = "fixed";
        body.style.backgroundPosition = "center";

    } else if (value == 2) {
        // Modify IMAGE: NO REPEAT, FIXED, COVER
        body.style.backgroundImage = "url('./img/sunny.jpg')";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundAttachment = "fixed";
        body.style.backgroundPosition = "center";
    }
});