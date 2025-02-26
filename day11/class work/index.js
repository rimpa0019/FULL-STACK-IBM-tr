/console.log(this)

let obj = {
    name:"Ishika karmakar",
    class:"B tech",
    myfunction:()=>{
        //console.log(this)
        //console, log(this.name,this.class)
        console.log("I am  inside object")

    },
    sunjects:["DBMS","CN","DL","AI"],
    newobj:{
        1:12,
        newmyfunction(){
            //console.log(this)
            return this
        }
    }
}
console.log(obj.myfunction())
console.log(obj.newobj.myNewfuncation())

const arrowFunction=()=>{
    let a=10;
    let b=20;
    let c=a+b;
    return c;

}
let ans = arrowFunction();
console.log(ans)
Condition
let num1 = 10,num2 = 20

if(num1<num2){
    console.log('${num1} is less than ${num2}');
}else if(num1>num2){
    console.log('${num1}is grater than ${num2}');
}
else{
    console.log("No point of me here")
}








// console.log(this)

// let OBJ = {
//     name:"Rimpa Daripa",
//     class:"B tech",
//     myfunction:()=>{
//         //console.log(this)
//         //console, log(this.name,this.class)
//         console.log("I am  inside object")

//     },
//     sunjects:["DBMS","CN","DL","AI"],
//     newobj:{
//         1:12,
//         newmyfunction(){
//             //console.log(this)
//             return this
//         }
//     }
// }
// console.log(obj.myfunction())
// console.log(obj.newobj.myNewfuncation())











   


let num=45;
if(num%3==0 && num%5==0){
    console.log('${num} is Frizz Buzz');
}else if(num%5==0){
    console.log('${num} is Buzz');
}else if(num%3==0){
    console.log('${num} is Frizz');
}else{
    console.log("Enter the correct number");
}



