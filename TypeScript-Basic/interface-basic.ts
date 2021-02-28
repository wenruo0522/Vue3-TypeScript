interface IPerson {
    readonly id: number;
    name: string;
    age?: number;
}

let wuKong: IPerson = {
    id: 1,
    name: 'wuKong',
    age: 500
}

// error: wuKong.id = 10