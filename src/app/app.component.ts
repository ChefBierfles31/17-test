import { Equal } from 'lodash-es';
import { PersonService } from './services/person.service';
import { Component, NgZone, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <ul>
    @for(person of filteredPersons(); track person.name) {
      <li>
        {{ person.name }} has {{ person.money }} dollars
      </li>
    }
  </ul>
  <button (click)="previousPage()">Previous Page</button>
  <button (click)="nextPage()">Next Page</button>
  <small>Page {{ pagingState().page }} of {{ totalPages() }}</small>
  `,
  styles: [],
})
export class AppComponent {

  private persons = this.personService.persons;

  filteredPersons = computed(() => {
    console.log('One of the dependents has changed :D')
    const persons = this.persons();
    const pagingState = this.pagingState();
    const amountToSkip = (pagingState.page - 1) * pagingState.pageSize;
    return persons?.slice(amountToSkip, amountToSkip + pagingState.pageSize);;
  })

  pagingState = signal({
    page: 1,
    pageSize: 5
  })

  totalPages = computed(() => Math.ceil(this.persons()?.length / this.pagingState().pageSize));

  constructor(private personService: PersonService) {}

  nextPage(): void {
    this.pagingState.update((state) => {
      if (state.page < this.totalPages()) state.page += 1
      return { ...state}; // Cant return state directly since it wont pickup the change whyy????
    })
  }

  previousPage(): void {
    this.pagingState.update((state) => {
      if (state.page > 1) state.page -= 1
      return { ...state}; // Cant return state directly since it wont pickup the change whyy????
    })
  }
}
