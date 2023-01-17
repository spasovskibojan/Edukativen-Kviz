let questions;
questions = [
    {
        id: 1,
        question: "Кој е првиот хемиски елемент во периодниот систем со атомски број 1?",
        answer: "Водород",
        options: [
            "Кислород",
            "Водород",
            "Хелиум",
            "Јаглерод"
        ]
    },
    {
        id: 2,
        question: "Што содржат сите органски молекули?",
        answer: "Јаглерод и водород",
        options: [
            "Кислород",
            "Јаглерод и водород",
            "Водород и бакар",
            "Органели"
        ]
    },
    {
        id: 3,
        question: "Fe е симбол за кој елемент од периодниот систем?",
        answer: "Железо",
        options: [
            "Злато",
            "Бакар",
            "Фосфор",
            "Железо"
        ]
    },
    {
        id: 4,
        question: "Кој од следниве елементи не е метал?",
        answer: "Сулфур",
        options: [
            "Алуминиум",
            "Сулфур",
            "Железо",
            "Берилиум"
        ]
    },
    {
        id: 5,
        question: "Како се нарекува врската помеѓу атомите во еден молекул?",
        answer: "Хемиска врска",
        options: [
            "Хемиска врска",
            "Физичка врска",
            "Водородна врска",
            "Моларна врска"
        ]
    },
    {
        id: 6,
        question: "Кога се создава хемиска врска..",
        answer: "Се ослободува енергија",
        options: [
            "Се апсорбира енергија",
            "Се ослободува енергија",
            "Не се ослободува и апсорбира енергија",
            "Се ослободува кислород"
        ]
    },
    {
        id: 7,
        question: "Колку елементи има во периодниот систем?",
        answer: "118",
        options: [
            "96",
            "118",
            "253",
            "112"
        ]
    },
    {
        id: 8,
        question: "Од што е составена една молекула на вода?",
        answer: "Два атоми водород и еден атом кислород",
        options: [
            "Два атоми водород и два атоми кислород",
            "Атом водород и Атом кислород",
            "Два атоми водород и еден атом кислород",
            "3 атоми водород и два атоми јаглерод"
        ]
    },
    {
        id: 9,
        question: "Што е всушност соединението NaCl, односно натриум хлорид?",
        answer: "Готварска сол",
        options: [
            "Оцетна киселина",
            "Шеќер",
            "Азотна киселина",
            "Готварска сол"
        ]
    },
    {
        id: 10,
        question: "Што означува pH вредноста кај растворите?",
        answer: "Киселост и алкалност",
        options: [
            "Густина",
            "Моларна маса",
            "Киселост и алкалност",
            "Ниво на јаглеродни честички"
        ]
    },
    {
        id: 11,
        question: "Во која агрегатна состојба материјата се шири за да зафати повеќе простор?",
        answer: "Гасовита",
        options: [
            "Течна",
            "Гасовита",
            "Замрзнана",
            "Тврда"
        ]
    },
    {
        id: 12,
        question: "Што е атомски број?",
        answer: "Бројот на протони во атомското јадро",
        options: [
            "Вкупниот број на протони и електрони во атомското јадро",
            "Бројот на неутрони во атомското јадро",
            "Бројот на електрони во атомското јадро",
            "Бројот на протони во атомското јадро"
        ]
    },
    {
        id: 13,
        question: "Кој е главниот материјал што се користи за правење стакло?",
        answer: "Песок",
        options: [
            "Песок",
            "Железо",
            "Вода",
            "Водород"
        ]
    },
    {
        id: 14,
        question: "Што е хемиска реакција?",
        answer: "Процес во кој едни хемиски соединенија се претвораат во други",
        options: [
            "Врска помеѓу два атоми",
            "Процес за ослободување енергија",
            "Процес при кој се ослободуваат електрони",
            "Процес во кој едни хемиски соединенија се претвораат во други"
        ]
    },
    {
        id: 15,
        question: "Што е легура?",
        answer: "Смеса од два или повеќе метали",
        options: [
            "Смеса од два или повеќе метали",
            "Соединение од водороден и кислороден атом",
            "Врска помеѓу два атома на бакар",
            "Ниту едно од наведените"
        ]
    },
    {
        id: 16,
        question: "Температурата на која гасот се претвора во течност се нарекува и ..",
        answer: "Точка на кондензирање",
        options: [
            "Точка на топење",
            "Точка на кондензирање",
            "Точка на вриење",
            "Оводенување"
        ]
    },
    {
        id: 17,
        question: "Кој го конструирал модерниот периодичен систем?",
        answer: "Менделеев",
        options: [
            "Нобел",
            "Мендел",
            "Менделеев",
            "Лавосиер"
        ]
    },
    {
        id: 18,
        question: "Кој е симбол на златото?",
        answer: "Au",
        options: [
            "Ag",
            "Au",
            "Pb",
            "H"
        ]
    },
    {
        id: 19,
        question: "Каква наука е хемијата?",
        answer: "Природна",
        options: [
            "Општествена",
            "Политичка",
            "Природна",
            "Математичка"
        ]
    },
    {
        id: 20,
        question: "Кој е симболот за кислород?",
        answer: "O",
        options: [
            "Ag",
            "O",
            "H",
            "C"
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