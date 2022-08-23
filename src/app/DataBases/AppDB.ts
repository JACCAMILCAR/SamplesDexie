import Dexie from 'dexie';
import { Person } from '../models/Person';

export class AppDB extends Dexie {
  person: Dexie.Table<Person>;
  constructor() {
    super('School');
    this.version(1).stores({
      person: '++id, name, lastName, age',
    });
  }
}

export const school = new AppDB();
