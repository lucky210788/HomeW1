// Рекурсия
var leng = prompt('Введите длину массива'),
    arrTest = [leng];
function fill(i, c) {
    if (i !== 0) {
        arrTest[i] = c;
        console.log(arrTest[i]);
        fill(i - 1, c + 1);
    }
}

fill(leng, 3);

// копирование обьекта
var clone = {};
function makeClone(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if ("object" === typeof obj[prop])
                clone[prop] = makeClone(obj[prop]);
            else
                clone[prop] = obj[prop];
        }
    }
    return clone;
}

var f = {
    a: 'ee',
    d: 5
};

console.log(makeClone(f));
f.a = 66;
console.log(f.a);
console.log(clone.a);

// Бенчмаркинг
var n = 100000;
var arr = [];
var obj1 = {},
    obj2 = {};
for (var i = 0; i < n; i++) {
    arr[i] = 'aa' + i;
    obj1[i] = 'aa' + i;
    obj2['aa' + i] = 'aa' + i;
}

function benchArrayFor() {
    var dateStart = Date.now();
    for (var i = 0; i < n; i++) {
        arr[i] = arr[i]+'x';
    }
    var result = Date.now() - dateStart;
    console.log('Array : for - '+result);
}

function benchArrayForIn() {
    var dateStart = Date.now();
    for (var key in arr) {
        arr[key] = arr[key]+'x';
    }
    var result = Date.now() - dateStart;
    console.log('Array : for in - '+result);
}



function benchObgFor() {
    var dateStart = Date.now();
    for (var i = 0; i < n; i++) {
        obj1[i] = obj1[i]+'x';
    }
    var result = Date.now() - dateStart;
    console.log('Obj1 : for - ' + result);
}

function benchObgForIn() {
    var dateStart = Date.now();
    for (var key in obj1) {
        obj1[key] = obj1[key]+'x';
    }
    var result = Date.now() - dateStart;
    console.log('Obj1 : for in - ' + result);
}

function benchObg2For() {
    var dateStart = Date.now();
    for (var i = 0; i < n; i++) {
        obj2[i] = arr[i]+'x';
    }
    var result = Date.now() - dateStart;
    console.log('Obj2 : for - ' + result);
}

function benchObg2ForIn() {
    var dateStart = Date.now();
    for (var key in obj2) {
        obj2[key] = arr[key]+'x';
    }
    var result = Date.now() - dateStart;
    console.log('Obj2 : for in - ' + result);
}



benchArrayFor();
benchArrayForIn();

benchObgFor();
benchObgForIn();

benchObg2For();
benchObg2ForIn();