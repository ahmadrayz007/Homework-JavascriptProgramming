class Konversi {
    constructor(){}
    celcius(to, number){
        if (to == "1" ){
        return number
        }
        if (to == "2"){
        return (9/5) * number + 32
        }
        if (to == "3"){
            (4/5) * number
        }
    }
    farenheit(to, number){
        if (to == "2"){
            return number
        }
        if (to == "1"){
            return (5/9) * (number - 32)
        }
        if (to == "3"){
            return (4/9) * (number - 32)
        }
    }
    reamur(to, number){
        if (to == "3"){
            return number
        }
        if (to == "2"){
            (9/4) * number + 32
        }
        if (to == "1"){
            (5/4) * number
        }
    }
}

let inputEl = document.getElementById("input");
let resultEL = document.getElementById("result");

const fromEl = document.getElementById("from");
const toEl = document.getElementById("to");


function select (){
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";

}
const konversi = new Konversi();

function konv(){
    if (fromEl.value == "1"){
        const hasil = konversi.celcius(toEl.value, inputEl.value);
        resultEL.value = hasil;
    }
    if (fromEl.value == "2"){
        const hasil2 = konversi.farenheit(toEl.value, inputEl.value);
        resultEL.value = hasil2;
    }
    if (fromEl.value == "3"){
        const hasil3 = konversi.reamur(toEl.value, inputEl.value);
        resultEL.value = hasil3;
    }
}

// Background Color
function setColor(){
    const bgColorForm = document.getElementById("color")
    document.body.style.backgroundColor = bgColorForm.value;
    console.log(bgColorForm.value)
}