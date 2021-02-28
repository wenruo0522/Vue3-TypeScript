//  class in typescript
//  private, public, readonly, protected
class Animal {
    readonly name: string;
    constructor(name) {
        this.name = name
    }
    private run() {
        return `${this.name} is running`
    }
    protected eat() {
        return `${this.name} is eating`
    }
}

const pig = new Animal('lily')
// error: pig.name = 'lucy'
// error: console.log(pig.run())
// error: console.log(pig.eat())

class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const xiaohei = new Dog('xiaohei')
// error: console.log(xiaohei.eat())
console.log(xiaohei.bark())

class Cat extends Animal {
    static catagories = ['mamal']
    constructor(name) {
        super(name)
        console.log(this.name)
    }
    eat() {
        return 'Meow, ' + super.eat()
    }
} 

const xiaomao = new Cat('maomao')
console.log(xiaomao.eat())
console.log(Cat.catagories)


