// Question no 1 - 1 -> Error handeling

function calculateArea(length, width) {

    length = Number(length)
    width = Number(width)
    // console.log(typeof width) as this converting string to a number 
    return length * width;
}
console.log(calculateArea(10, "5")); 