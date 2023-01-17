let questions;
questions = [
    {
        id: 1,
        question: "Колку сантиметри има во еден километар?",
        answer: "100.000",
        options: [
            "100.000.000",
            "10.000",
            "100.000",
            "100"
        ]
    },
    {
        id: 2,
        question: "Звучните бранови не можат да се движат низ:",
        answer: "Вакуум",
        options: [
            "Воздух",
            "Вакуум",
            "Вода",
            "Метал"
        ]
    },
    {
        id: 3,
        question: "Колку изнесува брзината на светлината?",
        answer: "300.000 километри во секунда",
        options: [
            "300.000 метри во секунда",
            "300.000 метри на час",
            "300.000.000 километри на час",
            "300.000 километри во секунда"
        ]
    },
    {
        id: 4,
        question: "Што се мери во Њутни(N)?",
        answer: "Сила",
        options: [
            "Забрзување",
            "Јачина на струја",
            "Сила",
            "Притисок"
        ]
    },
    {
        id: 5,
        question: "Која од наведениве теории е претставена од Ајнштајн?",
        answer: "Теорија на релативност",
        options: [
            "Специјална теорија за брзините",
            "Теорија на хаосот",
            "Теорија за настанокот на човекот",
            "Теорија на релативност"
        ]
    },
    {
        id: 6,
        question: "Честичките светлина се познати како:",
        answer: "Фотони",
        options: [
            "Фотони",
            "Протони",
            "Неутрони",
            "Електрони"
        ]
    },
    {
        id: 7,
        question: "Колку полови има секој магнет?",
        answer: "2",
        options: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        id: 8,
        question: "Каква наука е физиката?",
        answer: "Природна",
        options: [
            "Општествена",
            "Природна",
            "Технолошка",
            "Математичка"
        ]
    },
    {
        id: 9,
        question: "Кој од наведениве зрачења има најголема бранова должина?",
        answer: "Радиобран",
        options: [
            "Микробран",
            "Гама",
            "Радиобран",
            "Инфрацрвено"
        ]
    },
    {
        id: 10,
        question: "Која е формулата за изминат пат?",
        answer: "S=v*t",
        options: [
            "S=v/t",
            "P=a*t",
            "S=v*t",
            "V=s/v"
        ]
    },
    {
        id: 11,
        question: "Која е основна мерна единица за брзина?",
        answer: "Метар во секунда",
        options: [
            "Километар во секунда",
            "Метар во секунда",
            "Метар во секунда на квадрат",
            "Дециметар на час"
        ]
    },
    {
        id: 12,
        question: "Децибел е мерна единица за мерење:",
        answer: "Гласност",
        options: [
            "Температура",
            "Гласност",
            "Брзина",
            "Сила"
        ]
    },
    {
        id: 13,
        question: "Како се исто нарекува Првиот Њутнов закон?",
        answer: "Закон за инерција",
        options: [
            "Закон за брзини",
            "Закон за силите",
            "Закон за инерција",
            "Закон за определување маса на подвижно тело"
        ]
    },
    {
        id: 14,
        question: "Која е мерната единица за напон?",
        answer: "Волт",
        options: [
            "Ват",
            "Ампер",
            "Њутн",
            "Волт"
        ]
    },
    {
        id: 15,
        question: "Во што се мери аголното забрзување?",
        answer: "Радијани во секунда на квадрат",
        options: [
            "Килоетар на час",
            "Метри во секунда на квадрат",
            "Радијани",
            "Радијани во секунда на квадрат"
        ]
    },
    {
        id: 16,
        question: "Која е границата за слушање на човечкото уво",
        answer: "16Hz до 20000Hz",
        options: [
            "16kHz до 20000kHz",
            "16Hz до 20000Hz",
            "Околу 150Hz",
            "220Hz до 480kHz"
        ]
    },
    {
        id: 17,
        question: "Кој ја открил електромагнетната индукција?",
        answer: "Мајкл Фарадеј",
        options: [
            "Исак Њутн",
            "Алберт Ајнштајн",
            "Мајкл Фарадеј",
            "Никола Тесла"
        ]
    },
    {
        id: 18,
        question: "Кој прв го употребил поимот „Радиоактивност“?",
        answer: "Марија и Пјер Кири",
        options: [
            "Алберт Ајнштајн",
            "Галилео Галилеј",
            "Марија и Пјер Кири",
            "Никола Коперник"
        ]
    },
    {
        id: 19,
        question: "Колку приближно изнесува земјиното забрзување?",
        answer: "9.80 метри во секунда на квадрат",
        options: [
            "9.80 метри на час",
            "10 километри на час",
            "9.81 метри во секунда",
            "9.80 метри во секунда на квадрат"
        ]
    },
    {
        id: 20,
        question: "Која е мерната единица за магнетна индукција?",
        answer: "Тесла",
        options: [
            "Њутн",
            "Тесла",
            "Мол",
            "Фарадеј"
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

const opcii = [];
function netocno(count){

    opcii.push(count);
    console.log(opcii);
    sessionStorage.setItem("opc", opcii);
}

let op = sessionStorage.getItem("opc");;
console.log(op);
document.getElementById("opp").innerHTML = "Неточни одговори: "+ op + ".";