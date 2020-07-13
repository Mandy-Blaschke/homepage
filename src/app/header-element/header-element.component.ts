import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-element',
  templateUrl: './header-element.component.html',
  styleUrls: ['./header-element.component.scss']
})
export class HeaderElementComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Navi {
  text: string;
  url: string;
}
