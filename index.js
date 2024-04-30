let start = document.getElementById("start")
let reset = document.getElementById("reset")

let sec = document.getElementById("sec")
let min = document.getElementById("min")

let count_sec = 1
let count_min = 1

let timer = NaN

function stopwatch (){
    if (count_sec< 10){
        sec.innerHTML = "0" + count_sec
    }
    else if (count_sec < 60){
        sec.innerHTML = count_sec
    }
    else if (count_sec == 60){
        count_sec = -1
        if (count_min< 10){
            min.innerHTML = "0" + count_min
        }
        else if (count_min < 60){
            min.innerHTML = count_min
        }
        else if (count_min == 60){
            sec.innerHTML = "00"
            min.innerHTML = "00"
            count_min = 1
            count_sec = 1
            clearInterval(timer)

        }
        count_min+=1
    }
    count_sec+=1
}


start.onclick = function(){
    if (start.innerHTML == "START"){
        timer = setInterval(stopwatch,1000)
        start.innerHTML = "STOP"
    }
    else if (start.innerHTML == "STOP"){
        console.log("entered")
        clearInterval(timer)
        start.innerHTML = "START"
    }
    
}

reset.onclick = function(){
    sec.innerHTML = "00"
    min.innerHTML = "00"
    count_min = 1
    count_sec = 1
    clearInterval(timer)
    start.innerHTML = "START"
}

