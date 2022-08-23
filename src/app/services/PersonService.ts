import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { school } from '../DataBases/AppDB';
import { Person } from '../models/Person';

@Injectable()
export class PersonService {
  savePersonDB(person: Person): void {
    school.person.add(person);
  }

  GetList(): Observable<Person[]> {
    return from(school.person.toArray());
  }
}
