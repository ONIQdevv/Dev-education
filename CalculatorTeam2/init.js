// function init() {
let num1 = '';
let oldNum = 0;
let result = 0;
let action;

const body = document.getElementById('body');
const inputFirst = document.getElementById('inputFirst');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multi = document.getElementById('multi');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const reset = document.getElementById('reset');
const equal = document.getElementById('equal');
const del = document.getElementById('del');

body.addEventListener('keydown', buttonPush, false);
reset.addEventListener('click', allNull, true);
del.addEventListener('click', ce, true);
one.addEventListener('click', writeOne, true);
two.addEventListener('click', writeTwo, true);
three.addEventListener('click', writeThree, true);
four.addEventListener('click', writeFour, true);
five.addEventListener('click', writeFive, true);
six.addEventListener('click', writeSix, true);
seven.addEventListener('click', writeSeven, true);
eight.addEventListener('click', writeEight, true);
nine.addEventListener('click', writeNine, true);
zero.addEventListener('click', writeZero, true);
dot.addEventListener('click', writeDot, true);
plus.addEventListener('click', writeActionPlus, true);
equal.addEventListener('click', getResult, true);
minus.addEventListener('click', writeActionMinus, true);
divide.addEventListener('click', writeActionDivide, true);
multi.addEventListener('click', writeActionMulti, true);


function buttonPush(event){
    console.log(event.key);
    if(num1.length>8){
        return ;}
    switch (event.key) {
        case '1':
            writeOne();
            return "1";
        case '2':
            writeTwo();
            break;
        case '3':
            writeThree();
            break;
        case '4':
            writeFour();
            break;
        case '5':
            writeFive();
            break;
        case '6':
            writeSix();
            return "6";
        case '7':
            writeSeven();
            break;
        case '8':
            writeEight();
            break;
        case '9':
            writeNine();
            break;
        case '0':
            writeZero();
            break;
        case '.':
            writeDotFromPush();
            break;
        case ',':
            writeDotFromPush();
            break;

    }
    }

function writeDotFromPush() {
    if(hasDot()===true){
    return;
    }
    if(hasDot()===false){
        writeDot();
    }
}


function hasDot(){
    for(let i=0; i<num1.length; i++){
        if(num1.charAt(i)==='.')
            return true;
    };
    return false;
}

document.onkeypress = function(event){
    event= event || window.event;
    switch (event.key) {
        case '1':
            writeNumFromBtn('1');
        return "1";
        case '2': writeNumFromBtn('2');
            return "2";
        case '3': writeNumFromBtn('3');
            return "3";
        case '4': writeNumFromBtn('4');
            return "4";
        case '5': writeNumFromBtn('5');
            return "5";
        case '6': writeNumFromBtn('6');
            return "6";
        case '7': writeNumFromBtn('7');
            return "7";
        case '8': writeNumFromBtn('8');
            return "8";
        case '9': writeNumFromBtn('9');
            return "9";
        case '0': writeNumFromBtn('0');
            return "0";
        // case 1: writeNumFromBtn('1');
        //     return "1";



    }
    if (event.charCode && (event.charCode < 48 || event.charCode > 57))
        return false;
};

function writeNumFromBtn(n) {
    num1=num1+n;
}

function writeOne() {
    if (num1.length <= 7)
        num1 = num1 + '1';
    toScreen(num1);
    return num1;
};

function writeTwo() {
    if (num1.length <= 7)
        num1 = num1 + '2';
    toScreen(num1);
    return num1;
};

function writeThree() {
    if (num1.length <= 7)
        num1 = num1 + '3';
    toScreen(num1);
    return num1;
};

function writeFour() {
    if (num1.length <= 7)
        num1 = num1 + '4';
    toScreen(num1);
    return num1;
};

function writeFive() {
    if (num1.length <= 7)
        num1 = num1 + '5';
    toScreen(num1);
    return num1;
};

function writeSix() {
    if (num1.length <= 7)
        num1 = num1 + '6';
    toScreen(num1);
    return num1;
};

function writeSeven() {
    if (num1.length <= 7)
        num1 = num1 + '7';
    toScreen(num1);
    return num1;
};

function writeEight() {
    if (num1.length <= 7)
        num1 = num1 + '8';
    toScreen(num1);
    return num1;
};

function writeNine() {
    if (num1.length <= 7)
        num1 = num1 + '9';
    toScreen(num1);
    return num1;
};

function writeZero() {
    if (num1.length <= 7)
        num1 = num1 + '0';
    toScreen(num1);
    return num1;
};

function writeDot() {
    if (num1 === '') {
        num1 = '0.'
        inputFirst.value = '0.'
        return num1;
    }
    if (num1.length <= 6)
        num1 = num1 + '.';
    toScreen(num1);
    dot.disabled = true;
    return num1;
};

function saveOldNum() {
    dot.disabled = false;
    oldNum = parseFloat(num1);
    num1 = '';
};

function writeActionPlus() {
    if(num1!="" && oldNum!=0){
        getResult();
        action=doPlus();
        return action;
    };
    saveOldNum();
    // toScreen('');
    action = doPlus;
};

function writeActionMinus() {
    if(num1!="" && oldNum!=0){
        getResult();
        action=doMinus();
        return action;
    };
    if (num1 === '' && oldNum === 0) {
        // num1='-';
        writeMinus();
        toScreen(num1);
        return num1;
    }

    saveOldNum();
    // toScreen('');
    action = doMinus;
};

function writeMinus() {

    num1 = num1 + '-';
    // toScreen(num1);
    return num1;
}

function writeActionDivide() {
    if(num1!="" && oldNum!=0){
        getResult();
        action=doDivide();
        return action;
    };
    saveOldNum();
    // toScreen('');
    action = doDivide;
    return action;
};

function writeActionMulti() {
    if(num1!="" && oldNum!=0){
        getResult();
        action=doMulti();
        return action;
    };
    saveOldNum();
    // toScreen('');
    action = doMulti;
};

function roundIOO(n) {
    return Math.ceil((n) * 100) / 100
}

function doPlus() {
    let res = oldNum + parseFloat(num1);
    return roundIOO(res);
};

function doMinus() {
    //let rez = (a + b).toFixed(6) * 1;
    let res = (oldNum - parseFloat(num1)).toFixed(6) * 1;
    return roundIOO(res);
    ;
};

function doDivide() {
    if (num1 === "0") {
        return 'помилка';
    }
    let res = oldNum / parseFloat(num1);
    return roundIOO(res);
};

function doMulti() {
    let res = oldNum * parseFloat(num1);
    return roundIOO(res);
};

function getResult() {
    result = action(oldNum, num1);
    if (result === 'помилка') {
        toScreen(result);
        allNull();
    }
    num1 = String(result);
     oldNum = 0;
     result = 0;
    toScreen(num1);
    return num1;
};

function allNull() {
    dot.disabled = false;
    oldNum = 0;
    num1 = '';
    toScreen(0);
    return num1;
};

function toScreen(n) {
    if (n === 'помилка') {
        inputFirst.value = 'помилка';
        return n;
    }
    inputFirst.value = validation(n);
};

function validation(n) {
    if (String(n).length > 8) {
        allNull();
        return "помилка";
    }
    return n;

}

function ce() {
    if (num1.slice(-1) === '.') {
        dot.disabled = false;
    }
    num1 = num1.substring(0, num1.length - 1);
    toScreen(num1);

    return num1;
}



