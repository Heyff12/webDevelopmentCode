const timeDom = document.getElementsByClassName('date')[0]
console.log(timeDom)
timeDom.innerHTML = new Date()
function setTime(){
    timeDom.innerHTML = new Date()
}
setInterval(setTime, 1000);