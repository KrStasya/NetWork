// bubl sort


const array=[34,0,45,778,10,3,94,]

for (let j=0; j<array.length-1; j++) {
    for (let i = 0; i < array.length - 1-j; i++) {
        if (array[i] > array[i + 1]) {
            /*  let temp = array[i + 1]
              array[i + 1] = array[i]
              array[i] = temp*/
            [array[i + 1],array[i]]=[array[i],array[i + 1]] // деструктуризация
        }
    }
}
console.log(array)

// Array.sort()

const names =["Bob", "Alex", "Helga", "Dimon", "Viktor", "bob","Игорь", 999] // сортирует по юникоду

console.log(names.sort())

const numbers =[100,99,2000,1,-100, 98] // читает как строки
console.log(numbers.sort()) // сортирует по первому символу


const compFn=(a,b)=> a<b? -10:  100
console.log(numbers.sort(compFn))

/*
function compFn(a,b) {
    if (a<=b) {
        return -1
    }
    else {
        return 1
    }
}

const compFn=(a,b)=>a-b*/


const words =(a,b)=> a.length-b.length // по длине слов

console.log(names.sort(words))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];


console.log(students.
    sort((a,b)=>a.scores-b.scores) // метод then
    .reverse()
)

const arr=[34,0,45,778,10,3,94,] // для собеса

const Sort=(arr)=> {
    let leght=arr.length
    while (leght>0) {
        let max=Math.max(...arr.slice(0,leght+1))
        let index=arr.lastIndexOf(max);
        [arr[leght],arr[index]]=[arr[index],arr[leght]]
            leght=leght-1
    }
    return arr
}
console.log(Sort(arr))