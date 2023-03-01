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
var bg = document.getElementsByClassName('body1')




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


    bg.classList.remove('body1')


}