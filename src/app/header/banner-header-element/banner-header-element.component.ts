import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-header-element',
  templateUrl: './banner-header-element.component.html',
  styleUrls: ['./banner-header-element.component.scss']
})
export class BannerHeaderElementComponent implements OnInit {
  navi: Navi[] = [
    {
      text: 'Kennenlernen',
      url: '/kennenlernen',
    },
    {
      text: 'Qualifikation',
      url: '/qualifikation',
    },
    {
      text: 'Antworten',
      url: '/antworten',
    },
    {
      text: 'Kontakt',
      url: '/kontakt',
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

export interface Navi {
  text: string;
  url: string;
}
