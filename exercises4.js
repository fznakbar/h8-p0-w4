function cariModus(arr) {
    // you can only write your code here!
    // var swap
    // do {
    //     swap = false
    //     for (var i = 0; i < arr.length; i++) {
    //         if (arr[i] > arr[i + 1]) {
    //             var tmp = arr[i + 1]
    //             arr[i + 1] = arr[i]
    //             arr[i] = tmp
    //             swap = true
    //         }
    //     }
    // } while (swap)

    var tampung = []
    for (var j = 0; j < arr.length; j++) {
        var index = -1
        for (var k = 0; k < tampung.length; k++) {
            if (arr[j] == tampung[k][0])
                index = k
        }
        if (index == -1) {
            tampung.push([arr[j], 1])
        } else {
            tampung[index][1]++
        }
    }

    var hasil = 1
    var nomornya = 0
    for (var x = 0; x < tampung.length; x++) {
        if (tampung[x][1] > hasil) {
            hasil = tampung[x][1]
            nomornya = tampung[x][0]
        }
    }

    if (tampung.length == 1) {
        return -1
    } else if (hasil == 1) {
        return -1
    }
    return nomornya
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1