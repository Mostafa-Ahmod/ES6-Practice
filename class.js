class student {
    constructor(stuId, stuName){
        this.id = stuId;
        this.name = stuName;
        this.school = 'The Flowers KG and Hight School'
    }
}
const student1 = new student(102, 'Mostafa');
const student2 = new student(110, 'Rafi');
console.log(student1, student2);