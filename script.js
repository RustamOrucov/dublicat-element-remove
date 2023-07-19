let arr=[]

for(let i=0;i<6;i++){
    let el=(prompt('arryin elementlerini daxil edin'))
   if(arr.includes(el)==false){
    arr.push(el)
   }
}
console.log(arr);