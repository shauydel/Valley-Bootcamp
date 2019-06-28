//MAP , FOREACH , FILTER
let arr= [
    {
        fruit : "pomogrenate",
        color : "red",
       
    },
    {
        fruit : "mango",
        color : "yellow",
    },
    {  
        fruit : "banana",
        color : "yellow",
    },
    { 
        fruit : "guava",
        color : "green",

    },
    {  
        fruit : "apple",
        color : "red",
    }
]

console.log(arr[2].fruit);

arr[0]["Vitamin"] = "A"

arr.map((item,i,arr) => {
   arr[i]["Vitamin"] = "A"
})

const red = arr.filter((item,i,arr) =>{
    if(arr[i].color == "red"){
        return arr[i].fruit
}
})

console.log(red);


// let result = red.map((item,i,arr) => item.fruit)
// console.log(result);

let value = red.map((item,i,red) => {
    return red[i]=item.fruit
})

console.log(value)

const cel = [-15,32,33,27,29,44]

let val = cel.map((item,i,cel) => {
    return cel[i] * 1.8 + 32
     
})

console.log(val);

const a = [1,2,3,4,5,7]
const b = [1,4,6,8,9,10]
const c = []

// for(let i=0 ;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//         if(a[i] === b[j]){
//             c.push(a[i])
//         }
//     }
// }

//console.log(c);

let value1 = a.filter(item => b.includes(item))
console.log(value1);

const arr1 = [ 
    {
        name : "Shubham",
        role : "student",
    },
    {
        name : "Sanjit",
        role : "student",
    },
    {
        name : "abdesh",
        role : "student",
    },
]

let firstLetter,restLetter,final,capital
let result = arr1.map(items => {
    if(items.name.charCodeAt(0) >= 97){
        firstLetter = items.name.split('')
        firstLetter[0] = firstLetter[0].toUpperCase()
        console.log(firstLetter[0]);
        
        items.name = firstLetter.join('')
    }
  console.log(items)
})









