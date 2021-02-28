// use type + [] express the Array
let arrOfNumbers: number[] = [1, 2, 3, 4]
// Array can not allow other type element
arrOfNumbers.push(3)
// error: arrOfNumbers.push('abc')

// tuple
let user: [string, number] = ['sun', 10]
// error: user = ['wuKong', 500, 100]
user.push('123')
user.push(2)
// error: user.push(true)