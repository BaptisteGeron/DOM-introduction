//Display the document title in the console
console.log(document.getElementsByTagName('title')[0].innerHTML);

//Change the document title to Modifying the DOM
document.getElementsByTagName('title')[0].innerHTML= "modifying the DOM";

//Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)
let myElements = document.body.children;
for (let child of myElements) {
    console.log(child);
}

//Change the background color of the body with a random color. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).

let bodySelect = document.getElementsByTagName('body');
let rgb1 = Math.floor(Math.random()*256);
let rgb2 = Math.floor(Math.random()*256);
let rgb3 = Math.floor(Math.random()*256);
function rgb(r,g,b){
    return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
}

document.body.style.backgroundColor = rgb(rgb1,rgb2,rgb3);
