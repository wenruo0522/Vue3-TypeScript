//  global objects
const a: Array<number> = [1, 2, 3]
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')

//  build-in Object
Math.pow(2, 2)

//  DOM and BOM
let body = document.body
let allLis = document.querySelectorAll('li')
allLis.keys()

document.addEventListener('click', (e) => {
    e.preventDefault()
})

//  Utility Types
interface IPerson {
    name: string
    age: number
}
let wuKong: IPerson = { name: 'wuKong', age: 500 }
type IPartial = Partial<IPerson>

let wuKong2: IPartial = { name: 'wuKong'}

type IOmit = Omit<IPerson, 'name'>
let wuKong3: IOmit = { age: 500 }