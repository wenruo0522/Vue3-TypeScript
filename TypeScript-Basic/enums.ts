//  enums
// enum Direction {
//     Up = 10,
//     Down,
//     Left,
//     Right,
// }

// console.log(Direction.Down)
// console.log(Direction[12])
// console.log(Direction)

//  enums const
const enum Direction {
    Up = 'UP',
    Down = 'Down',
    Left = 'LEFT',
    RIGHT = 'RIGHT'
}

const value = 'UP'

if(value === Direction.Up) {
    console.log('go up!')
}

