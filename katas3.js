const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(valor){

    let novoElemento = document.createElement("div");
    let sequencianumerica = document.createTextNode(valor);
    novoElemento.appendChild(sequencianumerica);

    let pai = document.getElementsByTagName("body")[0];
    pai.appendChild(novoElemento)
}


function titulo(texto) {
    let titulo = document.createElement('h4');
    titulo.innerText = texto
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(titulo);
} 

titulo('kata1')

function kata1() {
    let variavel = ''  
    for(i=1; i<=25; i++) {  
        variavel += i + ', '
    }
    showResults(variavel.slice(0, -2));
}

kata1()

titulo('kata2')

function kata2() {
    let variavel = ''
    for(let i = 25; i >= 1; i--) {
        variavel += i + ', '
    }
    showResults(variavel.slice(0, -2));
}

kata2()

titulo('kata3')

function kata3() {
    let variavel = ''
    for(let i = -1; i >= -25; i--) {
        variavel += i + ', '
    }
    showResults(variavel.slice(0, -2));
}

kata3()

titulo('kata4')

function kata4() {
    let variavel = ''
    for(let i = -25; i <= -1; i++) {
        variavel += i + ', '
    }
    showResults(variavel.slice(0, -2));
}

kata4()

titulo('kata5')

function kata5() {
    let variavel = ''
    for(let i = 25; i >=- 25; i-=2) {
        variavel += i + ', '
    }
    showResults(variavel.slice(0, -2));
}

kata5()

titulo('kata6')

function kata6() {
    let variavel = ''
    for(let i = 3; i < 100; i++) {
        if(i % 3 === 0){
            variavel += i + ', '
        }
    }
    showResults(variavel.slice(0, -2));
}

kata6()

titulo('kata7')

function kata7() {
    let variavel = ''
    for (let i = 7; i <=100; i+=7){
        variavel += i + ', '
    }
    showResults(variavel.slice(0, -2));
}

kata7()

titulo('kata8')

function kata8() {
    let variavel = ''
    for (let i = 100; i >= 1; i--){
        if(i % 3 === 0 || i % 7 === 0){
            variavel += i + ', '
        }
    }
    showResults(variavel.slice(0, -2))
}

kata8()

titulo('kata9')

function kata9() {
    let variavel = ''
    for (let i = 5; i <=100; i+=1) {
        if(i % 5 === 0 && i % 2 !== 0){
            variavel += i + ', '
        }
    }
    showResults(variavel.slice(0, -2));
}

kata9()

titulo('kata10')

function kata10() {
    showResults(sampleArray);
}

kata10()

titulo('kata11')

function kata11() {
    let variavel = ''
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 === 0){
            variavel += sampleArray[i] + ', '
        }
    }
    showResults(variavel.slice(0, -2))
}

kata11()

titulo('kata12')

function kata12() {
    let variavel = ''
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 1){
            variavel += sampleArray[i] + ', '
        }
    }
    showResults(variavel.slice(0, -2))
}

kata12()

titulo('kata13')

function kata13() {
    let variavel = ''
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            variavel += sampleArray[i] + ', '
        }
    }
    showResults(variavel.slice(0, -2));
}

kata13()

titulo('kata14')

function kata14() {
    let variavel = ''
    for (let i = 0; i < sampleArray.length; i++) {
        variavel += sampleArray[i]*sampleArray[i] + ', '
    }
    showResults(variavel.slice(0, -2));
}

kata14()

titulo('kata15')

function kata15() {
    let variavel = 0
    for(let i = 1; i <= 20; i++) {
        variavel += i
    }
    showResults(variavel);
}

kata15()

titulo('kata16')

function kata16() {
    let variavel = 0
    for(let i = 0; i < sampleArray.length; i++) {
        variavel += sampleArray[i]
    }
    showResults(variavel);
}

kata16()

titulo('kata17')

function kata17() {
    let variavel = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++) {
        if(variavel > sampleArray[i + 1]) {
            variavel = sampleArray[i+1]
        }
    }
    showResults(variavel);
}

kata17()

titulo('kata18')

function kata18() {
    let variavel = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++){
        if(variavel < sampleArray[i+1]){
            variavel = sampleArray[i+1]
        }
    }
    showResults(variavel);
}

kata18() 

// const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */
 titulo('kataBonus1')
 
function kataBonus1() {
    let destino = document.getElementsByTagName("body")[0];
    for(let i = 1; i <= 20; i++) {
        let elemDiv = document.createElement('div');
        elemDiv.innerText = i;
        elemDiv.style.backgroundColor = 'gray';
        elemDiv.style.height = '20px';
        elemDiv.style.width = '100px';
        elemDiv.style.border = '1px solid'
        destino.appendChild(elemDiv);
        }
}

kataBonus1()

titulo('kataBonus2')

function kataBonus2() {

    for(let i = 1; i <= 20; i++) {
        let div = document.createElement('div');
        div.style.height = '20px';
        div.style.border = '2px dashed purple';       
        div.style.width = 100 + 5*i + 'px';                 // Exibir 20 retângulos cinza sólido, cada um com 20px de altura e larguras variando uniformemente de 105px a 200px, com o intervalo de 5px entre cada retangulo.
        let pai = document.getElementsByTagName('body')[0];     
        pai.appendChild(div);
    }
}

kataBonus2()

titulo('kataBonus3')

function kataBonus3() {
   
    for (let i = 1; i <= 20; i++) {
        let criandoDiv = document.createElement('div');
        criandoDiv.style.backgroundColor = 'gray';
        criandoDiv.style.height = '20px';
        criandoDiv.style.width = sampleArray[i] + 'px';
        criandoDiv.style.border = '1px solid'
        criandoDiv.innerText = i;       //nao foi pedido texto e borda mas so para ver melhor coloquei
        let destino = document.getElementsByTagName('body')[0];
        destino.appendChild(criandoDiv);        
    }
}


kataBonus3()


titulo('kataBonus4')

function kataBonus4() {
    for(let i = 1 ; i <= 20; i++) {
        let div = document.createElement('div');
        div.innerText = i;
        div.style.height = '20px';
        div.style.width = sampleArray[i] + 'px';
        if(i % 2 !== 0){
            div.style.backgroundColor = 'red'
        }else{
            div.style.backgroundColor = 'gray'
        }
        let destino = document.getElementsByTagName("body")[0];
        destino.appendChild(div);
    }
}


kataBonus4()


titulo('kataBonus5')

function kataBonus5() {
    for(let i = 0; i < 20; i++){
        let div = document.createElement('div')
        if(sampleArray[i] % 2 === 0){
            div.style.backgroundColor = 'red';
            div.innerText = i+1 + ' par e vermelho';
        }else{
            div.style.backgroundColor = 'gray';
            div.innerText = i+1 + ' impar e cinza';
        }
        div.style.height = '20px';
        div.style.width = sampleArray[i] + 'px';
       
        let destino = document.getElementsByTagName("body")[0];
        destino.appendChild(div);
    }
}

kataBonus5()

