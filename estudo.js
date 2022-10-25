// alert("Oi! Eu sou o Alert");
// document.write("Estou na página.");
// console.log("Eu estou no console.");
let tabuada = 5;
function alo(){

    let tabuada = document.getElementById("entrada").value;

    document.write("<h1>Tabuada do " + tabuada + "</h1>");
    document.write(tabuada + " x 1 = " + (tabuada*1)+"<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2)+"<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3)+"<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4)+"<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5)+"<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6)+"<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7)+"<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8)+"<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9)+"<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10));
}
// for(inicio, validaçao, manutençao)
function escreva(){
    for(var i=1; i <= 10; i++){
        for(var j = 1; j <=10; j++){
            document.write(i + " x " + j + " = " + (j*i)+"<br>");
        }
        document.write("<br>");
    }
}

function quadrado(){
    for(var i = 2; i < 11; i++){
        document.write("O quadrado de " + i + " é " + (i*i)+"<br>");
    }
}
function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function total(){
    
    let resultado = (val * ((ju/100)+1));
    let valor = document.getElementById("val").value;
    let mes = document.getElementById("mes").value;
    for(let i = 1; i <=mes; i++){
        resultado = valor * (1+(juros/100));
        valor = resultado;
        document.write("mes" + i + " valor;"+ resultado + "<br>");
    }
    document.write("O total é de: " + resultado);
    let juros = document.getElementById("ju").value;
}
document.write("O resultado e " + moeda(resultado));


function soma(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n1").value;
    let n3 = document.getElementById("n1").value;
    let r = Number(n1) + Number(n2) + Number(n3);
    document.getElementById("resultado").innerHTML = r;
}
function media(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n1").value;
    let n3 = document.getElementById("n1").value;
    let r = (Number(n1) + Number(n2) + Number(n3)) / 3;
    document.getElementById("resultado").innerHTML = r;
         
        if(!Number(valor)){
            alert("O valor deve ser um numero");

            document.getElementById("val").value="";
            document.getElementById("val").focus();
            
            return  
    }
    if(!Number(meses)){
alert("A quantidade de meses deve ser numero animal");
            document.getElementById("val").value="";
            document.getElementById("val").focus();
        return  
}
if(!Number(juros)){
    alert("A quantidade de meses deve ser numero animal");
            document.getElementById("val").value="";
            document.getElementById("val").focus();
    return  
}
function falta(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let r = 180 - (Number(n1) + Number(n2) + Number(n3));
 
    //document.getElementById("resultado").innerHTML = r;

}