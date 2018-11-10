/*** Converter ext HTML changing code, listens for SELECT input ***/
document.getElementById("convSelect").addEventListener("input", function(e){
    // Get SELECT option chosen
    var dim = e.target.options[e.target.selectedIndex].value;
    // Get INTRO title & text
    var introTitle = document.querySelector(".intro h3");
    var introText = document.querySelector(".intro p");

    // Get heading
    var heading = document.querySelector(".agenda").children[0];
    // Get label
    var convLabel = document.getElementById("convLabel");
    // Get input box (for placeholder)
    var input = document.querySelector("input[type='number']");
    // Get the 3 small unit labels
    var firstLabel = document.getElementById("daysLabel");
    var secondLabel = document.getElementById("minsLabel");
    var thirdLabel = document.getElementById("secsLabel");
    // Dimensions (dim) to set if selected...
    switch(dim){
        case "time":
            introTitle.innerText = "Time Converter";
            introText.innerText = "Helps to convert & display time units (hours, days, minutes, seconds). Can really help you  organize valuable time during a busy day, at work or for a special event when you want to micromanage.";

            heading.innerHTML = "Time Converter";

            convLabel.innerHTML = "Time (hours):";
            input.setAttribute("placeholder", "Enter hours...");

            firstLabel.innerHTML = "Days";
            secondLabel.innerHTML = "Mins";
            thirdLabel.innerHTML = "Secs";

            break;
        case "weight":
            introTitle.innerText = "Weight Converter";
            introText.innerText = "Helps to convert & display units for measuring weight (pounds, kilograms, grams, ounces). It is useful in determining how much food, products, minerals, or you, weigh in other units.";

            heading.innerHTML = "Weight Converter";

            convLabel.innerHTML = "Weight (pounds):";
            input.setAttribute("placeholder", "Enter pounds...");

            firstLabel.innerHTML = "Kgs:";
            secondLabel.innerHTML = "Grams:";
            thirdLabel.innerHTML = "Ounces:"
            break;
        case "length":
            introTitle.innerText = "Length Converter";
            introText.innerText = "Helps to convert & display units of length (feet, yards, inches, centimeters). Practical in converting within the length dimensions of anything from wood, to clothing, to a furniture.";

            heading.innerHTML = "Length Converter";

            convLabel.innerHTML = "Length (feet):";
            input.setAttribute("placeholder", "Enter feet...");

            firstLabel.innerHTML = "Yards:";
            secondLabel.innerHTML = "Inches:";
            thirdLabel.innerHTML = "Cms:";
            break;
        case "volume":
            introTitle.innerText = "Volume Converter";
            introText.innerText = "Helps to convert & display units for volume quantities. Can be productive when translating measurements of fluid for cooking, chemistry, & liquid shipping is needed.";

            heading.innerHTML = "Volume Converter";

            convLabel.innerHTML = "Volume (gallons):";
            input.setAttribute("placeholder", "Enter gallons...");

            firstLabel.innerHTML = "Liters:";
            secondLabel.innerHTML = "Cups:";
            thirdLabel.innerHTML = "Fl Oz:";
            break;
    }

});


/*** Converter INPUT / OUTPUT code, listens for value INPUT ***/
document.getElementById("timeInput").addEventListener("input", function(e){
    var inputValue = e.target.value;
    var const1;
    var const2;
    var const3;

    // List of value OUTPUTS (3)
    var daysOutput = document.getElementById("daysOutput");
    var minsOutput = document.getElementById("minsOutput");
    var secsOutput = document.getElementById("secsOutput");
    // Get converter LABEL
    var convLabel = document.getElementById("convLabel");
    // If TIME on label, change constants
    if(convLabel.innerHTML == "Time (hours):"){
        const1 = 24; const2 = 60; const3 = 3600;
    }
    // If WEIGHT on label, change constants
    if(convLabel.innerHTML == "Weight (pounds):"){
        const1 = 2.2046; const2 = 453.5924; const3 = 16;
    }
    // If LENGTH on label, change constants
    if(convLabel.innerHTML == "Length (feet):"){
        const1 = 3; const2 = 12; const3 = 30;
    }
    // If VOLUME on label, change constants
    if(convLabel.innerHTML == "Volume (gallons):"){
        const1 = 0.2642; const2 = 16; const3 = 128;
    }
    // Show
    daysOutput.innerText = (inputValue / const1);
    minsOutput.innerHTML = (inputValue * const2);
    secsOutput.innerHTML = (inputValue * const3);
});
