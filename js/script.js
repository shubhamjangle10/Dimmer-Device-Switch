
let box = document.getElementById('box');
        let on_off_span = document.getElementById('on_off_span');
        let dimmer = document.getElementById('dimmerValue');
        let container = document.getElementById('con');
        let container_left = document.getElementById('c-left');
        let container_right = document.getElementById('c-right');
        let currentStateText = document.getElementById('currentStateText');
        let input_port_div = document.getElementById('input-port');
        let box_shift = document.getElementById('box-inner');
        let box2 = document.getElementById('box2');
        let on_button1 = document.getElementById('on-button1');
        let off_button1 = document.getElementById('off-button1');
        let on_button2 = document.getElementById('on-button2');
        let off_button2 = document.getElementById('off-button2');
        let on_button3 = document.getElementById('on-button3');
        let off_button3 = document.getElementById('off-button3');
        let on_button4 = document.getElementById('on-button4');
        let off_button4 = document.getElementById('off-button4');
        let slider1 = document.getElementById('slider1');
        let slider2 = document.getElementById('slider2');
        let slider3 = document.getElementById('slider3');
        let slider4 = document.getElementById('slider4');
        let innerbox1 = document.getElementById('innerbox1');
        let innerbox2 = document.getElementById('innerbox2');
        let innerbox3 = document.getElementById('innerbox3');
        let innerbox4 = document.getElementById('innerbox4');

        let fixedValue1;
        let offOnce1 = false;
        let onOnce1 = 1;
        let fixedValue2;
        let offOnce2 = false;
        let onOnce2 = 1;
        let fixedValue3;
        let offOnce3 = false;
        let onOnce3 = 1;
        let fixedValue4;
        let offOnce4 = false;
        let onOnce4 = 1;

        let button1 = 1;
        let button2 = 0;
        let button3 = 0;
        let button4 = 0;

        // Here i have considered the initial value of button to OFF , so state value will be faLse
        state1 = false;
        state2 = false;
        state3 = false;
        state4 = false;

        // Clicking Audio/Sound
        let audio = new Audio();
        audio.src = "../Audio/Mouse-Click-Sound.mp3";

        // Functionality( ON BUTTON port 1 WORKING)
        on_button1.addEventListener('click', () => {
            audio.play();
            innerbox1.setAttribute("style", "background-color: rgb(255,85,0);");
            on_button1.setAttribute("style", "background-color:rgb(250,250,250);box-shadow:none")
            off_button1.setAttribute("style", "background-color:rgb(255,255,255);box-shadow: -10px 20px 20px rgb(50,50,50);")
            currentStateText.setAttribute("style", "color:rgb(255,85,0);")
            on_off_span.innerHTML = "ON";
            dimmer.value = slider1.value;
            state1 = true;
            if (onOnce1 == '1') {
                slider1.value = '0';
                dimmer.value = slider1.value;
                onOnce1 = '0';
            }

            if (offOnce1 == true) {
                slider1.value = fixedValue1;
                dimmer.value = slider1.value;
            }

            button1 = 1;
            button2 = 0;
            button3 = 0;
            button4 = 0;
        })

        // Functionality( OFF BUTTON port 1WORKING)
        off_button1.addEventListener('click', () => {
            audio.play();
            innerbox1.setAttribute("style", "background-color: rgb(255, 255, 255);")
            on_button1.setAttribute("style", "background-color:rgb(255,255,255);box-shadow: -10px -20px 20px grey;");
            off_button1.setAttribute("style", "background-color:rgb(250,250,250);box-shadow:none")
            currentStateText.setAttribute("style", "color:black;");
            on_off_span.innerHTML = "OFF";
            dimmer.value = '0';
            offOnce1 = true;
            if (offOnce1 == true) {
                fixedValue1 = slider1.value;
            }
            state1 = false;
            button1 = 1;
            button2 = 0;
            button3 = 0;
            button4 = 0;
        })


        // Slider Inputs
        slider1.oninput = function () {
            if (state1 == true) {
                dimmer.value = slider1.value;

            }
            else if (state1 == false) {
                dimmer.value = 0;
            }
        }


        // Functionality( ON BUTTON port 2 WORKING)
        on_button2.addEventListener('click', () => {
            audio.play();
            innerbox2.setAttribute("style", "background-color: rgb(255,85,0);");
            on_button2.setAttribute("style", "background-color:rgb(250,250,250);box-shadow:none")
            off_button2.setAttribute("style", "background-color:rgb(255,255,255);box-shadow: -10px 20px 20px rgb(50,50,50);")
            currentStateText.setAttribute("style", "color:rgb(255,85,0);")
            on_off_span.innerHTML = "ON";
            dimmer.value = slider2.value;
            state2 = true;
            if (onOnce2 == '1') {
                slider2.value = '0';
                dimmer.value = slider2.value;
                onOnce2 = '0';
            }

            if (offOnce2 == true) {
                slider2.value = fixedValue2;
                dimmer.value = slider2.value;
            }
            button1 = 0;
            button2 = 1;
            button3 = 0;
            button4 = 0;
        })

        // Functionality( OFF BUTTON port 2 WORKING)
        off_button2.addEventListener('click', () => {
            audio.play();
            innerbox2.setAttribute("style", "background-color: rgb(255, 255, 255);")
            on_button2.setAttribute("style", "background-color:rgb(255,255,255);box-shadow: -10px -20px 20px grey;");
            off_button2.setAttribute("style", "background-color:rgb(250,250,250);box-shadow:none")
            currentStateText.setAttribute("style", "color:black;");
            on_off_span.innerHTML = "OFF";
            dimmer.value = '0';
            offOnce2 = true;
            if (offOnce2 == true) {
                fixedValue2 = slider2.value;
            }
            state2 = false;
            button1 = 0;
            button2 = 1;
            button3 = 0;
            button4 = 0;
        })


        // Slider Inputs
        slider2.oninput = function () {
            if (state2 == true) {
                dimmer.value = slider2.value;

            }
            else if (state2 == false) {
                dimmer.value = 0;
            }
        }
        // Functionality( ON BUTTON port 3 WORKING)
        on_button3.addEventListener('click', () => {
            audio.play();
            innerbox3.setAttribute("style", "background-color: rgb(255,85,0);");
            on_button3.setAttribute("style", "background-color:rgb(250,250,250);box-shadow:none")
            off_button3.setAttribute("style", "background-color:rgb(255,255,255);box-shadow: -10px 20px 20px rgb(50,50,50);")
            currentStateText.setAttribute("style", "color:rgb(255,85,0);")
            on_off_span.innerHTML = "ON";
            dimmer.value = slider3.value;
            state3 = true;
            if (onOnce3 == '1') {
                slider3.value = '0';
                dimmer.value = slider3.value;
                onOnce3 = '0';
            }

            if (offOnce3 == true) {
                slider3.value = fixedValue3;
                dimmer.value = slider3.value;
            }
            button1 = 0;
            button2 = 0;
            button3 = 1;
            button4 = 0;
        })

        // Functionality( OFF BUTTON WORKING)
        off_button3.addEventListener('click', () => {
            audio.play();
            innerbox3.setAttribute("style", "background-color: rgb(255, 255, 255);")
            on_button3.setAttribute("style", "background-color:rgb(255,255,255);box-shadow: -10px -20px 20px grey;");
            off_button3.setAttribute("style", "background-color:rgb(250,250,250);box-shadow:none")
            currentStateText.setAttribute("style", "color:black;");
            on_off_span.innerHTML = "OFF";
            dimmer.value = '0';
            offOnce3 = true;
            if (offOnce3 == true) {
                fixedValue3 = slider3.value;
            }
            state3 = false;
            button1 = 0;
            button2 = 0;
            button3 = 1;
            button4 = 0;
        })


        // Slider Inputs
        slider3.oninput = function () {
            if (state3 == true) {
                dimmer.value = slider3.value;

            }
            else if (state3 == false) {
                dimmer.value = 0;
            }
        }
        // Functionality( ON BUTTON port 4 WORKING)
        on_button4.addEventListener('click', () => {
            audio.play();
            innerbox4.setAttribute("style", "background-color: rgb(255,85,0);");
            on_button4.setAttribute("style", "background-color:rgb(250,250,250);box-shadow:none")
            off_button4.setAttribute("style", "background-color:rgb(255,255,255);box-shadow: -10px 20px 20px rgb(50,50,50);")
            currentStateText.setAttribute("style", "color:rgb(255,85,0);")
            on_off_span.innerHTML = "ON";
            dimmer.value = slider4.value;
            state4 = true;
            if (onOnce4 == '1') {
                slider4.value = '0';
                dimmer.value = slider4.value;
                onOnce4 = '0';
            }

            if (offOnce4 == true) {
                slider4.value = fixedValue4;
                dimmer.value = slider4.value;
            }
            button1 = 0;
            button2 = 0;
            button3 = 0;
            button4 = 1;
        })

        // Functionality( OFF BUTTON WORKING)
        off_button4.addEventListener('click', () => {
            audio.play();
            innerbox4.setAttribute("style", "background-color: rgb(255, 255, 255);")
            on_button4.setAttribute("style", "background-color:rgb(255,255,255);box-shadow: -10px -20px 20px grey;");
            off_button4.setAttribute("style", "background-color:rgb(250,250,250);box-shadow:none")
            currentStateText.setAttribute("style", "color:black;");
            on_off_span.innerHTML = "OFF";
            dimmer.value = '0';
            offOnce4 = true;
            if (offOnce4 == true) {
                fixedValue4 = slider4.value;
            }
            state4 = false;
            button1 = 0;
            button2 = 0;
            button3 = 0;
            button4 = 1;
        })


        // Slider Inputs
        slider4.oninput = function () {
            if (state4 == true) {
                dimmer.value = slider4.value;

            }
            else if (state4 == false) {
                dimmer.value = 0;
            }
        }


        // Dimmer Inputs With mouse_cursor/keyboard value on the input tag
        dimmer.oninput = function () {
            if (button1 == 1) {
                if (state1 == true) {
                    slider1.value = dimmer.value;
                }
                else if (state1 == false) {
                    dimmer.value = 0;
                }
            }

            if (button2 == 1) {
                if (state2 == true) {
                    slider2.value = dimmer.value;
                }
                else if (state2 == false) {
                    dimmer.value = 0;
                }
            }

            if (button3 == 1) {
                if (state3 == true) {
                    slider3.value = dimmer.value;
                }
                else if (state3 == false) {
                    dimmer.value = 0;
                }
            }

            if (button4 == 1) {
                if (state4 == true) {
                    slider4.value = dimmer.value;
                }
                else if (state4 == false) {
                    dimmer.value = 0;
                }
            }

        }


        var box_1 = document.getElementById("box_1");
        var box_2 = document.getElementById("box_2");
        var box_3 = document.getElementById("box_3");
        var box_4 = document.getElementById("box_4");

        function getradioval() {
            var box_1 = document.getElementById("box_1");
            var box_2 = document.getElementById("box_2");
            var box_3 = document.getElementById("box_3");
            var box_4 = document.getElementById("box_4");
            var radiovalue = document.querySelector('input[name="input-radios"]:checked').value;
            console.log(radiovalue);
            if (radiovalue == "port1") {
                box_2.style.display = "none";
                box_3.style.display = "none";
                box_4.style.display = "none";
                box_1.style.display = "flex";
                button1 = 1;
                button2 = 0;
                button3 = 0;
                button4 = 0;
                if (state1 == true) {
                    dimmer.value = slider1.value;
                    currentStateText.setAttribute("style", "color:rgb(255,85,0);")
                    on_off_span.innerHTML = "ON";
                }
                else {
                    dimmer.value = 0;
                    currentStateText.setAttribute("style", "color:black;");
                    on_off_span.innerHTML = "OFF";
                }

            }
            else if (radiovalue == "port2") {
                box_1.style.display = "none";
                box_3.style.display = "none";
                box_4.style.display = "none";
                box_2.style.display = "flex";
                button1 = 0;
                button2 = 1;
                button3 = 0;
                button4 = 0;
                if (state2 == true) {
                    dimmer.value = slider2.value;
                    currentStateText.setAttribute("style", "color:rgb(255,85,0);")
                    on_off_span.innerHTML = "ON";
                }
                else {
                    dimmer.value = 0;
                    currentStateText.setAttribute("style", "color:black;");
                    on_off_span.innerHTML = "OFF";
                }

            }
            else if (radiovalue == "port3") {
                box_2.style.display = "none";
                box_1.style.display = "none";
                box_4.style.display = "none";
                box_3.style.display = "flex";
                button1 = 0;
                button2 = 0;
                button3 = 1;
                button4 = 0;
                if (state3 == true) {
                    dimmer.value = slider3.value;
                    currentStateText.setAttribute("style", "color:rgb(255,85,0);")
                    on_off_span.innerHTML = "ON";
                }
                else {
                    dimmer.value = 0;
                    currentStateText.setAttribute("style", "color:black;");
                    on_off_span.innerHTML = "OFF";
                }
            }
            else if (radiovalue == "port4") {
                box_2.style.display = "none";
                box_3.style.display = "none";
                box_1.style.display = "none";
                box_4.style.display = "flex";
                button1 = 0;
                button2 = 0;
                button3 = 0;
                button4 = 1;
                if (state4 == true) {
                    dimmer.value = slider4.value;
                    currentStateText.setAttribute("style", "color:rgb(255,85,0);")
                    on_off_span.innerHTML = "ON";
                }
                else {
                    dimmer.value = 0;
                    currentStateText.setAttribute("style", "color:black;");
                    on_off_span.innerHTML = "OFF";
                }
            } else {
                box_1.style.display = "flex";
            }
        }
