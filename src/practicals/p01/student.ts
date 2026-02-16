export class Student {
    public firstname: string = 'Unknown';
    public lastname: string = 'Unknown';

    printName() {
        console.log(`${this.firstname} ${this.lastname}`)
    }
}
