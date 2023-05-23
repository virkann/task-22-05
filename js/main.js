

//  1. ES6: Разрушение объектов VIII

    // const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
    // const str = `({ name, email, ...rest} = user ).toString()`


// 2.ES6: Разрушение массивов III

 // DO NOT change arr
// DO NOT USE var [lips] = arr[2]
// "eyes", "nose", and "ears" should not be assigned to anything

// задача:
//const arr = ["eyes", "nose", "lips", "ears"]
//var [/* Create variable lips here and assign it to arr[2] */] = arr

    // ответ:
    // const arr = ["eyes", "nose", "lips", "ears"]
    // var [,,lips] = arr



// 3.Создайте функцию, которая принимает строку и меняет слово 
//удивительно на не удивительно . Вернуть строку без каких-либо 
//изменений, если слово edabit является частью строки.

    // function amazingEdabit(str){
    // 	if (str.includes("edabit")) {
    //   	return str;
    // 	} 
    // 	return str.replace("is", "is not")
    // }
    // console.log(amazingEdabit("edabit is amazing."));
    // console.log(amazingEdabit("Mubashir is amazing."));
    // console.log(amazingEdabit("Infinity is amazing."));


// 4.Воссоздание свойства String.length

    // function length(s) 
    // {
    // 	let cnt = 0;
    // 	for(let i=0; i< s.length; i++){
    // 	cnt ++;
    // 	}
    // 	return cnt;	
    // }
    // console.log(length("Hello World"));
    // console.log(length("Edabit"));
    // console.log(length("wash your hands!"));


// 5. Студент, изучающий JavaScript, пытался создать функцию, 
//которая сортирует все буквы слова, но его код не работает, и он не может понять, почему.
//Найдите и исправьте ошибки в коде, чтобы функция заработала.

    // function sortWord(word) 
    // {
    // 	return word.split("").sort().join("");
    // }
    // console.log(sortWord("dcba"));
    // console.log(sortWord("Unpredictable"));
    // console.log(sortWord("pneumonoultramicroscopicsilicovolcanoconiosis"));

// 6. Использование оператора «&&»

    // function and(a, b) {
    // 	if(a && b ){
    // 		return true;
    // 	}
    // 	return false;
    // }
    // console.log(and(true, false));
    // console.log(and(true, true));
    // console.log(and(false, true));
    // console.log(and(false, false));


// 7.Создайте функцию, которая принимает число nи возвращает nчетное число, начинающееся с 0 в качестве первого.

    // function nthEven(n) {
    // 	return (n * 2) - 2;
    // }
    // console.log(nthEven(1));
    // console.log(nthEven(2));
    // console.log(nthEven(100));

// 8. Напишите функцию, которая возвращает trueif k^k == nдля ввода (n, k)и возвращает falseв противном случае.

    // function kToK(n, k) {
    // 	if(Math.pow(k,k) == n){
    // 		return true;
    // 	}
    // 	return false;
    // }
    // console.log(kToK(4 , 2));
    // console.log(kToK(3874 , 9));

// 9. Формы с N сторонами

    // function nSidedShape(n) {
    // 	const obj = {
    // 		1: "circle",
    // 		2: "semi-circle",
    // 		3: "triangle",
    // 		4: "square",
    // 		5: "pentagon",
    // 		6: "hexagon",
    // 		7: "heptagon",
    // 		8: "octagon",
    // 		9: "nonagon",
    // 		10: "decagon",
    // 	}
    // 	return obj[n]
    // }
    // console.log(nSidedShape(4));
    // console.log(nSidedShape(2));
    // console.log(nSidedShape(10));


// 10.Создайте функцию, которая принимает массив с числами и возвращает массив с элементами, умноженными на два.


    // function getMultipliedArr(arr) {
        
    // 	for(i = 0; i < arr.length; i++){
    // 	arr[i] *= 2;
    // 	}
        
    // 	return arr;
    // }
    // console.log(getMultipliedArr([2, 5, 3]));



// 11. Создайте функцию, которая берет массив слов и преобразует его в массив длины каждого слова.


    // function wordLengths(arr) {
    // 	return arr.map(arr1 => arr1.length)
    // }
    // console.log(wordLengths(["hello", "world"]));
    // console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));



// 12. Create a function that has some arguments and returns the type of the fifth argument. 
// In case the arguments were less than 5, return "Not enough arguments".

    // function fifth() {
    // 	if(arguments.length < 5){
    // 	return "Not enough arguments";
    // 	}
    // 	return typeof arguments[4];   
    // }
    // console.log(fifth(1, 2, 3, 4, 5));
    // console.log(fifth("a", 2, 3, true, "five"));
    // consol.log(fifth());


// 14. Создайте функцию, которая ищет индекс данного элемента в массиве. 
//Если элемент присутствует, он должен вернуть индекс, в противном случае он должен вернуть -1.

    // function search(arr, item) {
    //  for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == item) {
    //     return i;
    //     }
    //  }
    // return -1;
    // }
    // console.log(search([1, 2, 3, 4], 3));
    // console.log(search([2, 4, 6, 8, 10], 8));


// 15.Объединение двух целочисленных массивов

        // function concat(arr1, arr2) {
        // let newArray = arr1.concat(arr2);
        // return newArray;
        // }
        // console.log(concat([1, 3, 5], [2, 6, 8]))

// 16. Воссоздание функции abs()

// function absolute(n) {
// 	if(n < 0 ){
// 		return 0 - n;
// 	}
// 	return n;
// }
// console,log(absolute(-1.217197940))
// console.log(absolute(-12.1320));
// console.log(absolute(-544.0));
// console.log(absolute(4666));
// console.log(absolute(-3.14));
// console.log(absolute(250));

// 17.Содержит ли объект заданный ключ?

//    function hasKey(obj, key) {
//      	return Object.keys(obj).includes(key)
//      }
//      console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
//      console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));


// 18. Найти индекс

// function findIndex(lst, str) 
// {
// 	for (let i = 0; i <= lst.length; i++) {
// 	    if (lst[i] == str) {
// 	    return i;
// 		}
// 	}
// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));


// 19.Минимум II: логическая избыточность

// function parity(n) {
// 	let remainder = Boolean(n % 2)
// 	if(remainder === false) {
// 		return "even"
// 	}
// 	if(remainder === true) {
// 		return "odd"
// 	}
// }

// 20.Шестнадцатеричный в двоичный

    // function toBinary(num) {
    // 	return num.toString(2)
    // }
    // console.log(toBinary(0xFF))
    // console.log(toBinary(0xAA))
    // console.log(toBinary(0xFA))