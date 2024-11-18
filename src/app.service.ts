import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    executeUserInput("console.log('Hello, world!');");
    return 'Hello World!';
  }
}

function executeUserInput(userInput) {
  // WARNING: Using eval can lead to code injection attacks
  eval(userInput);
}
