
// Initialized the varibles to be used in the whole program (Global Variables)

let on_button = document.getElementById('on-button');
let off_button = document.getElementById('off-button');
let box = document.getElementById('box');
let innerbox = document.getElementById('innerbox');
let on_off_span = document.getElementById('on_off_span');
let dimmer = document.getElementById('dimmerValue');
let slider = document.getElementById('slider');
let container = document.getElementById('con');
let container_left = document.getElementById('c-left');
let container_right = document.getElementById('c-right');
let currentStateText = document.getElementById('currentStateText');
let smallShadowNearBox = document.getElementById('small-shadow-near-box');
let box2= document.getElementById('box2');

// Here i have considered the initial value of button to OFF , so state value will be faLse
state = false;

// Clicking Audio/Sound
let audio = new Audio();
audio.src = "../Audio/Mouse-Click-Sound.mp3";



// Functionality( ON BUTTON WORKING)
on_button.addEventListener('click', () => {
    audio.play();
    innerbox.setAttribute("style", "background-color: rgb(255,85,0);");
    on_button.setAttribute("style", "background-color:rgb(250,250,250);box-shadow:none")
    off_button.setAttribute("style", "background-color:rgb(255,255,255);box-shadow: -10px 20px 20px rgb(50,50,50);")
    currentStateText.setAttribute("style", "color:rgb(255,85,0);")
    // smallShadowNearBox.setAttribute("style", "background-color:black;")
    on_off_span.innerHTML = "ON";
    dimmer.value = slider.value;
    state = true;
})


// Functionality( OFF BUTTON WORKING)
off_button.addEventListener('click', () => {
    audio.play();
    innerbox.setAttribute("style", "background-color: rgb(255, 255, 255);")
    on_button.setAttribute("style", "background-color:rgb(255,255,255);box-shadow: -10px -20px 20px grey;");
    off_button.setAttribute("style", "background-color:rgb(250,250,250);box-shadow:none")
    currentStateText.setAttribute("style", "color:black;");
    // smallShadowNearBox.setAttribute("style", "background-color:grey;")
    on_off_span.innerHTML = "OFF";
    dimmer.value = '0';
    state = false;
})


// Slider Inputs
slider.oninput = function () {
    if (state == true) {
        dimmer.value = slider.value;
        
    }
    else if(state ==false) {
        dimmer.value = 0;
    }
}


// Dimmer Inputs With mouse_cursor/keyboard value on the input tag
dimmer.oninput = function () {
    if (state == true) {
        slider.value = dimmer.value ;
    }
    else if(state ==false) {
        dimmer.value = 0;
    }
}


// Rendering elements according to screen size 
// if (screen.width <= 900) {
//     console.log("900 hit")
//     container.replaceChild(currentStateText, container.firstChild);
// }
if (screen.width <= 900) {
    console.log("900 hit")

    box2.removeChild(currentStateText);
    container.firstChild=currentStateText;
    container.firstChild.nextSibling=container_left;

    // container.replaceChild(currentStateText, container.firstChild);
}



// Rendering elements according to screen size 
if (screen.width <= 900) {
    console.log("900 hit")
    container.replaceChild(currentStateText, container.firstChild);
}

