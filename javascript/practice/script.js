var blueBtn = document.getElementById("blueme");

var headerTag = document.getElementById("header1");

blueBtn.style.backgroundColor = "blue"

function heading_to_blue() {
    headerTag.style.backgroundColor = "blue";
    headerTag.style.textAlign = "center";
    headerTag.style.padding = "20px";
    headerTag.style.borderRadius = "30px";
}

var redBtn = document.getElementById("redme");

var headerTag = document.getElementById("header1");

redBtn.style.backgroundColor = "red"
function heading_to_red() {
    headerTag.style.backgroundColor = "red";
    headerTag.style.textAlign = "center";
    headerTag.style.padding = "20px";
    headerTag.style.borderRadius = "30px";
}

var yellowBtn = document.getElementById("yellowme");

var headerTag = document.getElementById("header1");

yellowBtn.style.backgroundColor = "yellow"
function heading_to_yellow() {
    headerTag.style.backgroundColor = "yellow";
    headerTag.style.textAlign = "center";
    headerTag.style.padding = "20px";
    headerTag.style.borderRadius = "30px";
}

picture = document.getElementById("picture");

function hide_show() {
    if (picture.style.display === "none"){
        picture.style.display = "block";
    } else {
        picture.style.display = "none";
    }
}

const img1 = "https://cdn.creazilla.com/icons/3204989/logo-javascript-icon-md.png";
const img2 = "https://cdn.pixabay.com/photo/2024/01/31/04/37/javascript-8543231_1280.png";
const img3 = "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png";
function change_image() {
    if (picture.src===img1){
        picture.src=img2;    
    } else {
        picture.src=img1;
    }
}