const repeatString = function(word, num) {
let joiin = [];
    for (let i = 1; i <= num; i++) {
        joiin.push(word);
    }
    return joiin.join("");

}

console.log(repeatString("hey", 3));

