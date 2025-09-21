let btn = document.querySelector("button");
btn.addEventListener("click", function (){
    let newColor = getRandomColor();
    let h3 = document.querySelector("h3");
    h3.innerText = `the Generated color is : ${newColor}`;
    h3.style.color = newColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = newColor;
    console.log("Color is updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}