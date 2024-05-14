//  const about={
//     name:"salman",
//     age:12

//  }
//  //using new
//  function newabout(name,age,city){
//     this.name=name;
//     this.age=age;
//     this.city=city;
//  }
//  const me=new newabout('abhi',22,'ctc');
//  console.log(me.name);
//  //Object.create()
//  const meabt={

//     name:"abhidd",
//     eatapple:false,
//     printabout:function(){
//         console.log(`i am ${this.name} and i ${this.eatapple} apple daily`);
//     }};
//     //createing myfriend object inherite from me
//     const myfriendobj=Object.create(meabt);
 

//     myfriendobj.name = "Ladoo";
//     myfriendobj.eatapple = true;

//     console.log(meabt.printabout());
//     // Expected Output: I am Abhishek. and I don't eat apple daily.
//     console.log(myfriendobj.printabout());

function sayMyName (){
    return `My name is ${this.name}`
}

const person={
    name:"salman",
    saymyname:sayMyName 
    };
 
console.log(person.saymyname())
const person2={name:'madhab'}
const personfun2call=sayMyName.bind(person2);
console.log(personfun2call());
 
////prototype.call()
function introduce(language) {
    console.log(`I code in ${language}. My name is ${this.name}.`);
}
const myself={name:"abisek"}
introduce.call(myself,'java');
////prototype.apply()

////The apply() method is similar to call(), but insted of 
////accepting arguments individually, it accepts arguments as an array

function add(...args){
    let sum = args.reduce((acc, curr)=> acc + curr, 0 );
    console.log(sum);
}
const numbers = [1,2,3,4,5];
add.apply(null, numbers)
// Expected output: 15


////call: Use call when you want to execute a function immediately and specify what this should refer to
////bind: Use bind when you want to create a new function that, when executed later, has a predeterminf this value
////apply" Use apply when you have an array of arguments that you want to pass to a function.