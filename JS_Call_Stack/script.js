// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }

// three();

 //withour promise
// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor((Math.random() * 10)+1);
//     if(internetSpeed > 4){
//         success();
//     }    
//     else{
//         failure();
//     }
// }

// savetoDb(
//     "Satyam",
//     () => {
//         console.log("Success: your database was saved");
//         savetoDb(
//             "Hello World",
//         () => {
//             console.log("success2: your database was saved");
//             savetoDb(
//                 "Singh",
//                 () => {
//                     console.log("success3: your database was saved");
//                 },
//                 () => {
//                     console.log("Failure3: Weak connection, Data is not saved.");
//                 }
//             )
//         },
//         () => {
//             console.log("Failure2: Weak connection, Data is not saved.");
//         }
//         );
//     },
//     () => {
//         console.log("Failure: Weak Connection, Data is not saved");
//     }
// );


//with promise

// function savetoDb(data){
//     return new Promise(
//         (resolve, reject) =>{  //Here resolve = result, reject = error
//             let internetSpeed = Math.floor(Math.random() * 10 + 1);
//             if(internetSpeed > 4){
//                 resolve("success: data was saved");
//             }else{
//                 reject("failure: weak connection");
//             }

//         }
//     );
// }

// savetoDb("Satyam").then(
//     (result) => {
//         console.log("data1 saved, promise1 was resoved");
//         console.log("result of promise: ",result);
//         return savetoDb("Singh");  //its result will be return and use as 2nd .then input
//     }
// )
// .then(
//     (result) => {
//         console.log("data2 saved, promise2 was resoved");
//         console.log("result of promise: ",result);
//         return savetoDb("Gaur");
//     }
// )
// .then(
//     (result) => {
//         console.log("data3 saved, promise3 was resoved");
//         console.log("result of promise: ",result);
//     }
// )
// .catch(
//     (error) => {
//         console.log("promise was rejected");
//         console.log("error of promise: ",error);
//     }
// )


// request.then( /*sone function when success */ ).catch( /*sone function when failure */ ); 


// async function myFunction(){
//     // Code
// }

// // OR using arrow function

// let myFunction = async () => {
//     // Code
// }


// async function greet(){
//     throw "Some random error";  //throw an error
//     return "hello";
// }

// greet().then(
//     (result) =>{        
//         //here result will automatically take the value of "return" of greet
//         console.log("promise was resolved");
//         console.log("result was: ", result);
//     }
// ).catch(
//     (err) =>{
//         //here err will automatically take the value of "throw" of greet
//         console.log("pomise was rejected with error: ", err);
//     }
// )

// function getNum(){
//     return new Promise(
//         (resolve, reject) =>{
//             setTimeout(
//                 () => {
//                     let num = Math.floor(Math.random() * 10) +1;
//                     console.log(num);
//                     resolve();
//                 },
//                 1000
//             )
//         }
//     )
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }





    // function savetoDb(data, success, failure){
    //     let internetSpeed = Math.floor((Math.random() * 10)+1);
    //     if(internetSpeed > 4){
    //         success();
    //     }    
    //     else{
    //         failure();
    //     }
    // }


    // savetoDb(
    //     "Satyam",
    //     () => {
    //         console.log("Success: your database was saved");
    //         savetoDb(
    //             "Hello World",
    //         () => {
    //             console.log("success2: your database was saved");
    //             savetoDb(
    //                 "Singh",
    //                 () => {
    //                     console.log("success3: your database was saved");
    //                 },
    //                 () => {
    //                     console.log("Failure3: Weak connection, Data is not saved.");
    //                 }
    //             )
    //         },
    //         () => {
    //             console.log("Failure2: Weak connection, Data is not saved.");
    //         }
    //         );
    //     },
    //     () => {
    //         console.log("Failure: Weak Connection, Data is not saved");
    //     }
    // );



    // JSON (string format)

    let jsonData = '{"name":"Satyam", "age":22}'; 
    // Note the double quotes and string format

    // javaScript Objects:

    let objData = { name: "Satyam", age: 22 }; 
    // Real object
