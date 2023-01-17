let questions;
questions = [
    {
        id: 1,
        question: "Виница е општина од:",
        answer: "Источна Македонија",
        options: [
            "Источна Македонија",
            "Западна Македонија",
            "Северна Македонија",
            "Јужна Македонија"
        ]
    },
    {
        id: 2,
        question: "Кој е највисок врв на светот?",
        answer: "Монт Еверест",
        options: [
            "Монт Еверест",
            "Килиманџаро",
            "Мон Блан",
            "Голем Кораб"
        ]
    },
    {
        id: 3,
        question: "Која е најдолга река во светот?",
        answer: "Нил",
        options: [
            "Вардар",
            "Јанцекјанг",
            "Нил",
            "Амазон"
        ]
    },
    {
        id: 4,
        question: "Кое е најдлабокото езеро во светот?",
        answer: "Бајкалско",
        options: [
            "Бајкалско",
            "Тангањика",
            "Комо",
            "Охридско"
        ]
    },
    {
        id: 5,
        question: "Кој е највисок врв во Македонија?",
        answer: "Голем Кораб",
        options: [
            "Титов Врв",
            "Пелистер",
            "Лисец",
            "Голем Кораб"
        ]
    },
    {
        id: 6,
        question: "Кои два континенти ги дели Босфорот?",
        answer: "Европа и Азија",
        options: [
            "Европа и Африка",
            "Азија и Африка",
            "Северна Америка и Јужна Америка",
            "Европа и Азија"
        ]
    },
    {
        id: 7,
        question: "Македонија е:",
        answer: "Континентална држава",
        options: [
            "Континентална држава",
            "Островска држава",
            "Држава која излегува на море",
            "Ниту едно од наведените"
        ]
    },
    {
        id: 8,
        question: "Граничниот премин Богородица се наоѓа на границата со:",
        answer: "Грција",
        options: [
            "Бугарија",
            "Грција",
            "Србија",
            "Косово"
        ]
    },
    {
        id: 9,
        question: "Кои делови од Македонија ги зафаќа Родопската Зона?",
        answer: "Источните",
        options: [
            "Западните",
            "Вардарските",
            "Источните",
            "Јужните"
        ]
    },
    {
        id: 10,
        question: "Колкав процент од територијата на Македонија се планини?",
        answer: "80%",
        options: [
            "20%",
            "55%",
            "68.5%",
            "80%"
        ]
    },
    {
        id: 11,
        question: "Која е најголема котлина во Македонија?",
        answer: "Пелагонија",
        options: [
            "Тиквешка",
            "Скопска",
            "Пелагонија",
            "Овче Поле"
        ]
    },
    {
        id: 12,
        question: "Националниот парк Галичица се наоѓа:",
        answer: "Помеѓу Охридско и Преспанско Езеро",
        options: [
            "Помеѓу Охридско и Преспанско Езеро",
            "На Шар Планина",
            "Покрај реката Вардар",
            "На Осоговските Планини"
        ]
    },
    {
        id: 13,
        question: "Која од наведениве држави има најмногу жители?",
        answer: "Кина",
        options: [
            "Индија",
            "Кина",
            "Австрија",
            "Бразил"
        ]
    },
    {
        id: 14,
        question: "Која од следниве држави не се наоѓа во Европа?",
        answer: "Алжир",
        options: [
            "Алжир",
            "Естонија",
            "Грција",
            "Норвешка"
        ]
    },
    {
        id: 15,
        question: "На чија територија се наоѓа Монт Еверест?",
        answer: "Непал",
        options: [
            "Германија",
            "Австрија",
            "Непал",
            "Индија"
        ]
    },
    {
        id: 16,
        question: "Кој континент има најголема површина?",
        answer: "Азија",
        options: [
            "Европа",
            "Азија",
            "Африка",
            "Северна Америка"
        ]
    },
    {
        id: 17,
        question: "На која држава припаѓаат Канарските Острови?",
        answer: "Шпанија",
        options: [
            "Алжир",
            "Мароко",
            "Шпанија",
            "Франција"
        ]
    },
    {
        id: 18,
        question: "Која од следниве држави не излегува на море?",
        answer: "Чешка",
        options: [
            "Германија",
            "Чешка",
            "Франција",
            "Полска"
        ]
    },
    {
        id: 19,
        question: "Која од следниве држави е островска?",
        answer: "Нов Зеланд",
        options: [
            "Русија",
            "Израел",
            "Шпанија",
            "Нов Зеланд"
        ]
    },
    {
        id: 20,
        question: "Кој е главниот град на Македонија?",
        answer: "Скопје",
        options: [
            "Куманово",
            "Велес",
            "Скопје",
            "Виница"
        ]
    }
];

let question_count = 0;
let points = 0;
sessionStorage.setItem("points", 0);

window.onload = function(){
    show(question_count);
};
function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2 class="q">Прашање ${count + 1}. ${questions[count].question}</h2>
    <ul class = "option_group">
    <li class = "option">${first}</li>
    <li class = "option">${second}</li>
    <li class = "option">${third}</li>
    <li class = "option">${fourth}</li>
    </ul>`;
    toggleActive();
}
function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i<option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i<option.length; i++){
                if(option[i].classList.contains("active")){  
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}
function next(){
    if(question_count == questions.length - 1){
        location.href = "final.html";
    }

let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points+=10;
    sessionStorage.setItem("points", points);
}
else{
    netocno(question_count+1);
}
 
console.log(points);
question_count++;
show(question_count);
}

const opcii = [];
function netocno(count){

    opcii.push(count);
    console.log(opcii);
    sessionStorage.setItem("opc", opcii);
}

let op = sessionStorage.getItem("opc");;
console.log(op);
document.getElementById("opp").innerHTML = "Неточни одговори: "+ op + ".";
