let questions;
questions = [
    {
        id: 1,
        question: "Колку изнесува 2 + 2?",
        answer: "4",
        options: [
            "2",
            "3",
            "4",
            "5"
        ]
    },
    {
        id: 2,
        question: "Што е отсечка?",
        answer: "Права ограничена со две точки",
        options: [
            "Права ограничена со две точки",
            "Права ограничена со една точка",
            "Неограничена права",
            "Крива ограничена со две точки"
        ]
    },
    {
        id: 3,
        question: "Збирот на аглите во секој триаголник изнесува:",
        answer: "180 степени",
        options: [
            "90 степени",
            "180 степени",
            "270 степени",
            "360 степени"
        ]
    },
    {
        id: 4,
        question: "Во равенката 2x = 6, x се нарекува:",
        answer: "Непозната",
        options: [
            "Непозната",
            "Константа",
            "Променлива",
            "Буква"
        ]
    },
    {
        id: 5,
        question: "Аголот кој има помалку од 90 степени се нарекува:",
        answer: "Остар агол",
        options: [
            "Комплементен агол",
            "Остар агол",
            "Тап агол",
            "Рамен агол"
        ]
    },
    {
        id: 6,
        question: "Што е радиус на кружница?",
        answer: "Отсечка која се протега од нејзиниот центар до нејзиниот раб",
        options: [
            "Отсечка чии крајни точки лежат на кружницата и минува низ нејзиниот центар",
            "Отсечка чии крајни точки лежат на кружницата",
            "Отсечка која се протега од нејзиниот центар до нејзиниот раб",
            "Точка со која се означува центар на кругот"
        ]
    },
    {
        id: 7,
        question: "Што е константа во математиката?",
        answer: "Величина која не се менува",
        options: [
            "Величина која постојано се менува",
            "Величина која не се менува",
            "Секој комплексен број",
            "Ниту едно од наведените"
        ]
    },
    {
        id: 8,
        question: "Кои броеви ги нарекуваме парни?",
        answer: "Броевите што се делат со 2",
        options: [
            "Секој број што се дели сам со себе",
            "Броевите што не се делат со два",
            "Броевите што се делат со 2",
            "Сите негативни броеви"
        ]
    },
    {
        id: 9,
        question: "Која математичка операција ја претставува дробната црта кај дропките?",
        answer: "Делење",
        options: [
            "Собирање",
            "Одземање",
            "Множење",
            "Делење"
        ]
    },
    {
        id: 10,
        question: "За кој број велиме дека не може да се дели со него?",
        answer: "Нула",
        options: [
            "0.5",
            "1",
            "-1",
            "Нула"
        ]
    },
    {
        id: 11,
        question: "Триаголникот кој има две исти страни се вика:",
        answer: "Рамнокрак",
        options: [
            "Рамнокрак",
            "Рамностран",
            "Рамнодвостран",
            "Разностран"
        ]
    },
    {
        id: 12,
        question: "Какви функции се синус(sin) и косинус(cos)?",
        answer: "Тригонометриски",
        options: [
            "Тригонометриски",
            "Диференцијални",
            "Алгебарски",
            "Квадратни"
        ]
    },
    {
        id: 13,
        question: "Колку изнесува 40% од 120?",
        answer: "48",
        options: [
            "60",
            "48",
            "80",
            "56"
        ]
    },
    {
        id: 14,
        question: "Кои броеви се прости?",
        answer: "Броевите кои се делат самите со себе и со 1",
        options: [
            "Броевите кои се делат самите со себе и со 1",
            "Броевите кои се делат со 2",
            "Броевите чијшто збир на цифри изнесува 10",
            "Броевите кои не се делат со 2"
        ]
    },
    {
        id: 15,
        question: "Колку изнесува корен од 9?",
        answer: "3",
        options: [
            "9",
            "81",
            "3",
            "4.5"
        ]
    },
    {
        id: 16,
        question: "Кои се природни броеви?",
        answer: "Броевите кои се цели и поголеми од нула",
        options: [
            "Броевите кои се цели и поголеми од нула",
            "Сите негативни броеви",
            "Броеви што завршуваат на 5 и 0",
            "Броевите кои претставуваат дропка"
        ]
    },
    {
        id: 17,
        question: "Како гласи Питагорината теорема?",
        answer: "c²=a²+b²",
        options: [
            "a²=b+c",
            "b²=a²+c²",
            "c²=a²+b²",
            "a=b+c"
        ]
    },
    {
        id: 18,
        question: "Како се определува плоштина на правоаголник?",
        answer: "P=a*b",
        options: [
            "P=2a*2b",
            "P=a*b",
            "P=2a+2b",
            "P=(a*b)/2"
        ]
    },
    {
        id: 19,
        question: "Како се определува периметар на квадрат?",
        answer: "4а",
        options: [
            "а²",
            "а*а",
            "4а",
            "а+а"
        ]
    },
    {
        id: 20,
        question: "Како се определува волумен на квадар?",
        answer: "a³",
        options: [
            "a*a",
            "a+a+a",
            "a³",
            "2a*2a"
        ]
    },    
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
var opcii = [];

function netocno(count){
    opcii.push(count);
    console.log(opcii);
    sessionStorage.setItem("opc", opcii);
}

let op = sessionStorage.getItem("opc");

console.log(op);
    document.getElementById("opp").innerHTML = "Неточни одговори: "+ op + ".";  
