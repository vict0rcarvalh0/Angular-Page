import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';

import {QuestionService} from './components/services/question.service';
import {QuestionBase} from './question-base';
import {Observable} from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `,
  providers: [QuestionService],
  imports: [AsyncPipe, DynamicFormComponent],
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  title = 'Form App';
}