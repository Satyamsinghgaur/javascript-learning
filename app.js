// console.log("Hello World");
// let a = 1;
// let b = 5;
// // a+b;
// console.log("Sum is :",a + b); 

// let pencilPrice = 10;
// let eraserPrice = 5;
// let output = "the total price is : " + (pencilPrice + eraserPrice) + " Rupees.";
// let output = `the total price is : ${pencilPrice + eraserPrice} Rupees`;
// console.log(output);
  
// Equality Operators : - == (Equal to): Compares values but not types.
// console.log(5 == "5"); // true (type coercion happens)


// let student = ['aman', 'vasudev', 'rajat'];
// console.log(student);
//object literal
/*
let student = {
    name : "Satyam",
    age : 23,
    marks : 29
    };
    
    
    const twitter_thread= {
        username: "Rapid_Satsi",
        content: "This is very bad",
        likes: 6000000,
        reposts: 2999,
        tags: ["#bad", "#very", "#this"]
    };
    const classInfo = {
        aman : {
            age: 20,
            gender : "male" 
        },
        satyam: {
            age: 21,
            gender: "male"
        },
        shradha : {
            age: 19,
            gender: "Female"
        }
    
    };
    
    const company = {
      name: "TechCorp",
      location: "India",
      employees: {
        manager: {
          name: "Satyam",
          age: 35,
          department: "IT"
        },
        developer: {
          name: "Amit",
          age: 28,
          skills: ["JavaScript", "React", "Node.js"]
        }
      }
    };
    
    // Accessing nested object properties
    console.log(company.employees.manager.name); // Output: Satyam
    console.log(company.employees.developer.skills[1]); // Output: React
*/


//Array of Objects
/*
let classInfo = [
    {name: "satyam", age: 50, city: "Banda"},
    {name: "Ram", age: 10, city: "pune"},
    {name: "Shyam", age: 29, city: "Mumbai"}
];

const randomNum = Math.floor(Math.random() * 10) + 1; 
// Random number between 1 and 10
console.log(randomNum);
*/

//Guess the no.
/*
let x = prompt("Enter the max no.");
let guess = Math.floor(Math.random() * parseInt(x)) + 1;
let flag = true;
while(flag){
    let ip = prompt("Enter the no.");
    if(parseInt(ip) == guess){
        console.log(`Your guess is correct the random no. is ${guess}`);
        flag = false;
    }
    else{
        console.log("Your guess is incorrect try again!");
    }
}
*/

// Functions

/* 
function hello() {
    console.log("Hello");
}

function rolldice(){
    let x = Math.floor(Math.random() * 6) + 1;
    console.log(`now the dice display no ${x}`);
}

function add(a, b){
    console.log(a + b);
}

add(5, 6);  //It gives 11 as output

function getAverage(a ,b, c){
    let avg = (a + b + c)/3;
    console.log(`the average of no. is ${avg}`);
}

getAverage(5,6,8);
function sum(a,b){
    return a+b;
}

let s = sum(3,4);
console.log(s);

//   ( or )

console.log(sum(3,4));   
function con(arr){
    let x = "";
    for(let s = 0; s < arr.length ; s++){
        x += arr[s];
    }
    console.log(x);
}

let arr = ["My"," ","name"," ","is"," ","Satyam"];
con(arr);
let sum = 54; //Global Scope

function calSum(a, b) {
    let sum =a+b;  // Function Scope
    console.log(sum)  //output = 3
}

calSum(1, 2);
console.log(sum) ;  //output = 54
{
    let a= 35;
}

console.log(a);  //outside of block { }
     
    //if we use var instead of let or const then we
    can access it from outside of block
    
    function outerFunc(){
        let x =5;
        let y =6;
        function innerFunc(){
            console.log(x);  //here x has lexical scoper
        }
    
        innerFunc();
    }
    
    let x = function(a, b){
        return a +b;
    }
    
    console.log(x(5,6));
    function hOF(func, n){
        for(let i = 0; i < n; i++){
            func();
        }
    }
    
    let greet = function(){
        console.log("Hello");
    }
    hOF(greet, 2);
    
    
    const calculator = {
        add: function(a,b){
            return a+b;
        } ,
        mul: function(a,b){
            return a*b;
        } ,
        sub: function(a,b){
            return a-b;
        }
    }
    
    console.log(calculator.add(5,7));  //output = 12


    const student = {
        name: "Satyam",
        age: 23,
        eng: 95,
        math: 96,
        phy: 97,
        getAvg(){
            let avg = (this.eng + this.math + this.phy) / 3;
            console.log(avg);
        }
    }


    try{
        console.log(a);
    } catch(e) {
        console.log("Variable does not exist!");
        console.log(e);
    }

    let add = (a, b) => { return a + b;}
    console.log(add(2,5));
    
    
    const mul = (a,b) => (a*b);
    
    setTimeout(
        () => {console.log("Satyam")},
        5000
        );
        
        
        let id = setInterval(
            () => {console.log("Satyam");},
            5000
        )
        
        clearInterval(id);
        
        
        
        
        const student = {
            name: "aman",
            marks: 95,
            prop: this,  //global scope
            getname: function(){
                console.log(this);  //this represents student object data  
                return this.name;  //aman
            },
            getmarks: () => {
                console.log(this);  //this represents window(parent)data  --> parents scope 
                return this.marks;  //undefined
            },
            getInfo1: function () {
                setTimeout (
                    () => {console.log(this)},  //Student object
                    2000
                );
            },
            getInfo2: function(){
                setTimeout(
                    function(){ 
                        console.log(this);  //Window object
                    },
                    2000
                );
            },
        
        };
        
        const a = 5; //global scope
        
        let id = setInterval(
            () => {console.log("Hello World");},
            2000
        )
        
        setTimeout(
            () => {clearInterval(id);},
            10000
        )

    //print out array average
        arr = [4, 5, 6, 7, 8]
        let x = (arr) =>{
            let m = 0;
            for (let y of arr){
                m += y;
            }
            return m/arr.length;
        }
        console.log(x(arr));

        let arr = [4, 5, 6, 8];
        
        let print = function(el){
            console.log(el);
        }
        
        arr.forEach(print);

        let arr = [2, 3, 4, 6, 8];
        
        arr.forEach(function (el){
            console.log(el);
        })
        
        let lol = num.map(
         function (el) {
            return el * 2;
         }   
        )
        
        lol;

        let num = [4, 5, 6, 7, 8, 9];
        
        let even = num.filter(
            function(el){
                return el % 2 == 0;
            }
        )
        
        let x = [1, 2, 3, 4].reduce(
            (res, el) => {return res+el}
        )
        
        let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2]
        let maxEle = arr.reduce(function (max, ele)
        {
            if(max > ele){
                return max;
            } else {
                return ele;
            }
        })
        
        console.log(maxEle);
        
        arr = [10, 20, 30, 30, 40, 50, 55];
        
        let newArr = arr.filter(
            (el) => el % 10 == 0
        )
        
        if(newArr.length == arr.length){
            console.log("All elements in our array are multiples of 10");
        }
        else{
            console.log("At least one element is in arrray is not multiple of 10")
        ;}
        
        function sum(...args){  //Here args will create an infinite array and store the arguments
            for(let i = 0; i < args.length; i++){
                console.log("You gave us:", args[i]);
            }
        }
        
        let names = ["Tony", "Satyam", "Vivek", "Lol"];
        
        let [Wommer, runner, ...others] = names;

*/






