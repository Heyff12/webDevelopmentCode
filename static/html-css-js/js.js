const h2Dom = document.getElementsByTagName('h2')[0]
const timeSapn = h2Dom.lastChild
function setTime(){
    timeSapn.innerHTML = new Date()
}
setInterval(setTime, 1000);