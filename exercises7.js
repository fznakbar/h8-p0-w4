function urutkanAbjad(str) {
    // you can only write your code here!
    var tampung = []
    for (var j = 0; j < str.length; j++) {
        tampung.push(str[j])
    }


    let swap
    do {
        swap = false
        for (var i = 0; i < tampung.length - 1; i++) {
            if (tampung[i] > tampung[i + 1]) {
                var tmp = tampung[i + 1]
                tampung[i + 1] = tampung[i]
                tampung[i] = tmp
                swap = true
            }
        }
    }
    while (swap)
    var result = ''
    for (var k = 0; k < tampung.length; k++) {
        result += tampung[k]
    }


    return result
}


// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'