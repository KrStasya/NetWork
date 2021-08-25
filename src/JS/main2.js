// событие это измененние либо состояния документа либо действие пользователя приводящее к изменению браузера
// пользователь: изменение в интутах, действие с клавиатурой и мышкой-это события пользователя
// mdn  - просмотр событий
// "Событие"-> event
// Ищет обработчик-> это функция (обработчик, слушатель, коллбак, подписчик)
// Браузер генерирует обьект со сведениями о произшедшем событии-> event, ev, e
// вызывает обработчик с обьектом в качестве параметра


const sml=document.getElementById("small")
const mdm=document.getElementById("medium")
const big=document.getElementById("big")

//const onClickHandler = (e) => {
   // if (e.target.tagName==="BUTTON") {
    //    console.log(e.target.name) // делегировали событие родителю
   // }
//}
//sml.onclick=onClickHandler
//mdm.onclick=onClickHandler
//big.onclick=onClickHandler
    //sml.onclick=null

//sml.addEventListener("click",onClickHandler)// можно назначить несколько обработчиков, можно выбрать когда происходит событие, при погружении либо при всплытии, договорились, что все события будет только при всплытии
//sml.removeEventListener("click",onClickHandler)// удаление
// если использовать стрелочную функцию, то ее нельзы будет удалить
// e.target -> элемент, который сгенерировал событие (первый клик)
// e. currentTarget -> элемет, который вызвал оработчик в процессе всплытия
//currentTarget =позволяет получить ссылку на событие


/*const onClickHandler = (e) => {
    e.stopPropagation() // останавливает распространение события
   console.log(e.target)

}
sml.onclick=onClickHandler
mdm.onclick=(e)=>{
    e.stopPropagation()
     alert('mdm')
}
big.onclick=(e)=>{
    e.stopPropagation()
     alert('big')
}*/

const a= document.getElementById("anchor")
a.addEventListener("click",(e)=>{
    e.preventDefault()//  отмена действия ссылки и выполнения следующей функции
alert("Google")} )