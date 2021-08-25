// CRUD
// иммутабельно-
// иммутабельно -> создаем копию и вносим изменения в копию данных

// Массивы, функции и объекты(тип данных, который содердит в себя другие тив данных) имеют встроенные свойства и методы

const student ={ //#1
    name: "Bob",
    age: 30,
    friends: ["Alex",'Donald'], //#12
   // fu: ()=> "hey!" // стрелка выполняет функцию return
}

/*const srt ="yo!"
let srtPlus =srt
console.log(srtPlus)
srtPlus="Hey!"*/

const studentPlus=student
studentPlus.name="John"
console.log(student)



//const keys=Object.keys(student)
//console.log(keys)
//const copyStydent={}// Создание нового объекта //#2
//for (let i=0; i<keys.length;i++) {
//    copyStydent[keys[i]] = student[keys[i]]
//}

const copyStydent={...student} // #3  Создоние копии объекта -это спред оператор
console.log(copyStydent)

const num= [1,2,3]
const copyNum=[...num]

student.friends.push("Nick")
console.log(student)
console.log(copyStydent)

const deepCopyStudent ={ // глубокое копирование
    ...student,
    friends: [...student.friends]  //#a25
}

deepCopyStudent.friends.push("Ann")
console.log(deepCopyStudent)
console.log(student)



// map

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 89
    }, {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

//const getStudentName=(st)=>st.name
function getStudentName (st,i) {
    return `Student $[i]: ${st.name},${st.age} years old` // обратная ковычка
}
const names= student.map(getStudentName)