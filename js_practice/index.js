class Animal{
    constructor(name){
        this.name = name;
    }

    get_message(){
        return 'Hello';
    }
}

Animal.prototype.age = 10;

const dave = new Animal('dave');
console.log(dave.hasOwnProperty('name'));
console.log(dave.hasOwnProperty('age'));