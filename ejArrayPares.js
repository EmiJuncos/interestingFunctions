var A = [2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 9, 8];

// this function filter only pair numbers

function pares(n) {
    return n % 2 == 0;
};

//this function filter and delete duplicated values

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

//this function sorts the elements in descending order

function compareNumbers(a, b) {
    return b - a;
}


var resultado = A.filter(onlyUnique)
    .filter(pares)
    .sort(compareNumbers);


console.log(resultado);