function insert(num){
    var numero = document.getElementById("resultado").innerHTML;
   let p = document.getElementById("resultado").innerHTML = numero + num
   p.substring(10,p.length -10)
}

function clean(){
    document.getElementById("resultado").innerHTML = "";
}

function back(){
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0,resultado.length -1)
}

function calcular(){
    let resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado)
    }
}