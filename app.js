var h = 0
var min = 0
var sec = 0
var ms = 0
var i = false
var t
var sp = document.getElementsByTagName('span')
var btn_start = document.getElementById('start')
var btn_reset = document.getElementById('reset')
var d = false
var bg = false




function update_chrono() {
    ms += 1

    if (ms == 10){
        ms = 0
        sec += 1
    }

    if (sec == 60){
        sec = 0
        min += 1
    }

    if (min == 60){
        min = 0
        h =+ 1
    }

    sp[0].innerText = h 
    sp[1].innerText = min 
    sp[2].innerText = sec 
    sp[3].innerText = ms 
}

function toggle(){
    if (i == false){
        start()
        i = true
    }
    else {
        stop()
        i = false
    }
}

function start(){
    t = setInterval(update_chrono,100)
    // btn_start.disabled = false
}

function stop(){
    clearInterval(t)
    // btn_start.disabled = false
}

function reset(){
    clearInterval(t)
    i = false
    // btn_start.disabled = false

    h = 0, min = 0, sec = 0, ms = 0
    sp[0].innerText = h 
    sp[1].innerText = min 
    sp[2].innerText = sec 
    sp[3].innerText = ms 
}

function changeTheme(){


    bg.className = "rgb(50, 50 ,50)"


}

function change() {

    if (bg == false){
        bg = true
        colorbg = "rgb(50, 50, 50)";
        console.log('Sombre')
    }

    else {
        bg = false
        colorbg = "rgb(70, 156, 255)";
        console.log('Claire')
    }

	document.body.style.background=colorbg;
}