//  type inference
let str = 'str'
// error: str = 123

//  union types
let numberOrString: number | string
//  not sure which detail type, only invoke common methods
// error: numberOrString.length
numberOrString.toString()

//  type assertions,can use 'as' to assign detail type
function getLength(input: string | number): number {
    const str = input as string
    if(str.length) {
        return str.length
    } else {
        const number = input as number
        return number.toString().length
    }
}

//  type guard
function getLength2(input: string | number): number {
    if(typeof input === 'string') {
        return input.length
    } else {
        return input.toString().length
    }
}