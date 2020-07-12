import {Component, Input, OnInit} from '@angular/core';
import {QAPair} from '../../qualification-page/models';

@Component({
  selector: 'app-question-element',
  templateUrl: './question-element.component.html',
  styleUrls: ['./question-element.component.scss']
})
export class QuestionElementComponent implements OnInit {

  @Input() qaPair: QAPair;

  showAnswer = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleAnswer(): void {
    if (this.showAnswer === false) {
      this.showAnswer = true;
    } else {
      this.showAnswer = false;
    }
  }

}
