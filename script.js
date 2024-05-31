var main = document.querySelector("#main")
var cur = document.querySelector("#cursor")
var cur1 = document.querySelector("#cursor1")

main.addEventListener("mousemove",function(dets){

    cur.style.left = dets.x + "px";     
    cur.style.top = dets.y + "px";

    cur1.style.left = dets.x + "px";     
    cur1.style.top = dets.y + "px";

})