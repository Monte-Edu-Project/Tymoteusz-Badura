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

const mainButtonColor = "#FFEF85";

const mainButtonHighlightColor = "#E6C700";

const secondaryButtonColor = "#A2DFFF";

const secondaryButtonHighlightColor = "#1AAFFF";

const closeButtonColor = "#333333";

const closeButtonHighlightColor = "#1A1A1A";

buttonHighlight = function(idName, colorId){
    myButton("#"+idName).style.backgroundColor = colorId;
};

buttonReset = function(idName, colorId){
    myButton("#"+idName).style.backgroundColor = colorId;
};