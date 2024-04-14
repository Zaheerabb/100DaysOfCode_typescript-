export class favCar {
    name: string;

    constructor(name:string) {
        this.name = name
    }
    message(){
        console.log("My favourite car is ",this.name);
    }
}