export class Person {
  id: number;
  name: string;
  lastName: string;
  age: number;
  constructor(obj?: Person) {
    Object.assign(this, obj);
  }
}
