var n = prompt('Введите длину массива'),
    arr = [n];

function fill(i,c) {
    if(i!==0){
        arr[i]=c;
        console.log(arr[i]);
        fill(i-1,c+1);
    }
}

fill(n,3);

// копирование обьекта
function makeClone(obj) {
    var clone = {}; // Создаем новый пустой объект
    for (var prop in obj) { // Перебираем все свойства копируемого объекта
        if (obj.hasOwnProperty(prop)) { // Только собственные свойства
            if ("object"===typeof obj[prop]) // Если свойство так же объект
                clone[prop] = makeClone(obj[prop]); // Делаем клон свойства
            else
                clone[prop] = obj[prop]; // Или же просто копируем значение
        }
    }
    return clone;
}


// var arr = Array(100000);
// var t=1;
//
// for(var i=0; i<arr.length; i++){
//
//     arr[i]=t;
//     t++;
// }
//
// console.log(arr);
