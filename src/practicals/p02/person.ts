export class Person {
    public firstname: string = 'Unknown';
    public lastname: string = 'Unknown';
    public age: number = 0;
    static COUNTRY: string = 'Thailand';

    getFullName() {
        console.log(`${this.firstname} ${this.lastname}`);
    }

    setAge(x: number) {
        this.age = x;
    }

    getAge() {
        return this.age;
    }

}