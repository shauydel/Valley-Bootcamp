const arr=[]
function prime(n){
for (let i=1;i<n;i++){
    if(i%2!=0 && i%3!=0){
        arr.push(i)
    }
}
return arr
}

console.log(prime(20))