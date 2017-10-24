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

function benchArr(arr) {
    for (var key in arr) arr[key]++;
}

function benchArr2(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}

function benchObg1(obj1) {
    for (var key in obj1) obj1[key]++;
}

function benchObg1For(obj1) {
    for (var i = 0; i < n; i++) obj1[i]++;
}

function benchObg2(arr) {
    for (var key in arr) arr[key]++;
}

function benchObg2For(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
}

alert('Array : for in - ' + bench(benchArr) + 'мс for - ' + bench(benchArr2) + 'мс');
alert('Obj1 : for in - ' + bench(benchObg1) + 'мс for - ' + bench(benchObg1For) + 'мс');
alert('Obj2 : for in - ' + bench(benchObg2) + 'мс for - ' + bench(benchObg2For) + 'мс');