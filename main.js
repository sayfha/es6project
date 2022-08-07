// // variable de function
// function five(){
//     for (var i = 0; i < 6; i++) {
//         console.log(i)
        
//     }
//     console.log("declared with var",i)
// }
// console.log(five());

// // function five(){
// //     for (let i = 0; i < 6; i++) {
// //         console.log(i)
        
// //     }
// //     console.log("declared with let",i)
// // }
// // console.log(five());

// // let vs const
// // const x=[1,2,3]
// // x=4
// // console.log(x)

// // letx = Number[]
// // x=4
// // console.log(x)
// // ------------------------------------
// // // Template literals
// // let firtName ='john';
// // let lastNae ='felix';
// // let fullName =firstName+''+lastName
// // let ullName =`§{firstName} §{lastName} is my name`
// // console.log(fullName);
// // -------------------------------------
// // const names=["mariem ","hamdi" ,"skander"]
// // function Greeting(names){
// //     for (let i = 0; i < names.length; i++) {
// //         console.log(`hello §{names[i]}`)
        
// //     }
// // }
// // console.log(Greeting(names))
// // -----------------------------------------
// // Arrow function
// // old way:
// const sum = function(a){
//     return a+b
// }
// // new way
// const sum = (a,b) =>a+b
// console.log(sum(5,6))


// // ---------------------

// const timeTwo =a => a*2
// console.log(timeTwo(4))

// // -----------------------

// const lights =[
//     {id:1,isGreen:true},
//     {id:2,isGreen:flase},
//     {id:3,isGreen:false},
//     {id:4,isGreen:true}

// ]
// const greenlight=lights.filter(function(light)
// {return light.isGreen;});

// const greenLight=lights.filter(el=>el.isGreen)
// console.log(greenLight)

// // --------------------------------
// const lights =[
//     {id:1,isGreen:true},
//     {id:2,isGreen:flase},
//     {id:3,isGreen:false},
//     {id:2,isGreen:true}
// ]
// const greenLighlights.filter(!el=>id==2)
// console.log(greenLight)
// // --------------------------

// // Find
// const lights =[
//     {id:1,isGreen:true},
//     {id:2,isGreen:flase},
//     {id:3,isGreen:false},
//     {id:4,isGreen:true}

// ]
// const greenLights=lights.find(el=>el.isGreen)
// console.log(greenLight)
 
// const greenLight2=light.filter(el=>el.isGreen)
// console.log(greenLight2)

// // ----------------------------------------------

// const newArr = light.filter(l=>!l.isGreen).map(el=>el.id)
// console.log(newArr)

// const red= light.filter(light=>light.id>1)
// console.log(red)

// -----------------------------------------

// find:arry function that return an element of the arry

// filter:arry function that return sub arry of the original array

// const green1 =light.filter(light=>!light.isGreen)
// console.log(green1)

// // ------------------------------------------------------------------
// const numbers=[0,,2,3,4,5,6]
// const nbr=numbers.filter(el=>el>2)
// console.log(nbr)

// let green =lights.filter(light=>light.isGreen)
// console.log(green[0].id)

// // -------------------------------------------

// // forEach
// const plusOne=()=>light.forEach(light=>light.id++)
// console.log(lights);

// ----------------------------------------------------------------------

// map

// const newArray=light.map(el=>el.id*2)
// console.log(newArray)
// console.log(lights)

// -------------------------------------------------------------
// reduce
// const arr[5,7,9,6,3]
// acc=5,curr=7==>12
// acc=12,curr=9==>21
// acc=21,curr=6==>27
// acc=27,curr=3==>30
// const sum=arr.reduce({acc.curr}=>acc+curr)
// console.log(sum)

// ------------------------------------------------------------

// tenery operater

// const test=false
// if (test){
//     console.log('hello')
   
// } else{
//     console.log('bye')
// }
//  test?console.log("heello"):console.log("by")

//  ------------------------------------------------------

// destructuring
// const temp={
//     yesterday:20,
//     today:25,
//     tomorow:30
// };
// const current=temp.today
// console.log(current)

// -----------------------------------------------------------------

let first=[1,2,3]
console.log(...first)
letsecond=[4,5,6]
letThird=[...first,...srcond]
console.log(third)
console.log(Math.min(...second))