$(document).ready(function() {
    $("#btn1").mouseup( function() {
        //$("#div1").slideToggle(2000);
        let div = $("div");
        div.animate({left:"400px", height:"300px", opacity:"0.5"},'slow');
    }
    );
}
);

// document.getElementById('demo').innerHTML = "new text";
// // document.getElementById('demo').id = "demo2"; // should not chaange the id
// document.getElementById('demo').style.color = "red";
// // document.getElementById('demo2').outerHTML = "<button> something to press </button>";

// function myFun(){
//     alert("WARNING ALERT OMG!!");
// }

// function darkMode(){
//     document.getElementById("pagestyle").setAttribute("href", "./style-dark.css");
// }

// var a = 10;
// let b = 20;
// const c = 30;

// a += 10;
// b += 10;

// console.log(a+b+c);

// function key_press(input){
//     console.log(input);
//     document.getElementById("keyPressed_text").innerHTML = input;
// }

// const key = function keyEvent(e){
//     key_press(e.key);
//     if (e.key === "f"){
//         alert("f key pressed");
//     }
// }

// document.addEventListener("keypress", key);