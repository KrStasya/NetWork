console.log("yo")

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

//students.map() // никогда не передаем вызов функции
//передаем либо литерал либо функцию

//

const getname = el => el.name


console.log(students.map(el => el.name))// возвращает новый массив -столько же элементов сколько и в исходном, элементы могут быть преодбразованными

const map = (array,callback) => {
    const newArray=[]
    for(let i=0; i<array.length;i++){
        newArray[i] = callback(array[i])
    }
    return newArray
}
console.log( map(students,getname))
console.log(map(students,st=>({...st,technologies:[]}))) // добавление свойства в массив


const filter=( array, callback)=>{ // возвращает массив, количество может не совпадать с исходном, дежат элементы исходного массива без изменений
    const newArray=[]
    for(let i=0; i<array.length;i++){
        if (callback(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray

}
console.log(filter(students,st=>st.isMarried))


const find = (array, callback)=> { // не возвращыет новый массив, а возвращает объект с котором совпадает условие
    for(let i=0; i<array.length;i++){ //используется только если уыерены, что в массиве один такой элемент
        if (callback(array[i])) {
            return (array[i]) // если несколько -то используем метод filter
        }
    }

}

console.log( find (students,st=>st.name === "Bob"))