import { Injectable, computed, signal } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export interface Person {
  name: string;
  money: number;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private _persons = signal<Person[]>(undefined);
  get persons() {
    return this._persons.asReadonly();
  }

  hasLoaded = computed(() => this.persons() !== undefined);

  constructor() {
    this.refresh();
  }

  getAll(): Observable<Person[]> {
    return of([
      {
        name: 'Alice',
        money: 150,
      },
      {
        name: 'Bob',
        money: 280,
      },
      {
        name: 'Carol',
        money: 210,
      },
      {
        name: 'David',
        money: 320,
      },
      {
        name: 'Eva',
        money: 180,
      },
      {
        name: 'Frank',
        money: 270,
      },
      {
        name: 'Grace',
        money: 190,
      },
      {
        name: 'Helen',
        money: 230,
      },
      {
        name: 'Ivan',
        money: 260,
      },
      {
        name: 'Jack',
        money: 290,
      },
      {
        name: 'Karen',
        money: 220,
      },
      {
        name: 'Leo',
        money: 240,
      },
      {
        name: 'Mia',
        money: 200,
      },
      {
        name: 'Nina',
        money: 310,
      },
      {
        name: 'Oliver',
        money: 170,
      },
      {
        name: 'Paul',
        money: 300,
      },
      {
        name: 'Quinn',
        money: 250,
      },
      {
        name: 'Rachel',
        money: 190,
      },
      {
        name: 'Sam',
        money: 260,
      },
      {
        name: 'Tom',
        money: 280,
      },
      {
        name: 'Ursula',
        money: 220,
      },
      {
        name: 'Vince',
        money: 310,
      },
      {
        name: 'Wendy',
        money: 200,
      },
      {
        name: 'Xander',
        money: 180,
      },
      {
        name: 'Yara',
        money: 230,
      },
      {
        name: 'Zane',
        money: 240,
      },
      {
        name: 'Liam',
        money: 270,
      },
      {
        name: 'Sophia',
        money: 300,
      },
      {
        name: 'Noah',
        money: 220,
      },
      {
        name: 'Olivia',
        money: 210,
      },
      {
        name: 'Elijah',
        money: 320,
      },
      {
        name: 'Charlotte',
        money: 150,
      },
      {
        name: 'Mason',
        money: 290,
      },
      {
        name: 'Amelia',
        money: 250,
      },
      {
        name: 'Harper',
        money: 180,
      },
      {
        name: 'Benjamin',
        money: 260,
      },
      {
        name: 'Abigail',
        money: 190,
      },
      {
        name: 'Ethan',
        money: 310,
      },
      {
        name: 'Ava',
        money: 200,
      },
      {
        name: 'Lucas',
        money: 240,
      },
      {
        name: 'Mia',
        money: 280,
      },
      {
        name: 'Layla',
        money: 170,
      },
      {
        name: 'Henry',
        money: 300,
      },
      {
        name: 'Scarlett',
        money: 230,
      },
      {
        name: 'Logan',
        money: 250,
      },
    ]).pipe(delay(500))
  }

  refresh(): void {
    this._persons.set(undefined);
    this.getAll().subscribe((persons) => {
      this._persons.set(persons);
    });
  }
}
