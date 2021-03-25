function rotation(array, rotation) {
    for (i = 0; i < rotation; i++) {
        var eliminado = array.shift();
        array.push(eliminado);
    }
    return array;
}

console.log(rotation([1, 2, 3, 4, 5], 4));