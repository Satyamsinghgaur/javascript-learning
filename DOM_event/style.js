// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log("Button clicked");
//     console.log(event);
// })

// let ipt = document.querySelector("Input");
// ipt.addEventListener("keydown", function(event){
//     console.log("key is pressed");
//     console.log(event.key);
//     console.log(event.code);
// });
// ipt.addEventListener("keyup", function(event){
//     console.log("key is released");
// });




// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     let inp = document.querySelector("input");
//     console.log(inp.value);
// })
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
    
// })

// let user = document.querySelector("#user");
// user.addEventListener("input", function(){
//     console.log("input change");
//     console.log("final value = ", this.value);
// });

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("Div was clicked");
});

ul.addEventListener("click", function(event){
    event.stopPropagation();        //This is to stop the event bubbling
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();        //This is to stop the event bubbling
        console.log("li was clicked");
    }); 
}