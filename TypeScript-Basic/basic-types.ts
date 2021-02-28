// type of boolean
let isDone: boolean = false

// type of number
let age: number = 10
let binaryNumber: number = 0b1111

// type of string
let firstName: string = 'sun'
let message: string = `Hello, ${firstName}, age is ${age}`

// type of undefined and null
let u: undefined = undefined
let n: null = null

// undefined and null both subtype of all
let num: number = undefined

// type of any
let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true
// can access any attributions in type of any
notSure.myName
// can invoke any methods in type of any
notSure.getName()

