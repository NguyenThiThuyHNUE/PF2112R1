function top_tank() {
    let top = parseInt(document.getElementById("tank").style["top"]);
    document.getElementById('tank').style['top'] = top - 19 + 'px';
}
function bottom_tank() {
    let top = parseInt(document.getElementById("tank").style["top"]);
    document.getElementById("tank").style["top"] =  top + 19 + "px";
}


function left_tank() {
    let left = parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] = left  - 19 + "px";
}
function right_tank() {
    let left = parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] =  left + 19 + "px";
}
