import { Component, VERSION } from '@angular/core';
import { Person } from './models/Person';
import { PersonService } from './services/PersonService';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(public person$: PersonService) {}

  savePerson(
    name: HTMLInputElement,
    lastName: HTMLInputElement,
    age: HTMLInputElement
  ): void {
    const p = new Person();
    console.log('entra...');
    p.name = name.value;
    p.lastName = lastName.value;
    p.age = Number(age.value);
    this.person$.savePersonDB(p);
    this.person$.GetList().subscribe((list) => {
      console.log(list);
    });
  }
}
