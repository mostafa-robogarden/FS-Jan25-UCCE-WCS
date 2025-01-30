function Swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log(a, b)
}
function IsEven(number) {
    return number % 2 === 0 ? true : false;
}
function Search(key, numbers_list) {
    for(number of numbers_list) {
        if(key === number)
            return true;
    }
    return false;
}
let a = 2;
let b = 3;
//Swap(a, b);
//console.log(IsEven(5));
numbers_list = [3, 5, 2, 5, 100, 452, 63, -1, -552, 13, 7423, 441];
const found = Search(63) ? 'Key is found' : 'Key is not found';
console.log(found)