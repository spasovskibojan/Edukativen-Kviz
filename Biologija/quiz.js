let questions;
questions = [
    {
        id: 1,
        question: "Колку коски има во човечкото тело?",
        answer: "206",
        options: [
            "210",
            "207",
            "206",
            "188"
        ]
    },
    {
        id: 2,
        question: "Кои се двата видови јаглехидрати?",
        answer: "Скроб и глукоза",
        options: [
            "Протеини и масти",
            "Скроб и глукоза",
            "Витамини и скроб",
            "Протеини и растителни влакна"
        ]
    },
    {
        id: 3,
        question: "Биологијата е наука што ги изучува..",
        answer: "Сите живи организми и животот",
        options: [
            "Молекулите од кои е составена кожата",
            "Само фотосинтезата и дишењето на клетките",
            "Градбата на атомот",
            "Сите живи организми и животот"
        ]
    },
    {
        id: 4,
        question: "Кој е систем за варење на храната?",
        answer: "Дигестивен",
        options: [
            "Респираторен",
            "Дигестивен",
            "Циркулаторен",
            "Репродуктивен"
        ]
    },
    {
        id: 5,
        question: "Кој ја открил клетката?",
        answer: "Роберт Хук",
        options: [
            "Чарлс Дарвин",
            "Роберт Хук",
            "Алфред Нобел",
            "Никола Тесла"
        ]
    },
    {
        id: 6,
        question: "Организмите кои се составени од една клетка се нарекуваат:",
        answer: "Едноклеточни",
        options: [
            "Митохондрии",
            "Моноклетки",
            "Едноклеточни",
            "Рибозоми"
        ]
    },
    {
        id: 7,
        question: "Кој е систем за дишење?",
        answer: "Респираторен",
        options: [
            "Респираторен",
            "Дигестивен",
            "Репродуктивен",
            "Циркулаторен"
        ]
    },
    {
        id: 8,
        question: "Што изучува биохемијата?",
        answer: "Хемиските процеси во живите организми",
        options: [
            "Кислородот во човечкиот организам",
            "Гените и наследните особини кај живите организми",
            "Влијанието на околината врз живите организми",
            "Хемиските процеси во живите организми"
        ]
    },
    {
        id: 9,
        question: "Која е улогата на хемоглобинот во организмот?",
        answer: "Го разнесува кислородот до ткивата",
        options: [
            "Го разнесува кислородот до ткивата",
            "Лачи хормон за сила",
            "Ги организира ДНК молекулите",
            "Го чисти организмот од токсини"
        ]
    },
    {
        id: 10,
        question: "Во која од следниве групи припаѓа мувлата?",
        answer: "Габи",
        options: [
            "Габи",
            "Вируси",
            "Бактерии",
            "Бактериофаги"
        ]
    },
    {
        id: 11,
        question: "Кое од следниве е машки полов хормон?",
        answer: "Тестостерон",
        options: [
            "Естроген",
            "Тестостерон",
            "Допамин",
            "Прогестерон"
        ]
    },
    {
        id: 12,
        question: "При кој процес растенијата го отстрануваат јаглеродниот диоксид од атмосферата?",
        answer: "Фотосинтеза",
        options: [
            "Респирација",
            "Вентилација",
            "Фотосинтеза",
            "Глукосинтеза"
        ]
    },
    {
        id: 13,
        question: "Од што се составени протеините?",
        answer: "Аминокиселини",
        options: [
            "Аминокиселини",
            "Липиди",
            "Гликоза",
            "Рибозоми"
        ]
    },
    {
        id: 14,
        question: "Која од следниве гранки на биологијата ги проучува клетките?",
        answer: "Цитологија",
        options: [
            "Хистологија",
            "Морфологија",
            "Цитологија",
            "Аминологија"
        ]
    },
    {
        id: 15,
        question: "ДНК е позната и како..",
        answer: "Двојна спирала",
        options: [
            "РНК",
            "Двојна спирала",
            "ДНК А",
            "Диопсија"
        ]
    },
    {
        id: 16,
        question: "Кој дел од човечкото око ја детектира светлината?",
        answer: "Мрежница",
        options: [
            "Мрежница",
            "Белка",
            "Рожница",
            "Шареница(ирис)"
        ]
    },
    {
        id: 17,
        question: "Црниот дроб произведува..",
        answer: "Жолчен сок",
        options: [
            "Плунка",
            "Крв",
            "Жолчен сок",
            "Урина"
        ]
    },
    {
        id: 18,
        question: "Која е основната структурна единица на сите живи организми?",
        answer: "Клетка",
        options: [
            "Крв",
            "Кожа",
            "ДНК",
            "Клетка"
        ]
    },
    {
        id: 19,
        question: "Како се нарекува пигментот што ја одредува бојата на кожата, устата и очите?",
        answer: "Меланин",
        options: [
            "Меланин",
            "Мелатонин",
            "Хемоглобин",
            "Глукагон"
        ]
    },
    {
        id: 20,
        question: "Кој витамин се добива кога сме изложени на Сонце?",
        answer: "Витамин Д",
        options: [
            "Витамин А",
            "Витамин Б",
            "Витамин Ц",
            "Витамин Д"
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
                if(option[i].classList.contains("active")){         // Iskoristi go ova za da gi premestuva predmetite
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
