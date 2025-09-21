// let jsonResponce = '{"fact":"The Maine Coon is 4 to 5 times larger than the Singapura, the smallest breed of cat.","length":84}';

// let validRes = JSON.parse(jsonResponce);
// console.log(validRes.fact);


// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then(
//     function(response) {
//         console.log(response);
//         return response.json();
//         //this function is used to read the json responce
//     }
// )
// .then(
//     function(data){
//         console.log(data.fact);
//     }
// )
// .catch(
//     function(error) {
//         console.log(error);
//     }
// );


// let url = "https://catfact.ninja/fact";

// async function getFact(){
//     try{
//         let responce = await fetch(url);
//         let data = await responce.json();
//         console.log(data.fact);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// let url = "https://catfact.ninja/fact";
// let factData = ""
// async function getFact(){
//     try{
//         let res = await axios.get(url);
//         factData = res.data.fact;
//         console.log(res.data.fact);
//         let fact = document.querySelector("#fact");
//         fact.innerText = factData;
//     }
//     catch(e){
//         console.log(e);
//     }
// }
// let btn = document.querySelector("button");
// btn.addEventListener("click", 
//     () =>{
//         getFact();

//     }
// )


// let btn = document.querySelector("button");
// btn.addEventListener("click", 
//     async () => {
//         let catFact = await getFact();
//         console.log(catFact); 
//         let para = document.querySelector("#fact");
//         para.innerText = catFact;
//     }
// )

// async function getFact() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){
//         console.log(e);
//         return "No fact found";
//     }
// }


// let url = "https://icanhazdadjoke.com/";


// async function getJokes(){
//     try{
//         const config = {headers: {Accept: "application/json"}};
//         let joke = await axios.get(url, config);
//         console.log(joke.data);
//     }
//     catch(e){
//         console.log("Error Found: ", e);
//     }
// }

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let list = document.querySelector("#list");
btn.addEventListener("click" ,
    async () => {
        let country = document.querySelector("input").value;
        console.log(country);
        let clgArr = await getColleges(country);
        // console.log(clgArr);
        showColleges(clgArr);
    }
)
function showColleges(clgArr){
    list.innerText = "";
    for(let clg of clgArr){
        console.log(clg.name);
        let li = document.createElement("li");
        li.innerText = clg.name;
        list.appendChild(li);
    }
}
// let country = "nepal";
async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    }
    catch(e){
        console.log("Error Found: ", e);
        return [];
    }
}

