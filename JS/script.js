//VARIAVEIS
let bnt1 = 0;
let bnt2 = 0;
let bnt3 = 0;
let bnt4 = 0;
let bnt5 = 0;
let bnt6 = 0;
let bnt7 = 0;
let bnt8 = 0;
let bnt9 = 0;
let controle = 0;
let jogadas = 0;
let finalJogo = false;

//CLICK BOTÃO
function clickBtn1() {
    jogadas++;
    let btn = document.getElementById('btn1');
    if (btn.value == " " && !finalJogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn1 = "X"

        } else {
            controle = 0
            btn.value = "O"
            btn1 = "O"

        }
    }
    verificaGanhador();
}
function clickBtn2() {
    jogadas++;
    let btn = document.getElementById('btn2');
    if (btn.value == " " && !finalJogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn2 = "X"

        } else {
            controle = 0
            btn.value = "O"
            btn2 = "O"

        }
    }
    verificaGanhador();
}

function clickBtn3() {
    jogadas++;
    let btn = document.getElementById('btn3');
    if (btn.value == " " && !finalJogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn3 = "X"

        } else {
            controle = 0
            btn.value = "O"
            btn3 = "O"

        }
    }
    verificaGanhador();
}
function clickBtn4() {
    jogadas++;
    let btn = document.getElementById('btn4');
    if (btn.value == " " && !finalJogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn4 = "X"

        } else {
            controle = 0
            btn.value = "O"
            btn4 = "O"

        }
    }
    verificaGanhador();
}
function clickBtn5() {
    jogadas++;
    let btn = document.getElementById('btn5');
    if (btn.value == " " && !finalJogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn5 = "X"

        } else {
            controle = 0
            btn.value = "O"
            btn5 = "O"

        }
    }
    verificaGanhador();
}
function clickBtn6() {
    jogadas++;
    let btn = document.getElementById('btn6');
    if (btn.value == " " && !finalJogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn6 = "X"

        } else {
            controle = 0
            btn.value = "O"
            btn6 = "O"

        }
    }
    verificaGanhador();
}
function clickBtn7() {
    jogadas++;
    let btn = document.getElementById('btn7');
    if (btn.value == " " && !finalJogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn7 = "X"

        } else {
            controle = 0
            btn.value = "O"
            btn7 = "O"

        }
    }
    verificaGanhador();
}
function clickBtn8() {
    jogadas++;
    let btn = document.getElementById('btn8');
    if (btn.value == " " && !finalJogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn8 = "X"

        } else {
            controle = 0
            btn.value = "O"
            btn8 = "O"

        }
    }
    verificaGanhador();
}
function clickBtn9() {
    jogadas++;
    let btn = document.getElementById('btn9');
    if (btn.value == " " && !finalJogo) {
        if (controle == 0) {
            controle = 1
            btn.value = "X"
            btn9 = "X"

        } else {
            controle = 0
            btn.value = "O"
            btn9 = "O"

        }
    }
    verificaGanhador();
}

//verifica o ganhador

function verificaGanhador() {
    let lblJogador = document.getElementById("lblJogador");
    let lblJogadas = document.getElementById("lblJogadas");

    //JOGADOR X
    if (btn1 == 'X' && btn2 == 'X' && btn3 == 'X') {
        finalJogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    if (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') {
        finalJogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn7 == 'X' && btn8 == 'X' && btn9 == 'X') {
        finalJogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn1 == 'X' && btn5 == 'X' && btn9 == 'X') {
        finalJogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn3 == 'X' && btn5 == 'X' && btn7 == 'X') {
        finalJogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn1 == 'X' && btn4 == 'X' && btn7 == 'X') {
        finalJogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') {
        finalJogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn3 == 'X' && btn6 == 'X' && btn9 == 'X') {
        finalJogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }

    //JOGADOR O
    if (btn1 == 'O' && btn2 == 'O' && btn3 == 'O') {
        finalJogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }

    if (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') {
        finalJogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn7 == 'O' && btn8 == 'O' && btn9 == 'O') {
        finalJogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn1 == 'O' && btn5 == 'O' && btn9 == 'O') {
        finalJogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn3 == 'O' && btn5 == 'O' && btn7 == 'O') {
        finalJogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn1 == 'O' && btn4 == 'O' && btn7 == 'O') {
        finalJogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') {
        finalJogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
    }
    if (btn3 == 'O' && btn6 == 'O' && btn9 == 'O') {
        finalJogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';

    }
    // VERIFICA SE FOI EMPATE
    if (jogadas ==9){
        finalJogo = true;
        alert('Deu Velha');
        lblJogador.innerText = 'Deu velha';
        lblJogadas.innerText = '';
    }
    lblJogadas.innerText = '(' + (jogadas+1) + 'ª Jogada)';
}