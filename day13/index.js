//Foreach

let arr=[1,2,3,4,5,6,7,"Rimpa",8,9,10,11,12,"Rim",13,14,15,16]

// arr.forEach((el, index)=>{
//     console.log(el,index)
// })

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],i);
// }


//map

// let output=arr.map((el,index)=>{
//     return el**2;
// });
// console.log(output)


//filter

let output=arr.filter((el,index)=>{
    return typeof el==="string" && el%2==0;
}).map((el,index)=>{
    return el*2;
})
console.log(output)

//Reduce

let output2=arr.reduce((el,acc)=>{
    return el+acc;
},0);
console.log(output2)




let data =[
    { name:"watch",price:2000,rating: 2},
    { name:"phone",price:2000,rating: 4},
    { name:"shoe",price:2000,rating: 5},
    { name:"car",price:2000,rating: 5},
    { name:"abc",price:2000,rating: 2},
    { name:"carphone",price:2000,rating: 4,5}



    





]




