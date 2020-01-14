function checkAB(num) {
    //coba1
    // you can only write your code here!
    // var tmpA = []
    // var tmpB = []
    // for (var i = 0; i < num.length; i++) {
    //     if (num[i] == 'a') {
    //         tmpA.push(i)
    //     } else if (num[i] == 'b') {
    //         tmpB.push(i)
    //     }
    // }
    // var tampung = [tmpA, tmpB]

    //coba2
    // for (var j = 0; j < num.length; j++) {
    //     if (num[j] == 'a' && num[j + 4] == 'b') {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    // return num[5]

    //coba3
    var tmp = 0
    for (var k = 0; k < num.length; k++) {
        for (var x = 0; x < num.length; x++) {
            if (num[k] == 'a' && num[x] == 'b') {
                if (k - x == 4 || x - k == 4) {
                    return true
                }
            }
        }
    }

    return false

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false