function changeMe(arr) {
    // you can only write your code here!
    if (arr == false) {
        console.log('""')
    }
    var result = {}
    for (var i = 0; i < arr.length; i++) {
        console.log(i + 1 + '. ' + arr[i][0] + ' ' + arr[i][1])
        for (var j = 0; j < arr[i].length; j++)
            result.firstName = arr[i][0]
        result.lastName = arr[i][1]
        result.gender = arr[i][2]
        if (arr[i][3] < 2019) {
            result.age = 2019 - arr[i][3]
        } else if (arr[i][3] == undefined) {
            result.age = 'Invalid Birth Year'
        }
        console.log(result)
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""