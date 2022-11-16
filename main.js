// FIRST VARIATION OF ZOOM WITH SLIDER
// put this into html: <input id="zoom" type="range" min="50" max="100" on onmousemove="setZoom()">
//     var container = document.getElementById("mapContainer")
//     var mapa = document.getElementById("map")
//     mapa.style.width = 750 + 'px'
//     mapa.style.height = 750 + 'px'
// //setting the zoom as specified
//     function setZoom() {
//         var x = document.getElementById("zoom").value;
//         mapa.style.width = x * '10' + 'px'
//         mapa.style.height = x * '10' + 'px'
//     }



//creating initial zoom
var mapa = document.getElementById("map")
mapa.style.width = 700 + 'px'
mapa.style.height = 700 + 'px'

function setZoom(x) {
    mapa.style.transition = "ease-in-out 300ms"
    mapa.style.width = x * 7 + 'px'
    mapa.style.height = x * 7 + 'px'
    //wait 300ms to finish animation and remove it for drag to work
    setTimeout(removeTransitionAnimation, 300)
    function removeTransitionAnimation(){mapa.style.transition = "none"}
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

// Make the DIV element draggable:
dragElement(document.getElementById("map"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        console.log(pos1 + "  " + pos2)
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}