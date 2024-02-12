// scrolling effect

var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');

for(var i = 0 ; i<navMenuAnchorTag.length ; i++){
    navMenuAnchorTag[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection)
        var interval = setInterval(function(){
            var targetsectionCordinates = targetSection.getBoundingClientRect();
            if (targetsectionCordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0 , 50)
        }, 20);
    })
}

 // skill filled automatically when scrolled out

// var progressBars = document.querySelectorAll(".skill-progress > div");
// console.log(progressBars)
// var skillContainer = document.getElementById("skill-container");
// window.addEventListener("scroll" , checkscroll);
// var animationDone = false;

// function initialiseBars() {
//     for(let bar of progressBars){
//         console.log(bar)
//         bar.style.width = 0 + '%';
//     }
// }
// //initialiseBars();

// function fillBars(){
//     for (let bar of progressBars){

//         let targetWidth = bar.getAttribute("data-bar-width");
//         let currentWidth = 0;
//         let interval = setInterval(()=>{
//             if (currentWidth > targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++
//             bar.style.width = currentWidth + "%"
//         } , 10)
       

//     }

// }

// function checkscroll(){
//     var coordinates = skillContainer.getBoundingClientRect();
//     if (!animationDone && coordinates.top <= window.innerHeight){
//         animationDone = true;
//         console.log("scrolled")
//         fillBars();
//     }
//     else if(coordinates.top > window.innerHeight){
//         animationDone = false;
//         initialiseBars();
//     }
// }

//    <------wrong code for autofill----->

// var skillProgress = document.querySelectorAll('.skill-progress > div');
// console.log(skillProgress);
// window.addEventListener('scroll' , checkscroll);

// function fillBar(bar){
//     let targetWidth = bar.getAttribute("data-bar-width");
//     let currentWidth = 0;
//     let interval = setInterval(function(){
//         if (currentWidth > targetWidth){
//             clearInterval(interval);
//             return
//         }
//         currentWidth = currentWidth + 5;
//         bar.style.width = currentWidth + '%'
//     } , 30)
// }
// function initaliseBar(bar){
//     bar.style.width = 0 + '%'
// }

// for(var bar of skillProgress){
//     bar.style.width = 0 + "%";
// }

// function checkscroll(){
    
//     for(let bar of skillProgress){
//         let barCoordinates = bar.getBoundingClientRect();
//         let animationDone =false;
//         if (!animationDone && barCoordinates.top <= (window.innerHeight - barCoordinates.height)){
//             animationDone = true;
//             fillBar(bar);
//         }
//         else if (barCoordinates.top > window.innerHeight){
//             animationDone = false;
//             initaliseBar(bar);
//         }
        
//     }   
// }

// // everything is right in above code but animation is fired for every scroll beacuse of 
// // animation done get false value by every loop so we have to find some condition 
// // where we can check checked the bar whom animation is got fired already
// // or specified that when only animation is fired


// <------autofill code modified ------->

var progressBars = document.querySelectorAll(".skill-progress > div");

function initialiseBar(bar) {
    bar.setAttribute("data-visited", "false")
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}

function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 3);

}

// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") === "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", "true");
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", "false");
            initialiseBar(bar);
        }

    }
}
window.addEventListener("scroll", checkScroll);

