myButton = function(idName){
    return document.querySelector(idName)
};

lessonDirect = function(){
    window.location.href = "lessons.html";
};

indexDirect = function(){
    window.location.href = "index.html";
};

preferenceDirect = function(){
    window.location.href = "preferences.html";
};

let mainButtonColor = "#FFEF85";

let mainButtonHighlightColor = "#E6C700";

let secondaryButtonColor = "#A2DFFF";

let secondaryButtonHighlightColor = "#1AAFFF";

let closeButtonColor = "#333333";

let closeButtonHighlightColor = "#1A1A1A";

buttonHighlight = function(idName, colorId){
    myButton("#"+idName).style.backgroundColor = colorId;
};

buttonReset = function(idName, colorId){
    myButton("#"+idName).style.backgroundColor = colorId;
};