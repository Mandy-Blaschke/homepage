import {Component, OnInit} from '@angular/core';
import {faq, forbiddenQuestions, QAPair} from '../qualification-page/models';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {
  faq: QAPair[] = faq;
  forbiddenQuestions: QAPair[] = forbiddenQuestions;


  constructor() {
  }

  ngOnInit(): void {
  }



}
