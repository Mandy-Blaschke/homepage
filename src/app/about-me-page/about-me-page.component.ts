import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {

  betriebswirtModalVisible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  showBetriebswirt(): void {
    this.betriebswirtModalVisible = true;
  }

  hideBetriebswirt(): void {
    this.betriebswirtModalVisible = false;
  }
}
