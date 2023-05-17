let n = parseInt(readLine())
let mp = new Map()
readLine().split(" ").map((element) => {
    element = parseInt(element)
    if(mp.has(element)){
        mp.set(element, mp.get(element)+1)
    }
    else{
        mp.set(element,1)
    }
})
let customers = parseInt(readLine())
let amount = 0
for(let i = 0; i < customers; i++){
    let[size, currentAmount] = readLine().split(" ").map(Number)
    if(mp.has(size)){
        amount += currentAmount
        if(mp.get(size) == 1){
            mp.delete(size)
        }
        else{
            mp.set(size, mp.get(size)-1)
        }
    }
}
console.log(amount)