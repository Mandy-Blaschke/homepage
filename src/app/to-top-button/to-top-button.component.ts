import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.scss']
})
export class ToTopButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

}
