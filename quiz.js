


// Trying somtehing
let izbor;

function math(){
    return izbor=0;
}
function physics(){
    return izbor=1;
}
function geography(){
    return izbor=2;
}
function biology(){
    return izbor=3;
}
function chemistry(){
    return izbor=4;
}

function locate(){
    if(izbor==0){
       location.href = "Matematika/quiz.html";
       sessionStorage.setItem("opc", 0);
    }
    if(izbor==1){
        location.href = "Fizika/quiz.html";
        sessionStorage.setItem("opc", 0);
    }
    if(izbor==2){
        location.href = "Geografija/quiz.html";
        sessionStorage.setItem("opc", 0);
    }
    if(izbor==3){
        location.href = "Biologija/quiz.html";
        sessionStorage.setItem("opc", 0);
    }
    if(izbor==4){
        location.href = "Hemija/quiz.html";
        sessionStorage.setItem("opc", 0);
    }
}