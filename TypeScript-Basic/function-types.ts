
//  convention input and output
function add(x: number, y: number): number {
    return x + y
}

//  optional parameter
function add2(x: number, y: number, z?: number): number {
    if(typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

//  function type
const add3: (x: number, y: number, z?: number) => number = add2

//  interface describe function type
const sum = (x: number, y: number) => {
    return x + y
}

interface ISum {
    (x: number, y: number): number
}

const sum2: ISum = sum