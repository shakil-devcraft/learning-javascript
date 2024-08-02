class car {
    constructor(Brand){
        this.Brand = Brand;
    }
    parent(){
        return 'My Car Brand Name Is ' + this.Brand;
    }
}

class Model extends car {
    constructor(Brand, Model){
        super(Brand);
        this.model = Model;
    }
    show(){
        return this.parent() + ' And Model Is ' + this.model;
    }
}

let myCar = new Model('Ford', 'Mustang');
console.log(myCar);
console.log(myCar.parent());
console.log(myCar.show());