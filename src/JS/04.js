const todolistID_1="1-hf" // v1()
const todolistID_2="2-hf"// v1()
const todolistID_3="3-hf"// v1()



const todolist = [
    {
        id:todolistID_1 ,
        title: "What to learn",
        filter: "all" ,
    },
    {
        id: todolistID_2,
        title:"What to by",
        filter:"all",
    },
    {
        id: todolistID_3,
        title:"What to by",
        filter:"all",
    },
]


const tasks = {
    [todolistID_1]: [ // имя свойства
        {name: "HTML", isDone: true},
        {name: "CSS", isDone: true},
        {name: "JS", isDone: false},
    ],
    [todolistID_2]: [
        {name: "Bear", isDone: true},
        {name: "Fish", isDone: true},
        {name: "Meat", isDone: false},
    ],
        [todolistID_2]: []
}



// reduce - метод, который позволяет сократить массив до одного значения
// два параметра- первый -аккумулятор- это результат вызова предыдущей операции, если значение не передавать, то по умолчанию береься первый элемент
const numbers = [23, 56, 24, 98, 36, 12];

const value = numbers.reduce((sum, el)=>{
    sum=sum+el
    return sum
},0)

console.log(value)

const max=numbers.reduce((acc,el)=>acc>el?acc:el)

console.log(max)

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(
    students.reduce((acc,el)=>{
        return acc=el.scores
    },0)
)

console.log(
    students.reduce((acc,el)=>{
        if(el.scores>=100) {
            acc.push(el)
        }
       return acc
    },[])
)


   const r=students.reduce((acc,el)=>{
        if (el.name==="Bob") {
            acc.push({...el,isMarried: false})
            return acc
        }
        acc.push(el)
        return acc
    },[])

console.log(r)