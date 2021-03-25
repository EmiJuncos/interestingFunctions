var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

//this function divides an array according to the parameters that we provide
function dividoArray(array, paquetes) {
    var nuevoArray = [];
    for (i = 0; i < array.length; i += paquetes) {
        nuevoArray.push(array.slice([i], i + paquetes));
    }
    return nuevoArray;
}

console.log(dividoArray(n, 5));
console.log(dividoArray(n, 4));