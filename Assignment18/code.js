// mapping

let marks = [15,22,13,444,12]
let a = marks.map((value, )=>{
    console.log(value)
    return value +1
})
console.log(a)

//filter
let marks2 = [1,4,65,12,34,54,11,56,2]
let a2 = marks2.filter((ab)=>{
    return ab<30
})

console.log(a2)

//reduce
let score = [15,22,13,444,12]
let b = score.reduce((val,val2)=>{
    return val+val2
})
console.log(b)

