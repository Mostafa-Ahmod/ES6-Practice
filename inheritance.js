class Parents {
    constructor(){
        this.fatherName = "Mohiuddin Ahmod";
    }
}


class Child extends Parents{
    constructor(name) {
        super();
        this.name = name;
    }
}
const baby = new Child("Mostafa");
const baby2 = new Child("Amina");
console.log(baby);
console.log(baby2);