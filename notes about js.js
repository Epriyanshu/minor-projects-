 // callback , promises & Async await in JS 



// // // synchronous program (step by step execution) 
// // console.log("hrllod");
// // console.log("hrllod");
// // console.log("hrod");
// // console.log("llod");
// // console.log("hr");

// // // asynchronous program (not step by step execution)
// // console.log("hrllod");
// // console.log("hrllod");
// // console.log("hrod");
// // setTimeout(() => {
// //     console.log("print ");
// // }, 5000);
// // console.log("hrllod");
// // console.log("hrllod");
// // console.log("hrod");



// // callback function 
// // function sub (a,b)  {
// //     console.log (a-b);
// // }
// // function calculator  (a,b , subCallback){
// //     subCallback(a,b);
// // }
// // calculator (43679860,49867345, (a,b) =>{
// //     console.log(a+b);
// // });



// // nested callback 
// // let a=6 ;
// // if (a>= 16 )
// // {
// //     if(a >= 18 ){
// //         console.log("16-18")
// //     }else {
// //         console.log("senior ")
// //     }
// // }
// // else {
// //         console.log ("bacha  🤣")
// //     }




//   // callBack hell😒 
// //   function getData (dataId , getNextdata){
// //    setTimeout(() => {
// //     console.log("the data is ", dataId);
// //     if (getNextdata){
// //         getNextdata ();
// //     }
// //    }, 200);
// //   }
// //   getData (4, () => {
// //     getData (2,()=> {
// //         getData (6, () => {
// //             getData (4);
// //         });
// //     });
// //   });


//  //promise chaining
// //   function asyncFunc1() {
// //     return new Promise (( resolve ,reject ) => {
// //         setTimeout (() => 
// //         {
// //             console.log("data  ..A is printed ");
// //             resolve("success ");
// //         },3000);
// //     });
// //   }

// //    function asyncFunc2() {
// //     return new Promise (( resolve ,reject ) => {
// //         setTimeout (() => 
// //         {
// //             console.log("data..2 is printed ");
// //             resolve("success ");
// //         },3000);
// //     });
// //   }

// // console.log("fetching the data...A");

// // let p1 = asyncFunc1();
// // p1.then((res) => {
// //     console.log("fetching the data ...2");
// //     let p2 = asyncFunc2 ();
// //     p2.then((res) => {}
// // );
// // });


// // async await function
// function priyanshu ( ) {
//     return new Promise ((resolve , reject) => {
//         setTimeout (() => {
//             console.log (" thandi hai ");
//             resolve ("200"); // success 
//         },2000);
//     });
// }
// //await function
// async function getWeatherData (){
//  await priyanshu (); // 1st executation 
//  await priyanshu ();   // 2nd executation
// }
// getWeatherData ( "jsgnff ");

// // IIFE (Immediately Invoked Function Expression) BY MDN reference  it is used for avoid polluting the global scope and to create a new scope for variables and functions. It is a function that is defined and immediately invoked (called) after its creation. the syntax for an IIFE  is as follows:
// // (function() {
// //     // code to be executed
// // })();
