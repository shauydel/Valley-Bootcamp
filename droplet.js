const arr = [1,0,1,0,2,0,1,0,3,0,1]
let water = 0

function droplet(arr){
for(let i = 0;i < 11;i++){
    if(arr[i] < arr[i+2]){
        console.log("1")
        water += arr[i]
    }else if(arr[i] > arr[i+2]){
        console.log("2")
        water += arr[i+2]
    }else{
        console.log("3")
        water += 2
    } 
}
return water
}

console.log(droplet(arr));



