let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    // item.innerHTML = `${inp.value}  <button class="Delete">Delete</button>`;
    item.innerText = inp.value;

    let btdlt = document.createElement("button");
    btdlt.innerText = "Delete";
    btdlt.classList.add("delete");
    item.appendChild(btdlt);
    ul.appendChild(item); 
    // console.log(inp.value);
    inp.value = "";
})
//code for Event Delegation
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){      //selecting the delete target button
        let listItem = event.target.parentElement;  //accessing the buttons parent element
        listItem.remove();  //removing the parent list element
    }
})

// let btdlts = document.querySelectorAll(".delete");
// for(b of btdlts){
//     b.addEventListener(" click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }