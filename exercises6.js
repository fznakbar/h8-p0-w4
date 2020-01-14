function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var tampung = []
    for (var i = 1; i <= angka; i++) {
        if (angka % i == 0) {
            tampung.push([i.toString() + (angka / i).toString()])
        }
    }

    tampung.length = Math.round(tampung.length / 2)

    var panjang = tampung[0][0].length
    for (var j = 1; j < tampung.length; j++) {
        if (tampung[j][0].length < panjang) {
            panjang = tampung[j][0].length
        }
    }

    return panjang
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2