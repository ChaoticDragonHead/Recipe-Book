//Script for home page. Nothing yet, just setting up the folder for the next commit. 

//TODO: Functional button that will console.log clicked on home page.
function buttonClick(){
    console.log("Button was clicked!");
}
//Finding the button and then declaring it has been found
const myButton = document.querySelector("#testButton");
if(myButton){
    console.log("Button found");
    console.log(myButton);
}

//Opening event listener
myButton.addEventListener('click', buttonClick.bind(this));

//Needs to be debugged
/*function clickTest(child){
    console.log("Function ran!");

    switch (child.target.id){
        case "mouse1":
            console.log("Home clicked");
            break;
        case "mouse2":
            console.log("Browse clicked");
            break;
        case "mouse3":
            console.log("Authors clicked");
            break;
        case "mouse4":
            console.log("Team clicked");
            break;

        default:
            break;
    }
}

//Finding the class mouseBut
const test = document.querySelectorAll(".mouseBut");
const testParent = document.querySelector("#menu");

//function used to determine that the above code worked
if(testParent){
    console.log("Found parent!");
    console.log(testParent);
}
if(test){
    console.log("Found test!")
    console.log(test);
}

//Click function added
testParent.addEventListener("click", clickTest(test));*/