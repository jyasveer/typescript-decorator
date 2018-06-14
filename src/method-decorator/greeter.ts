import { somedecorator } from "./somedecorator";

export class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @somedecorator(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}